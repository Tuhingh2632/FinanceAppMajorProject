import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { openDialogReducer, openRegisterDialogReducer, loginRegisterBufferREducer } from 'store/reducers/menu';
import { useState, useEffect } from 'react';
import FirebaseRegister from './auth-forms/AuthRegister';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';

// project import
import FirebaseSocial from './auth-forms/FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// material-ui
import {
    
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// project import
import AuthRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const values = {
    name: '',
    email: '',
    password: '',
    submit: null
};

export default function RegisterDialog() {
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const auth = getAuth();
    var { openRegisterDialog, loginRegisterBuffer } = menu;
    console.log(menu);
    console.log(openRegisterDialog);

    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState();
    console.log(open);

    useEffect(() => {
        setOpen(openRegisterDialog);
    }, [openRegisterDialog]);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
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
        dispatch(openRegisterDialogReducer({ openRegisterDialog: false }));
        setOpen(false);
    };
    const openLogin = () => {
        dispatch(openRegisterDialogReducer({ openRegisterDialog: false }));
        setOpen(false);
        dispatch(openDialogReducer({ openDialogBox: true }));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Dialog open={open} onClose={handleClose}>
                {loginRegisterBuffer ? (
                    <CircularProgress style={{ margin: 10, maxWidth: 600 }}/>
                ) : (
                    <Grid container spacing={3} style={{ margin: 10, maxWidth: 600 }}>
                        <Grid item xs={11.5}>
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                                <Typography variant="h3">Sign up</Typography>
                                <Typography
                                    component={Link}
                                    onClick={openLogin}
                                    variant="body1"
                                    sx={{ textDecoration: 'none' }}
                                    color="primary"
                                >
                                    Already have an account?
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={11.5}>
                            <AuthRegister />
                        </Grid>
                    </Grid>
                )}
            </Dialog>
        </Box>
    );
}
