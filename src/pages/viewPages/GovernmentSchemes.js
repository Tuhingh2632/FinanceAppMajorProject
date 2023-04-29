import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useSelector, useDispatch } from 'react-redux';
import { openGovernmentSchemesDialogReducer, refreshDataTable, callChangeReducer, cpReducer } from 'store/reducers/menu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import StorageIcon from '@mui/icons-material/Storage';
import { db } from '../../FirebaseConfig';
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, query, where } from 'firebase/firestore';
import { Paper } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Datatable from './DataTable';
import Box from '@mui/material/Box';
import { getAuth, signOut } from 'firebase/auth';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center'
    }
});
const useStyles1 = makeStyles((theme) => ({
    root: {
        '& > *': {
            textAlign: 'center'
        }
    }
}));
const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0
    },
    paper: {
        padding: theme.spacing(2),
        color: 'black',
        backgroundColor: 'white'
    }
}));

// const stocks = [
//     {
//         value: '0P00005V09.BO',
//         label: 'HDFC Liquid Fund Growth'
//     }
//     // {
//     //     value: 'TSLA',
//     //     label: 'Tesla, Inc.'
//     // },
//     // {
//     //     value: 'AAPL',
//     //     label: 'Apple Inc.'
//     // },
//     // {
//     //     value: 'HTHIY',
//     //     label: 'Hitachi, Ltd.'
//     // }
// ];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles2();
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const auth = getAuth();

    var { openGovernmentSchemesDialog, loader, currentUserId } = menu;
    console.log(menu);
    console.log(openGovernmentSchemesDialog);

    //Variable Declaration
    const [open, setOpen] = useState(false);
    const [prices, setPrices] = useState([]);
    const [stockName, setStockName] = useState('');
    const [dateOfInvestment, setdDteOfInvestment] = useState();
    const [investedAmount, setInvestedAmount] = useState(0);
    const [rateOfInvestment, setRateOfInvestment] = useState();
    const [tenure, setTenure] = useState();
    const [previousData, setPreviousData] = useState({});
    const [currentData, setCurrentData] = useState({});
    const [currentValue, setCurrentValue] = useState(null);
    const [progress, setProgress] = useState(false);
    const [stockData, setStockData] = useState([]);
    const [maturedate, setMatureDate] = useState();
    // const [lastCheckedDate,setLastCheckedDate]=useState();
    // var todayDate = new Date().toISOString().slice(0, 10);
    // console.log(todayDate);

    function addMonths(date, months) {
        date.setMonth(date.getMonth() + months);

        return date;
    }

    const date = new Date(dateOfInvestment);

    const stockDataCollentionRef = collection(db, 'GovernmentSchemes');

    const [docId, setDocId] = useState(true);
    const [userId, setuserId] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                setuserId(user.uid);
            } else {
                setuserId('');
            }
        });
    });
    useEffect(() => {
        setOpen(openGovernmentSchemesDialog);
    }, [openGovernmentSchemesDialog]);

    const calculateResult = async () => {
        console.log(stockName);
        console.log(dateOfInvestment);
        console.log(investedAmount);
        if (stockName != '' && dateOfInvestment && investedAmount != '' && rateOfInvestment && tenure) {
            setProgress(true);
            let principal = parseFloat(investedAmount),
                rate = parseFloat(rateOfInvestment),
                time = parseFloat(tenure);

            /* Calculate compound interest */
            let A = principal * Math.pow(1 + rate / 100, time / 12);
            setCurrentValue(A);

            const newDate = addMonths(date, time).toISOString().slice(0, 10);
            console.log(newDate);
            setMatureDate(newDate);
            //todayDate.setMonth(todayDate.getMonth() + time)
            console.log('Compound interest is ' + A);
            setTimeout(() => {
                setProgress(false);
            }, 500);
        } else {
            alert('Plz fill all fields');
        }
    };

    // Getting Data from FireStore
    const q = query(stockDataCollentionRef, where('userId', '==', userId));
    useEffect(() => {
        console.log(docId);

        const getStocks = async () => {
            const res = await getDocs(q);
            setStockData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getStocks();
        // getLiveDataFromFireBase();
    }, [open, currentValue, docId, loader, userId]);

    // Adding Data to the FireStore

    const addStockData = async () => {
        if (stockName != '' && dateOfInvestment != '' && investedAmount != '' && currentValue) {
            setDocId(null);
            await addDoc(stockDataCollentionRef, {
                name: stockName,
                dateOfInvestment: dateOfInvestment,
                investedAmount: investedAmount,
                currentValue: currentValue,
                lastCheckedDate: maturedate,
                userId: userId
            });
            setTimeout(() => {
                setDocId(true);
                handleReset();
            }, 500);
        } else {
            alert('Plz fill all fields');
        }
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(openGovernmentSchemesDialogReducer({ openGovernmentSchemesDialog: false }));

        dispatch(callChangeReducer({ call: true }));
        // dispatch(cpReducer({ cp: true }));
        setTimeout(() => {
            // dispatch(cpReducer({ cp: false }));
            dispatch(callChangeReducer({ call: false }));
        }, 1000);
    };
    const handleReset = () => {
        // dispatch({type: 'FETCH_DATA'})
        setStockName('');
        setdDteOfInvestment('');
        setInvestedAmount(0);
        setCurrentValue('');
        setRateOfInvestment('');
        setTenure('');
        setProgress(false);
    };
    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        InvestoMart
                        </Typography>
                        <Button color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    <Card>
                        <CardContent>
                            <h1 style={{ marginLeft: 20, marginBottom: 0 }}>GOVERNMENT SCHEMES</h1>
                        </CardContent>
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <div style={{ marginLeft: '5vw', marginBottom: '2vw', display: 'flex' }}>
                                    <div style={{ marginRight: 20 }}>
                                        <Typography style={{ marginBottom: 20 }}>Name of Scheme</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Name of Financial Institution"
                                            style={{ width: '40vw' }}
                                            type="text"
                                            value={stockName}
                                            onChange={(e) => setStockName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Typography style={{ marginBottom: 20 }}>Date of Investment</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Date of Investment"
                                            variant="outlined"
                                            style={{ width: '40vw' }}
                                            type="date"
                                            value={dateOfInvestment}
                                            InputLabelProps={{ shrink: true, required: true }}
                                            onChange={(e) => setdDteOfInvestment(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginLeft: '5vw', marginBottom: '2vw', display: 'flex' }}>
                                    <div style={{ marginBottom: '2vw', display: 'flex' }}>
                                        <div style={{ marginRight: 17 }}>
                                            <Typography style={{ marginBottom: 20 }}>Invested Amount</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                label="Invested Amount"
                                                variant="outlined"
                                                style={{ width: '19.5vw' }}
                                                type="number"
                                                value={investedAmount}
                                                onChange={(e) => setInvestedAmount(e.target.value)}
                                            />
                                        </div>
                                        <div style={{ marginRight: 19.5 }}>
                                            <Typography style={{ marginBottom: 20 }}>Rate of Interest'(%)'</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                label="Rate of Interest"
                                                variant="outlined"
                                                style={{ width: '19.5vw' }}
                                                type="number"
                                                value={rateOfInvestment}
                                                onChange={(e) => setRateOfInvestment(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '2vw', display: 'flex' }}>
                                        <div style={{ marginRight: 17 }}>
                                            <Typography style={{ marginBottom: 20 }}>Tenure (in months)</Typography>
                                            <TextField
                                                name="Tenure"
                                                id="Tenure"
                                                variant="outlined"
                                                label="Tenure"
                                                type="number"
                                                value={tenure}
                                                onChange={(e) => setTenure(e.target.value)}
                                                style={{ width: '19.5vw' }}
                                            />
                                        </div>
                                        <div style={{}}>
                                            <Typography style={{ marginBottom: 20 }}>Current Amount</Typography>
                                            <TextField
                                                name="Current Amount"
                                                id="current"
                                                variant="outlined"
                                                label="Current Amount"
                                                type="number"
                                                value={currentValue}
                                                helperText={progress ? <CircularProgress size="1rem" color="inherit" /> : ''}
                                                InputLabelProps={{ shrink: true, required: true }}
                                                style={{ width: '19.5vw' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <Grid container justifyContent="center">
                            <Grid item display="flex">
                                <Button
                                    startIcon={<SearchIcon />}
                                    variant="contained"
                                    color="primary"
                                    style={{ margin: 10, width: 100 }}
                                    onClick={calculateResult}
                                >
                                    Evaluate
                                </Button>
                            </Grid>
                            <Grid item display="flex">
                                <Button
                                    startIcon={<StorageIcon />}
                                    variant="contained"
                                    color="primary"
                                    style={{ margin: 10, width: 100 }}
                                    onClick={addStockData}
                                >
                                    Store
                                </Button>
                            </Grid>
                            <Grid item display="flex">
                                <Button
                                    startIcon={<CloseIcon />}
                                    variant="contained"
                                    color="primary"
                                    style={{ margin: 10, width: 100 }}
                                    onClick={handleReset}
                                >
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </List>
                <List>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <h2 style={{ marginLeft: 10 }}>Stored Data</h2>
                                    <Box sx={{ display: 'flex' }}>
                                        {docId ? (
                                            loader ? (
                                                <Datatable stockData={stockData} finType={'GovernmentSchemes'} lcDate={'Maturity'} />
                                            ) : (
                                                <CircularProgress
                                                    size="1rem"
                                                    color="inherit"
                                                    style={{
                                                        display: 'inline-block',
                                                        position: 'relative',
                                                        margin: '0 auto'
                                                    }}
                                                />
                                            )
                                        ) : (
                                            <CircularProgress
                                                size="1rem"
                                                color="inherit"
                                                style={{
                                                    display: 'inline-block',
                                                    position: 'relative',
                                                    margin: '0 auto'
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </List>
            </Dialog>
        </div>
    );
}
