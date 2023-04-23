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
import { openGoldDialogReducer, refreshDataTable, callChangeReducer, cpReducer } from 'store/reducers/menu';
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
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot,query,where } from 'firebase/firestore';
import { Paper } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Datatable from './DataTable';
import Box from '@mui/material/Box';
import { getAuth, signOut } from "firebase/auth";

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
        value: 'GC=F',
        label: 'Gold'
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

    var { openGoldDialog, loader, currentUserId } = menu;
    console.log(menu);
    console.log(openGoldDialog);

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
    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(todayDate);
    //const [lastCheckedDate,setLastCheckedDate]=useState();
    // const [storeData,setStoreData]=useState({});
    const stockDataCollentionRef = collection(db, 'Gold');
    // const [refresh, setRefresh] = useState(false);
    const [docId, setDocId] = useState(true);
    const [userId,setuserId]=useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log(user.uid);
                setuserId(user.uid);
            }else{
                setuserId("");
            }
            
        });
    })
   

    useEffect(() => {
        setOpen(openGoldDialog);
    }, [openGoldDialog]);

    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data',
        params: { symbol: 'GC=F', region: 'US' },
        headers: {
            'X-RapidAPI-Key': '83063fdc73msha1be2267fb6b4a2p151d4fjsn98f342de4242',
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
            setTimeout(()=>{
                setProgress(false);
            },500)
        }
        console.log(currentValue);
    }, [prices, currentData, previousData, currentValue, docId]);

    // Getting Data from FireStore
    const q = query(stockDataCollentionRef, where("userId", "==", userId));
    useEffect(() => {
        console.log(docId);
        
        const getStocks = async () => {
            const res = await getDocs(q);
            setStockData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };
        getStocks();
        // getLiveDataFromFireBase();
    }, [open, currentValue, docId, loader,userId]);

    // Adding Data to the FireStore

    const addStockData = async () => {
        if (stockName != '' && dateOfInvestment != '' && investedAmount != '' && currentValue) {
            setDocId(false);
            await addDoc(stockDataCollentionRef, {
                name: stockName,
                dateOfInvestment: dateOfInvestment,
                investedAmount: investedAmount,
                currentValue: currentValue,
                lastCheckedDate:todayDate,
                userId:userId
            })
            setTimeout(()=>{
                setDocId(true);
                handleReset();
            },500)
        } else {
            alert('Plz fill all fields');
        }
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(openGoldDialogReducer({ openGoldDialog: false }));

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
        setCurrentValue(null);
        setProgress(false);
    };
    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            ABC STOCK
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
                            <h1 style={{ marginLeft: 20, marginBottom: 0 }}>Gold</h1>
                        </CardContent>
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <div style={{ marginLeft: '5vw', marginBottom: '2vw', display: 'flex' }}>
                                    <div style={{ marginRight: 20 }}>
                                        <Typography style={{ marginBottom: 20 }}>Name of Item</Typography>

                                        <TextField
                                            select
                                            id="outlined-basic"
                                            label="Name of Item"
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
                                                <Datatable stockData={stockData} finType={'Gold'} lcDate={'Last Checked'}/>
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
