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
import { openViewDialogReducer, refreshDataTable, cpReducer, callChangeReducer } from 'store/reducers/menu';
import { useState, useEffect, useRef } from 'react';
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

const stocks = [
    {
        value: 'TCS.NS',
        label: 'Tata Consultancy Services Limited'
    },
    {
        value: 'TSLA',
        label: 'Tesla, Inc.'
    },
    {
        value: 'AAPL',
        label: 'Apple Inc.'
    },
    {
        value: 'HTHIY',
        label: 'Hitachi, Ltd.'
    },
    {
        value: '^NSEI',
        label: 'NIFTY 50'
    },
    {
        value: 'HTHIY',
        label: 'Hitachi, Ltd.'
    },
    {
        value: 'MS',
        label: 'Morgan Stanley'
    },
    {
        value: 'JPM',
        label: 'JPMorgan Chase & Co.'
    },
    {
        value: 'ADANIENT.NS',
        label: 'Adani Enterprises Limited'
    },
    {
        value: 'RELIANCE.NS',
        label: 'Reliance Industries Limited'
    },
    {
        value: 'INFY',
        label: 'Infosys Limited'
    },
    {
        value: 'SAIL.NS',
        label: 'Steel Authority of India Limited'
    },
    {
        value: '^GSPC',
        label: 'S&P 500'
    },
    {
        value: 'HDFCBANK.NS',
        label: 'HDFC Bank Limited'
    },
    {
        value: 'META',
        label: 'Meta Platforms, Inc.'
    },
    {
        value: 'AMZN',
        label: 'Amazon.com, Inc.'
    },
    {
        value: 'TATAMOTORS.NS',
        label: 'Tata Motors Limited'
    },
    {
        value: 'TATASTEEL.NS',
        label: 'Tata Steel Limited'
    },
    {
        value: 'AMEH',
        label: 'Apollo Medical Holdings, Inc.'
    },
    {
        value: 'JINDALSTEL.NS',
        label: 'Jindal Steel & Power Limited'
    }
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles2();
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const auth = getAuth();
    
    var { openViewDialog, loader, currentUserId } = menu;
    console.log(menu);
    console.log(openViewDialog);

    //Variable Declaration
    const [open, setOpen] = useState(false);
    const [prices, setPrices] = useState([]);
    const [stockName, setStockName] = useState('');
    const [dateOfInvestment, setdDteOfInvestment] = useState();
    const [investedAmount, setInvestedAmount] = useState(0);
    const [previousData, setPreviousData] = useState({});
    const [currentData, setCurrentData] = useState({});
    const [currentValue, setCurrentValue] = useState(null);
    const [progress, setProgress] = useState(false);
    const [stockData, setStockData] = useState([]);
    
    //const [lastCheckedDate,setLastCheckedDate]=useState();
    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(todayDate);
    // const [storeData,setStoreData]=useState({});
    const stockDataCollentionRef = collection(db, 'Stocks');
    // const [refresh, setRefresh] = useState(false);
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
        setOpen(openViewDialog);
    }, [openViewDialog]);

    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data',
        params: { symbol: stockName, region: 'US' },
        headers: {
            'X-RapidAPI-Key': '641772311fmsh72fe1c87d808123p1fc405jsndd42f7983e16',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
    };

    const calculateResult = async () => {
        console.log(options.params);
        console.log(stockName);
        console.log(dateOfInvestment);
        console.log(investedAmount);
        if (stockName != '' && dateOfInvestment != '' && investedAmount != '') {
            setProgress(true);
            await axios
                .request(options)
                .then((response) => {
                    console.log(response.data);
                    setPrices(response.data.prices);
                    setCurrentData(response.data.prices[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert('Plz fill all fields');
        }
    };

    useEffect(() => {
        console.log(prices);
        console.log(stockData);
        prices.forEach((element) => {
            let utcSeconds = element.date;
            let date = new Date(utcSeconds * 1000);
            let resultFormat = date.toISOString().split('T')[0];
            if (dateOfInvestment === resultFormat) {
                setPreviousData(element);
            }
        });
        console.log(previousData);
        console.log(currentData);
        let stockAmt = investedAmount / previousData.adjclose;
        let currBuyingPrice = currentData.adjclose;
        let currPrice = stockAmt * currBuyingPrice;
        setCurrentValue(currPrice);

        if (currentValue) {
            setTimeout(() => {
                setProgress(false);
            }, 500);
        }
        console.log(currentValue);
    }, [prices, currentData, previousData, currentValue, docId]);

    const q = query(stockDataCollentionRef, where('userId', '==', userId));
    console.log(userId);
    // Getting Data from FireStore
    useEffect(() => {
        console.log(docId);
        
        const getStocks = async () => {
            const res = await getDocs(q);
            console.log(res);
            setStockData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getStocks();

        // getLiveDataFromFireBase();
    }, [open, currentValue, docId, loader, userId]);

    // Adding Data to the FireStore

    const addStockData = async () => {
        if (stockName != '' && dateOfInvestment != '' && investedAmount != '' && currentValue) {
            setDocId(false);

            await addDoc(stockDataCollentionRef, {
                name: stockName,
                dateOfInvestment: dateOfInvestment,
                investedAmount: investedAmount,
                currentValue: currentValue,
                lastCheckedDate: todayDate,
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

    

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
        dispatch(openViewDialogReducer({ openViewDialog: false }));
        
        
            dispatch(callChangeReducer({ call: true }));
            //dispatch(cpReducer({cp:true}));
            setTimeout(() => {
                // dispatch(cpReducer({cp:false}));
                dispatch(callChangeReducer({ call: false }));
            }, 500);
        
    };
    const handleReset = () => {
        setStockName('');
        setdDteOfInvestment('');
        setInvestedAmount(0);
        setCurrentValue(null);
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
                            <h1 style={{ marginLeft: 20, marginBottom: 0 }}>Stock</h1>
                        </CardContent>
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <div style={{ marginLeft: '5vw', marginBottom: '2vw', display: 'flex' }}>
                                    <div style={{ marginRight: 20 }}>
                                        <Typography style={{ marginBottom: 20 }}>Name of Stock</Typography>

                                        <TextField
                                            select
                                            id="outlined-basic"
                                            label="Name of Stock"
                                            style={{ width: '40vw' }}
                                            value={stockName}
                                            onChange={(e) => setStockName(e.target.value)}
                                        >
                                            {stocks.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
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
                                    <div style={{ marginRight: 20 }}>
                                        <Typography style={{ marginBottom: 20 }}>Invested Amount</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Invested Amount"
                                            variant="outlined"
                                            style={{ width: '40vw' }}
                                            type="number"
                                            value={investedAmount}
                                            onChange={(e) => setInvestedAmount(e.target.value)}
                                        />
                                    </div>

                                    <div>
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
                                            style={{ width: '40vw' }}
                                        ></TextField>
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
                                    Search
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
                                                <Datatable stockData={stockData} finType={'Stocks'} lcDate={'Last Checked'} />
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
