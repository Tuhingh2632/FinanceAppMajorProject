import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import RiskCard from 'components/cards/statistics/RiskCard';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import Donut from './PieChart';
import LineChart from './LineChart';
import { PieChart } from '../../../node_modules/@mui/icons-material/index';
import { db } from '../../FirebaseConfig';
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, query, where } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { callChangeReducer, cpReducer } from 'store/reducers/menu';
import { getAuth, signOut } from 'firebase/auth';
import DoubleDonut from './DoubleDonut';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

function NewDashboard() {
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const auth = getAuth();
    var { call, currentUserId } = menu;
    const [userId, setUserId] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                setUserId(user.uid);
            } else {
                setUserId('');
            }
        });
    });
    const [stockData, setStockData] = useState([]);
    const [cryptoData, setCryptoData] = useState([]);
    const [goldData, setGoldData] = useState([]);
    const [mutualFundData, setMutualFundData] = useState([]);
    const [fixedDepositeData, setFixedDepositeData] = useState([]);
    const [govermentSchemesData, setGovernmentSchemesData] = useState([]);

    const stockDataCollentionRef = collection(db, 'Stocks');
    const cryptoDataCollectionRef = collection(db, 'Crypto');
    const goldDataCollectionRef = collection(db, 'Gold');
    const mutualFundDataCollectionRef = collection(db, 'Mutualfund');
    const fixedDepositeDataCollectionRef = collection(db, 'FixedDeposite');
    const govermentSchemesDataCollectionRef = collection(db, 'GovernmentSchemes');

    const sq = query(stockDataCollentionRef, where('userId', '==', userId));
    const cq = query(cryptoDataCollectionRef, where('userId', '==', userId));
    const gq = query(goldDataCollectionRef, where('userId', '==', userId));
    const mq = query(mutualFundDataCollectionRef, where('userId', '==', userId));
    const fq = query(fixedDepositeDataCollectionRef, where('userId', '==', userId));
    const goq = query(govermentSchemesDataCollectionRef, where('userId', '==', userId));
    //dispatch(callChangeReducer({call:true}));

    useEffect(() => {
        const getStocks = async () => {
            dispatch(cpReducer({ cp: true }));
            const res = await getDocs(sq);
            const res2 = await getDocs(cq);
            const res3 = await getDocs(gq);
            const res4 = await getDocs(mq);
            const res5 = await getDocs(fq);
            const res6 = await getDocs(goq);
            setStockData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setCryptoData(res2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setGoldData(res3.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMutualFundData(res4.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setFixedDepositeData(res5.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setGovernmentSchemesData(res6.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            if (res && res2 && res3 && res4 && res5 && res6) {
                dispatch(cpReducer({ cp: false }));
            }
        };
        getStocks();
    }, [call, userId]);

    let sumInvested = 0;
    let currentVal = 0;

    let cryptoSumInvested = 0;
    let cryptocurrentVal = 0;

    let goldSumInvested = 0;
    let goldCurrentVal = 0;

    let mutualFundSumInvested = 0;
    let mutualFundCurrentVal = 0;

    let fixedDepositeSumInvested = 0;
    let fixedDepositeCurrentVal = 0;

    let governmentSchemesSumInvested = 0;
    let governmentSchemesCurrentVal = 0;

    stockData.forEach((item) => {
        console.log(item);
        sumInvested = sumInvested + parseFloat(item.investedAmount);
        currentVal = currentVal + parseFloat(item.currentValue);
    });
    cryptoData.forEach((item) => {
        console.log(item);
        cryptoSumInvested = cryptoSumInvested + parseFloat(item.investedAmount);
        cryptocurrentVal = cryptocurrentVal + parseFloat(item.currentValue);
    });
    goldData.forEach((item) => {
        console.log(item);
        goldSumInvested = goldSumInvested + parseFloat(item.investedAmount);
        goldCurrentVal = goldCurrentVal + parseFloat(item.currentValue);
    });

    mutualFundData.forEach((item) => {
        console.log(item);
        mutualFundSumInvested = mutualFundSumInvested + parseFloat(item.investedAmount);
        mutualFundCurrentVal = mutualFundCurrentVal + parseFloat(item.currentValue);
    });

    fixedDepositeData.forEach((item) => {
        console.log(item);
        fixedDepositeSumInvested = fixedDepositeSumInvested + parseFloat(item.investedAmount);
        fixedDepositeCurrentVal = fixedDepositeCurrentVal + parseFloat(item.currentValue);
    });

    govermentSchemesData.forEach((item) => {
        console.log(item);
        governmentSchemesSumInvested = governmentSchemesSumInvested + parseFloat(item.investedAmount);
        governmentSchemesCurrentVal = governmentSchemesCurrentVal + parseFloat(item.currentValue);
    });
    // setTotalStockInvested(sumInvested);
    // setTotalStockCurrent(currentVal);

    Math.round(sumInvested);
    Math.round(currentVal);

    console.log(stockData);
    console.log(sumInvested);
    console.log(currentVal);
    console.log(cryptoSumInvested);
    console.log(cryptocurrentVal);

    let totalAmountInvested =
        sumInvested + cryptoSumInvested + goldSumInvested + mutualFundSumInvested + fixedDepositeSumInvested + governmentSchemesSumInvested;

    let totalAmountCurrent =
        currentVal + cryptocurrentVal + goldCurrentVal + mutualFundCurrentVal + fixedDepositeCurrentVal + governmentSchemesCurrentVal;
    //Stock Calculation

    return (
        <div>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography variant="h2">DASHBOARD</Typography>
                    <Stack spacing={4} sx={{ mt: 2 }}>
                        <Typography variant="h5">My Investment</Typography>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="STOCKS"
                                color={currentVal < sumInvested ? '#e53935' : '#52c41a'}
                                current={currentVal}
                                invested={sumInvested}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="MUTUAL FUND"
                                color={mutualFundCurrentVal < mutualFundSumInvested ? '#e53935' : '#52c41a'}
                                current={mutualFundCurrentVal}
                                invested={mutualFundSumInvested}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="CRYPTO CURRENCY"
                                color={cryptocurrentVal < cryptoSumInvested ? '#e53935' : '#52c41a'}
                                current={cryptocurrentVal}
                                invested={cryptoSumInvested}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="GOLD"
                                color={goldCurrentVal < goldSumInvested ? '#e53935' : '#52c41a'}
                                current={goldCurrentVal}
                                invested={goldSumInvested}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="FIXED DEPOSIT"
                                color={fixedDepositeCurrentVal < fixedDepositeSumInvested ? '#e53935' : '#52c41a'}
                                current={fixedDepositeCurrentVal}
                                invested={fixedDepositeSumInvested}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce
                                title="GOVERNMENT SCHEMES"
                                color={governmentSchemesCurrentVal < governmentSchemesSumInvested ? '#e53935' : '#52c41a'}
                                current={governmentSchemesCurrentVal}
                                invested={governmentSchemesSumInvested}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={6} lg={12}>
                            <AnalyticEcommerce title="OTHERS" count="$35,078" percentage={27.4} isLoss color="#1890ff" extra="$20,395" />
                        </Grid>
                        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} /> */}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Stack spacing={3} sx={{ mt: 13, ml: 2 }}>
                        <MainCard>
                            <Typography variant="h5">Total Amount Invested = {totalAmountInvested}</Typography>
                            <Donut
                                stock={sumInvested}
                                crypto={cryptoSumInvested}
                                mutualFund={mutualFundSumInvested}
                                gold={goldSumInvested}
                                others={fixedDepositeSumInvested + governmentSchemesSumInvested}
                            />
                        </MainCard>
                        <MainCard>
                            <Typography variant="h5">Linear Graph</Typography>
                            <LineChart
                                stock={sumInvested}
                                stockVal={currentVal}
                                crypto={cryptoSumInvested}
                                cryptoVal={cryptocurrentVal}
                                mutualFund={mutualFundSumInvested}
                                mutualFundVal={mutualFundCurrentVal}
                                gold={goldSumInvested}
                                goldVal={goldCurrentVal}
                                others={fixedDepositeSumInvested + governmentSchemesSumInvested}
                                othersVal={fixedDepositeCurrentVal + governmentSchemesCurrentVal}
                                totalAmountInvested={totalAmountInvested}
                                totalAmountCurrent={totalAmountCurrent}
                            />
                        </MainCard>
                        <MainCard style={{ height: 350 }}>
                            <Typography variant="h5">Pie Chart</Typography>
                            <DoubleDonut
                                stock={sumInvested}
                                stockVal={currentVal}
                                crypto={cryptoSumInvested}
                                cryptoVal={cryptocurrentVal}
                                mutualFund={mutualFundSumInvested}
                                mutualFundVal={mutualFundCurrentVal}
                                gold={goldSumInvested}
                                goldVal={goldCurrentVal}
                                others={fixedDepositeSumInvested + governmentSchemesSumInvested}
                                othersVal={fixedDepositeCurrentVal + governmentSchemesCurrentVal}
                                totalAmountInvested={totalAmountInvested}
                                totalAmountCurrent={totalAmountCurrent}
                            />
                        </MainCard>
                    </Stack>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
            <ToastContainer position="top-center" />
        </div>
    );
}

export default NewDashboard;
