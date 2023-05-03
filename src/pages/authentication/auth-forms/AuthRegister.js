import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
    Box,
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

// third party
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from 'FirebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { openDialogReducer, openRegisterDialogReducer,currentUidchangeReducer,loginRegisterBufferREducer } from 'store/reducers/menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ============================|| FIREBASE - REGISTER ||============================ //

const initialValues = {
    name: '',
    email: '',
    password: ''
};
const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('Name is required'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required')
})

const AuthRegister = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const {values,errors,handleBlur, handleChange, handleSubmit,isSubmitting,touched} = useFormik({
        initialValues: initialValues,
        validationSchema:validationSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm();
            dispatch(loginRegisterBufferREducer({ loginRegisterBuffer: true }));
            createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
                console.log(res);
                const user=res.user;
                setUserId(res.user.uid)
                
                await updateProfile(user,{
                    displayName:values.name,
                });
                dispatch(openRegisterDialogReducer({ openRegisterDialog: false }));
               
                
            })
            .catch((err)=>{
                console.log("Error--",err);
                let emsg = err.code.toString();
                toast.warn(emsg, {
                    position: "top-center",
                    theme: "dark",
                });
            })
        },
    })
   

    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

   
    return (
        <>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="firstname-signup">Name</InputLabel>
                        <OutlinedInput
                            id="name-login"
                            type="name"
                            value={values.name}
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="John"
                            fullWidth
                            error={Boolean(touched.name && errors.name)}
                        />
                        {touched.name && errors.name && (
                                        <FormHelperText error id="helper-text-name-signup">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="demo@company.com"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="password-signup">Password</InputLabel>
                        <OutlinedInput
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            id="password-signup"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={(e) => {
                                handleChange(e);
                                changePassword(e.target.value);
                            }}

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
                            placeholder="******"
                            inputProps={{}}
                        />
                        {touched.password && errors.password && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                    </Stack>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontSize="0.75rem">
                                    {level?.label}
                                </Typography>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">
                        By Signing up, you agree to our &nbsp;
                        <Link variant="subtitle2" component={RouterLink} to="#">
                            Terms of Service
                        </Link>
                        &nbsp; and &nbsp;
                        <Link variant="subtitle2" component={RouterLink} to="#">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Grid>
                {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                <Grid item xs={12}>

                    <Button
                        // disableElevation
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        
                    >
                        Create Account
                    </Button>

                </Grid>
                <Grid item xs={12}>
                    <Divider>
                        <Typography variant="caption">Sign up with</Typography>
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

export default AuthRegister;
