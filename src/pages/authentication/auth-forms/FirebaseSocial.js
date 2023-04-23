// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Facebook from 'assets/images/icons/facebook.svg';
import { auth, provider } from 'FirebaseConfig';
import {signInWithPopup} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { openDialogReducer, openRegisterDialogReducer,currentUidchangeReducer } from 'store/reducers/menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const navigate=useNavigate();
    const theme = useTheme();
    const dispatch=useDispatch();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [userId, setUserId] = useState('');
    const googleHandler = async (e) => {
        e.preventDefault();
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res.user.uid);
            dispatch(currentUidchangeReducer({ currentUserId: res.user.uid }));
            dispatch(openRegisterDialogReducer({ openRegisterDialog: false }));
            dispatch(openDialogReducer({ openDialogBox: false }));
            navigate("/finance/dashboard/default");
        }).catch((err)=>{
            console.log(err);
        })

    };

    return (
        <Stack
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={googleHandler}
            >
                {!matchDownSM && 'Google'}
            </Button>
        </Stack>
    );
};

export default FirebaseSocial;
