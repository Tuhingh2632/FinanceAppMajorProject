import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openDialogReducer, openRegisterDialogReducer, loginRegisterBufferREducer } from 'store/reducers/menu';
import { openDialog } from 'store/reducers/actions';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import { getAuth, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormDialog() {
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    var { openDialogBox, loginRegisterBuffer } = menu;
    console.log(menu);
    console.log(openDialogBox);

    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState();
    console.log(open);

    useEffect(() => {
        setOpen(openDialogBox);
    }, [openDialogBox]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                setUserId(user.uid);
            } else {
                setUserId('');
            }
        });
    });
    useEffect(() => {
        if (userId) {
            dispatch(loginRegisterBufferREducer({ loginRegisterBuffer: false }));
            navigate('/finance/dashboard/default');
            
        }
    }, [userId]);

    const handleClose = () => {
        dispatch(openDialogReducer({ openDialogBox: false }));
        setOpen(false);
    };
    const openRegister = () => {
        dispatch(openDialogReducer({ openDialogBox: false }));
        setOpen(false);
        dispatch(openRegisterDialogReducer({ openRegisterDialog: true }));
    };

    return (
        <>
         <Box sx={{ display: 'flex' }}>
            <Dialog open={open} onClose={handleClose}>
                {loginRegisterBuffer ? (
                    <CircularProgress style={{ margin: 10, maxWidth: 600 }} />
                ) : (
                    <Grid container spacing={3} style={{ margin: 10, maxWidth: 600 }}>
                        <Grid item xs={11.5}>
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                                <Typography variant="h3">Login</Typography>
                                <Typography
                                    component={Link}
                                    onClick={openRegister}
                                    variant="body1"
                                    sx={{ textDecoration: 'none' }}
                                    color="primary"
                                >
                                    Don&apos;t have an account?
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={11.5}>
                            <AuthLogin />
                        </Grid>
                    </Grid>
                )}
            </Dialog>
        </Box>
        <ToastContainer 
            position="top-center"
        />
        </>
       
    );
}
