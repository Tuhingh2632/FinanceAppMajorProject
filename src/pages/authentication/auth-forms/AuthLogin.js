import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
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

// third party
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';

import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'FirebaseConfig';
import { openDialogReducer, openRegisterDialogReducer, currentUidchangeReducer, loginRegisterBufferREducer } from 'store/reducers/menu';
// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { useSelector, useDispatch } from 'react-redux';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ============================|| FIREBASE - LOGIN ||============================ //

const initialValues = {
    email: '',
    password: ''
};
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required')
});
const AuthLogin = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = React.useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [userId, setUserId] = useState('');
    const [progress, setProgress] = useState(false);
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const { values, errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, action) => {
            console.log(values);
            dispatch(loginRegisterBufferREducer({ loginRegisterBuffer: true }));
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then(async (res) => {
                    action.resetForm();
                    console.log(res.user);
                    setUserId(res.user.uid);
                    const user = res.user;

                    await updateProfile(user, {
                        displayName: user.displayName
                    });
                    dispatch(openDialogReducer({ openDialogBox: false }));
                })
                .catch((err) => {
                    dispatch(loginRegisterBufferREducer({ loginRegisterBuffer: false }));
                    let emsg = err.code.toString();
                    if (emsg === 'auth/user-not-found') {
                        setErrorMsg('User Not-Found');
                        toast.warn(emsg, {
                            position: "top-center",
                            theme: "dark",
                        });
                    }
                    if (emsg === 'auth/wrong-password') {
                        setErrorMsg('Invalid Password');
                        toast.warn(emsg, {
                            position: "top-center",
                            theme: "dark",
                        });
                    }
                    console.log(err.code);
                });
        }
    });
   

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                        <OutlinedInput
                            id="email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="password-login">Password</InputLabel>
                        <OutlinedInput
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            id="-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder="Enter password"
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                        <FormHelperText error id="standard-weight-helper-text-password-login">
                            {errorMsg}
                        </FormHelperText>
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                    size="small"
                                />
                            }
                            label={<Typography variant="h6">Keep me sign in</Typography>}
                        />
                    </Stack>
                </Grid>
                {errors.submit && (
                    <Grid item xs={12}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            // disableElevation
                            disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Divider>
                        <Typography variant="caption"> Login with</Typography>
                    </Divider>
                </Grid>
                <Grid item xs={12}>
                    <FirebaseSocial />
                </Grid>
            </Grid>
        </form>
        <ToastContainer 
            position="top-center"
        />
        </>
        
    );
};

export default AuthLogin;
