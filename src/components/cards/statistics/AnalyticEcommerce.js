import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// project import
import MainCard from 'components/MainCard';
import Layout from 'pages/viewPages/Layout';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { openViewDialogReducer, openCryptoDialogReducer,openGoldDialogReducer,openMutualFundDialogReducer,openFixedDepositeDialogReducer,openGovernmentSchemesDialogReducer } from 'store/reducers/menu';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from 'themes/overrides/Button';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, current, invested }) => {
    const menu = useSelector((state) => state.menu);
    var { cp } = menu;
    const dispatch = useDispatch();
    const handleClickOpen = (e) => {
        e.preventDefault();
        if (title === 'STOCKS') {
            dispatch(openViewDialogReducer({ openViewDialog: true }));
        }
        if (title === 'CRYPTO CURRENCY') {
            dispatch(openCryptoDialogReducer({ openCryptoDialog: true }));
        }
        if(title === 'GOLD'){
            dispatch(openGoldDialogReducer({ openGoldDialog: true }));
        }
        if(title === 'MUTUAL FUND'){
            dispatch(openMutualFundDialogReducer({ openMutualFundDialog: true }));
        }
        if(title==='FIXED DEPOSIT'){
            dispatch(openFixedDepositeDialogReducer({ openFixedDepositeDialog: true }));
        }
        if(title==='GOVERNMENT SCHEMES'){
            dispatch(openGovernmentSchemesDialogReducer({ openGovernmentSchemesDialog: true }));
        }
        
    };
    console.log(current);
    console.log(invested);

    return (
        <MainCard contentSX={{ p: 2.25 }}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" color="textSecondary">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} align="right">
                    <Typography component={Link} onClick={handleClickOpen} variant="h5" color="#2196f3" sx={{ textDecoration: 'none' }}>
                        View
                    </Typography>
                </Grid>
            </Grid>

            <hr />
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h4" color="inherit" align="left">
                        Returns
                    </Typography>
                    {cp ? (
                        <CircularProgress
                            size="1rem"
                            color="inherit"
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                margin: '0 auto'
                            }}
                        />
                    ) : (
                        <Typography variant="h4" color={color} align="left">
                            {(current - invested).toFixed(2)}
                        </Typography>
                    )}
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h4" color="inherit" align="center">
                        Current
                    </Typography>
                    {cp?(<CircularProgress
                            size="1rem"
                            color="inherit"
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                margin: '0 auto'
                            }}
                        />):(<Typography variant="h4" color="inherit" align="center">
                        {current.toFixed(2)}
                    </Typography>)}
                    
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h4" color="inherit" align="right">
                        Invested
                    </Typography>
                    {cp?(<CircularProgress
                            size="1rem"
                            color="inherit"
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                margin: '0 auto'
                            }}
                        />):(<Typography variant="h4" color="inherit" align="right">
                        {invested.toFixed(2)}
                    </Typography>)}
                    
                </Grid>
            </Grid>
        </MainCard>
    );
};

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;
