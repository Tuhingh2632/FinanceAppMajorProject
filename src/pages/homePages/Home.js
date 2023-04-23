import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import NewLoginDialog from 'pages/authentication/NewLoginDialog';
import RegisterDialog from 'pages/authentication/NewRegisterDialog';
import { openDialogReducer, openRegisterDialogReducer } from 'store/reducers/menu';
import '../../assets/css/main.css';
import img1 from '../../assets/img/about.jpg';
import logo from '../../assets/img/hero-img.svg';
import CircularProgress from '@mui/material/CircularProgress';
import stockImg from '../../assets/img/gradient-stock-market-concept_23-2149166910.avif';
import cryptoImg from '../../assets/img/bitcoin-2007769__480.jpg';
import goldImg from '../../assets/img/4. Gold.jpeg.jpg';
import mutualFundImg from '../../assets/img/3.1 MF.jpg';
import fixedDepositImg from '../../assets/img/5.2 fd.jpeg.jpg';
import govtSchemesImg from '../../assets/img/6. govt.jpg';
import Stack from '@mui/material/Stack';
import newstockImg from '../../assets/img/newstock.jpg';
import newcryptoImg from '../../assets/img/new Crypto.jpg';
import newgoldImg from '../../assets/img/new gold.jpg';
import newmutualFundImg from '../../assets/img/new Mutual funds.jpg';
import newfixedDepositImg from '../../assets/img/new  fd.jpg';
import newgovtSchemesImg from '../../assets/img/newGovtSchemes.jpg';
import { Link } from 'react-scroll'

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nifty50Data, setNifty50Data] = useState([]);
    const [sensexData, setSensexData] = useState([]);
    const [nasdaqData, setNasdaqData] = useState([]);
    const [stockNewsData, setStockNewsData] = useState([]);
    const [cryptoNewsData, setCryptoNewsData] = useState([]);
    const [financeNewsData, setFinanceNewsData] = useState([]);
    const [progress, setProgress] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);
    const options1 = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
        params: { symbol: '^NSEI', region: 'US' },
        headers: {
            'X-RapidAPI-Key': '641772311fmsh72fe1c87d808123p1fc405jsndd42f7983e16',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
    };
    const options2 = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
        params: { symbol: '^BSESN', region: 'US' },
        headers: {
            'X-RapidAPI-Key': '641772311fmsh72fe1c87d808123p1fc405jsndd42f7983e16',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
    };
    const options3 = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
        params: { symbol: '^IXIC', region: 'US' },
        headers: {
            'X-RapidAPI-Key': '641772311fmsh72fe1c87d808123p1fc405jsndd42f7983e16',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
    };
    const fetchData = async () => {
        await axios
            .request(options1)
            .then((response) => {
                console.log(response.data);
                setNifty50Data(response.data.prices);
            })
            .catch((err) => {
                console.log(err);
            });

        await axios
            .request(options2)
            .then((response) => {
                console.log(response.data);
                setSensexData(response.data.prices);
                setProgress(false);
            })
            .catch((err) => {
                console.log(err);
            });

        await axios
            .request(options3)
            .then((response) => {
                console.log(response.data);
                setNasdaqData(response.data.prices);
                setProgress(false);
            })
            .catch((err) => {
                console.log(err);
            });

        await axios
            .request('https://newsapi.org/v2/everything?q=stock&apiKey=9541dbabf981485dbc95bebfae0432e0')
            .then((response) => {
                console.log(response.data);
                setStockNewsData(response.data.articles);
                setProgress(false);
            })
            .catch((err) => {
                console.log(err);
            });
        await axios
            .request('https://newsapi.org/v2/everything?q=crypto&apiKey=9541dbabf981485dbc95bebfae0432e0')
            .then((response) => {
                console.log(response.data);
                setCryptoNewsData(response.data.articles);
                setProgress(false);
            })
            .catch((err) => {
                console.log(err);
            });
        await axios
            .request('https://newsapi.org/v2/everything?q=finance&apiKey=9541dbabf981485dbc95bebfae0432e0')
            .then((response) => {
                console.log(response.data);
                setFinanceNewsData(response.data.articles);
                setProgress(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    let nift50CurrentData = 0;
    let senSexCurrentData = 0;
    let nasdaqCurrentData = 0;

    let nift50PreviousData = 0;
    let senSexPreviousData = 0;
    let nasdaqPreviousData = 0;

    let nift50growth = 0;
    let senSexgrowth = 0;
    let nasdaqgrowth = 0;

    let nift50growthinPer = 0;
    let senSexgrowthinPer = 0;
    let nasdaqgrowthinPer = 0;

    if (nifty50Data.length>0 && sensexData.length>0 && nasdaqData.length>0) {
        nift50CurrentData = nifty50Data[0].adjclose.toFixed(2);
        senSexCurrentData = sensexData[0].adjclose.toFixed(2);
        nasdaqCurrentData = nasdaqData[0].adjclose.toFixed(2);

        nift50PreviousData = nifty50Data[1].adjclose.toFixed(2);
        senSexPreviousData = sensexData[1].adjclose.toFixed(2);
        nasdaqPreviousData = nasdaqData[1].adjclose.toFixed(2);

        nift50growth = (nift50CurrentData - nift50PreviousData).toFixed(2);
        senSexgrowth = (senSexCurrentData - senSexPreviousData).toFixed(2);
        nasdaqgrowth = (nasdaqCurrentData - nasdaqPreviousData).toFixed(2);

        nift50growthinPer = ((nift50growth / nift50CurrentData) * 100).toFixed(2);
        senSexgrowthinPer = ((senSexgrowth / senSexCurrentData) * 100).toFixed(2);
        nasdaqgrowthinPer = ((nasdaqgrowth / nasdaqCurrentData) * 100).toFixed(2);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // navigate("/dashboard/default");
        dispatch(openDialogReducer({ openDialogBox: true }));
    };
    const handleRegister = (e) => {
        e.preventDefault();
        // alert('Hii there I am register');
        dispatch(openRegisterDialogReducer({ openRegisterDialog: true }));
    };

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top sticked">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link className="logo d-flex align-items-center text-decoration-none">
                        <h1>InvestoMart</h1>
                    </Link>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link  to="hero" spy={true} smooth={true} offset={-80} duration={500} className="active text-decoration-none">Home</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className=" text-decoration-none">About</Link>
                            </li>
                            <li>
                                <Link to="service" spy={true} smooth={true} offset={-80} duration={500} className=" text-decoration-none">Investments</Link>
                            </li>
                            <li>
                                <Link to="pricing" spy={true} smooth={true} offset={-80} duration={500} className=" text-decoration-none">News</Link>
                            </li>

                            <li>
                                <Link to="faq" spy={true} smooth={true} offset={-80} duration={500} className=" text-decoration-none">Faqs</Link>
                            </li>
                            <li>
                                <Link className="logIn text-decoration-none" onClick={handleLogin}>
                                    Log In
                                </Link>
                            </li>
                            <li>
                                <Link className="get-a-quote text-decoration-none" onClick={handleRegister}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4 d-flex justify-content-between">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 data-aos="fade-up">Smart Investing for a Better Tomorrow</h2>
                            <p data-aos="fade-up" data-aos-delay="100">
                                Track, manage, and optimize your investment portfolio with our powerful monitoring website. Stay informed
                                with real-time data, performance analytics, and personalized insights. Take control of your investments and
                                make informed decisions for financial success.
                            </p>
                        </div>

                        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                            <img src={logo} className="img-fluid mb-3 mb-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="featured-services" className="featured-services">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-cart-flatbed"></i>
                            </div>
                            <div>
                                <h4 className="title">NIFTY 50</h4>
                                <p>
                                    <Box sx={{ flexGrow: 1 }}>
                                        {progress ? (
                                            <CircularProgress />
                                        ) : (
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <h2>{nift50CurrentData}</h2>
                                                </Grid>
                                                {nift50growth < 0 ? (
                                                    <Grid item xs={3.5} style={{ color: 'red' }}>
                                                        <h4>{nift50growth}</h4>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={3.5} style={{ color: 'green' }}>
                                                        <h4>+{nift50growth}</h4>
                                                    </Grid>
                                                )}
                                                {nift50growthinPer < 0 ? (
                                                    <Grid
                                                        item
                                                        xs={8.5}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'red'
                                                        }}
                                                    >
                                                        <h6>({nift50growthinPer})</h6>
                                                    </Grid>
                                                ) : (
                                                    <Grid
                                                        item
                                                        xs={8.5}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'green'
                                                        }}
                                                    >
                                                        <h6>(+{nift50growthinPer})</h6>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        )}
                                    </Box>
                                </p>
                                <a
                                    href="https://finance.yahoo.com/quote/%5ENSEI?p=^NSEI&.tsrc=fin-srch"
                                    className="readmore stretched-link text-decoration-none"
                                >
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <div>
                                <h4 className="title">S&P BSE SENSEX</h4>
                                <p className="description">
                                    <Box sx={{ flexGrow: 1 }}>
                                        {progress ? (
                                            <CircularProgress />
                                        ) : (
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <h2>{senSexCurrentData}</h2>
                                                </Grid>
                                                {senSexgrowth < 0 ? (
                                                    <Grid item xs={3.5} style={{ color: 'red' }}>
                                                        <h4>{senSexgrowth}</h4>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={3.5} style={{ color: 'green' }}>
                                                        <h4>+{senSexgrowth}</h4>
                                                    </Grid>
                                                )}

                                                {senSexgrowthinPer < 0 ? (
                                                    <Grid
                                                        item
                                                        xs={8.5}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'red'
                                                        }}
                                                    >
                                                        <h6>({senSexgrowthinPer})</h6>
                                                    </Grid>
                                                ) : (
                                                    <Grid
                                                        item
                                                        xs={8.5}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'green'
                                                        }}
                                                    >
                                                        <h6>(+{senSexgrowthinPer})</h6>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        )}
                                    </Box>
                                </p>
                                <a
                                    href="https://finance.yahoo.com/quote/%5EBSESN?p=^BSESN&.tsrc=fin-srch"
                                    className="readmore stretched-link text-decoration-none"
                                >
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-truck-ramp-box"></i>
                            </div>
                            <div>
                                <h4 className="title">NASDAQ</h4>
                                <p className="description">
                                    <Box sx={{ flexGrow: 1 }}>
                                        {progress ? (
                                            <CircularProgress />
                                        ) : (
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <h2>{nasdaqCurrentData}</h2>
                                                </Grid>
                                                {nasdaqgrowth < 0 ? (
                                                    <Grid item xs={4} style={{ color: 'red' }}>
                                                        <h4>{nasdaqgrowth}</h4>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={4} style={{ color: 'green' }}>
                                                        <h4>+{nasdaqgrowth}</h4>
                                                    </Grid>
                                                )}

                                                {nasdaqgrowthinPer < 0 ? (
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'red'
                                                        }}
                                                    >
                                                        <h6>({nasdaqgrowthinPer})</h6>
                                                    </Grid>
                                                ) : (
                                                    <Grid
                                                        item
                                                        xs={8}
                                                        style={{
                                                            marginTop: 7,
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            color: 'green'
                                                        }}
                                                    >
                                                        <h6>(+{nasdaqgrowthinPer})</h6>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        )}
                                    </Box>
                                </p>
                                <a
                                    href="https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC&.tsrc=fin-srch"
                                    className="readmore stretched-link text-decoration-none"
                                >
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* align-self-center order-lg-last order-first */}
            {/* <!-- ======= About Us Section ======= --> */}
            <section id="about" className="about pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">
                        <div className="col-lg-6 position-relative ">
                            <div className="position-relative" style={{ marginTop: 50 }}>
                                <img src={img1} className="img-fluid" alt="" style={{ height: '50%', width: '110%' }} />
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn">
                                    {}
                                </a>
                            </div>
                            <div className="position-relative" style={{ marginTop: 50 }}>
                                <img src={img1} className="img-fluid" alt="" style={{ height: '50%', width: '110%' }} />
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn">
                                    {}
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 content order-last  order-lg-first">
                            <h3>About Us</h3>
                            <p style={{ textAlign: 'justify' }}>
                                Welcome to our investment portfolio monitoring website! We are a dedicated team of financial enthusiasts who
                                understand the importance of managing and optimizing investments for long-term success. Our platform
                                provides comprehensive monitoring and analysis of a wide range of investment options, including stocks,
                                cryptocurrencies, mutual funds, gold, fixed deposits, and more. With real-time data, performance analytics,
                                and personalized insights, we aim to empower investors to make informed decisions and take control of their
                                financial future.
                            </p>
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i class="bi bi-graph-up-arrow"></i>
                                    <div>
                                        <h5>Stock</h5>
                                        <p style={{ textAlign: 'justify' }}>
                                            InvestoMart is designed to cater to all levels of investors, from beginners to experienced
                                            traders. Our platform offers user-friendly features and tools to help you make informed
                                            decisions and optimize your stock portfolio based on your investment goals and risk tolerance.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i class="bi bi-currency-bitcoin"></i>
                                    <div>
                                        <h5>Crypto</h5>
                                        <p style={{ textAlign: 'justify' }}>
                                            With InvestoMart, you can easily track your crypto holdings, monitor their performance in
                                            real-time, and receive personalized alerts on price movements, news, and other important
                                            updates. Our intuitive dashboard provides you with a clear overview of your portfolio's
                                            performance, including detailed charts, historical data, and portfolio diversification analysis.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bi bi-bar-chart-fill"></i>
                                    <div>
                                        <h5>Mutual Fund</h5>
                                        <p style={{ textAlign: 'justify' }}>
                                            We prioritize data security and privacy, and our platform employs robust security measures to
                                            protect your sensitive information. Your mutual fund holdings and personal data are kept
                                            confidential and are not shared with third parties.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bi bi-piggy-bank-fill"></i>
                                    <div>
                                        <h5>Gold</h5>
                                        <p style={{ textAlign: 'justify' }}>
                                            InvestoMart is designed for both beginners and experienced gold investors. Our platform offers
                                            user-friendly features and tools to help you make informed decisions based on your investment
                                            goals and risk tolerance. Whether you are a long-term gold investor or actively trade gold,
                                            InvestoMart is your trusted companion for managing your gold portfolio.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ======= Services Section ======= --> */}
            <section id="service" className="services pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Investment Options</span>
                        <h2>Investment Options</h2>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="card">
                                <div className="card-img">
                                    <img src={stockImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Stock
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Our comprehensive Stock portfolio lets you track and manage your stock investment. You can easily track
                                    your stock holdings, monitor their performance in real time and get personalized alerts on price
                                    movements, and other important updates.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="card">
                                <div className="card-img">
                                    <img src={mutualFundImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Mutual Funds
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Mutual Fund is a financial instrument which pools the money of different people and invests in different
                                    financial securities like stocks, bonds, etc. One of the main advantage of mutual fund is
                                    Risk Diversification
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card">
                                <div className="card-img">
                                    <img src={cryptoImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Crypto
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Our intuitive dashboard provides you with a clear overview of your portfolio's performance including
                                    detailed charts, historical data and portfolio diversification analysis.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card">
                                <div className="card-img">
                                    <img src={goldImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Gold
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Gold as an investment offers dual benefits of risk reduction and wealth creation.Even if there is no
                                    economic crisis or geopolitical tensions, the precious metal can still give decent returns
                                    in the long term.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="card">
                                <div className="card-img">
                                    <img src={fixedDepositImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Fixed Deposit
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Fixed Deposits are one of the oldest and safest investment instrument provided by the banks .Here the
                                    rate of interest is comparatively higher than the interest provided on savings account or current
                                    account balances.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="card">
                                <div className="card-img">
                                    <img src={govtSchemesImg} alt="" className="card-img-top" style={{ height: 220 }} />
                                </div>
                                <h3>
                                    <Link href="service-details.html" className="stretched-link text-decoration-none">
                                        Government Schemes
                                    </Link>
                                </h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Invest your money in different Government Schemes such as PPF, Atal Pension Yojna, Suraksha Bima Yojna,
                                    Jan Dhan Yojana etc. These Government Schemes provide a good rate of interest with no risk and hassle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="zoom-out">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3>Join our community</h3>
                            <p style={{ textAlign: 'justify' }}>
                                Sign up today and take control of your investments with our comprehensive monitoring website. Keep track of
                                all your investments in one place and stay up-to-date with the latest trends in stocks, crypto, mutual
                                funds, gold, fixed deposits, and government schemes.
                            </p>
                            <Link className="cta-btn text-decoration-none" onClick={handleRegister}>
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ======= Features Section ======= --> */}
            <section id="features" className="features">
                <div className="container">
                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src={newstockImg} alt="" style={{ height: 220, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3> Stock Investment </h3>
                            <h5>(Risk :- Moderate to High & Annual Returns {'>'} 13-15%)</h5>
                            <p className="fst-italic">
                                Investing in stocks can be an excellent way to grow your wealth over the long term.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link> Investing in stocks can be an excellent way to grow your wealth
                                    over the long term.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Investing in the stock market can provide the potential for
                                    significant long-term gains.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Investing in a variety of stocks can help you spread your risk and
                                    reduce the impact of any one stock performance on your portfolio.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Many stocks pay dividends, which can provide a steady stream of
                                    income for investors.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Stocks can provide a hedge against inflation I.e Inflation
                                    Protection.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link>Our website will provide you with detailed analysis and prediction
                                    of all stocks.You can monitor all your returns , compare annual returns between all stocks in which you
                                    invested.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src={newmutualFundImg} alt="" style={{ height: 220, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Mutual Funds </h3>
                            <h5>(Risk :- Low to Moderate & Annual Returns {'>'} 10-15%)</h5>
                            <p className="fst-italic">
                                Investing in mutual funds can be a smart way to grow your money over time while minimizing risk.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link> They are managed by professional fund managers who are responsible
                                    for selecting and buying a diversified mix of investments. It saves a lot of time and effort compared to
                                    managing your investments yourself, and can provide access to different opportunities.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link>Mutual funds can be bought and sold easily, making them a
                                    relatively liquid investment i.e. convert your investment into cash if needed
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Many mutual funds have low minimum investment requirements I.e
                                    start investing with minimum amount, which makes them accessible to a wide range of investors.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Mutual funds can be a cost-effective investment option, as they
                                    can offer lower fees and expenses compared to buying individual stocks or bonds.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src={newcryptoImg} alt="" style={{ height: 220, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3>Crypto Investment </h3>
                            <h5>(Risk :- High & Annual Returns {'>'} 15-20%)</h5>
                            <p>
                                Investing in cryptocurrencies can be an exciting opportunity to potentially earn high returns on your
                                investment.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link> Many cryptocurrencies like BTC,ETH,etc has a potential of giving
                                    massive returns .
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link>Cryptocurrencies are built on blockchain technology, which is
                                    highly secure and transparent.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> As cryptocurrencies are becoming more widely accepted as a form of
                                    payment by businesses ,therefore it could potentially increase demand and drive their value higher
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Cryptocurrencies are highly volatile and involves risks, including
                                    the potential for significant losses.Our website will help you with different methods to reduce the risk
                                    and loss with help of Systematic Investment Plans and by investing in different coins(I.e
                                    Diversification of your portfolio).You can easily monitor the data in real time with different graphs
                                    and chart which will help you monitor your investments.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src={newgoldImg} alt="" style={{ height: 220, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Gold Investment </h3>
                            <h5>(Risk:- Low & Annual Annual Returns = 8-12%)</h5>
                            <p className="fst-italic">
                                Investing in gold can be a way to diversify your investment portfolio and potentially provide a hedge
                                against inflation and economic uncertainty.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link> Gold is often seen as a "safe haven" asset, meaning that it tends
                                    to hold its value during times of economic uncertainty or market volatility.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link>It has historically been a hedge against inflation, as its value
                                    tends to rise when the purchasing power of currency declines.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> It is a tangible asset that you can physically hold, which can
                                    provide a sense of security and peace of mind.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> It can potentially provide capital gains if its value increases
                                    over time.It’s price can be volatile and a have some risk in short term but gives good returns in long
                                    term.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src={newfixedDepositImg} alt="" style={{ height: 220, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3>Fixed Deposit </h3>
                            <h5>(Risk:- No risk & Annual Returns = 5-8%)</h5>
                            <p className="fst-italic">
                                A fixed deposit is a financial instrument offered by financial institutions that promise a guaranteed rate
                                of return to the investor for a fixed tenure.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link> A fixed deposit promises guaranteed returns and carries minimal to
                                    no risk to the investor.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Liquidating your deposits is quick and easy.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> The interest rated of Fixed Deposit is much more than that of a
                                    savings account.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Under section 80C of the Income Tax Act, fixed deposit investors
                                    can deduct up to 1,50,000 against the investment made from their taxable income in a year however the
                                    tax-saving deposit comes with a mandatory 5 year lock-in period and cannot be withdrawn before that.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src={newgovtSchemesImg} alt="" style={{ height: 400, width: 500 }} className="img-fluid" />
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Government Schemes</h3>
                            <h5>(Risk:- No risk & Annual Returns = 5-11%)</h5>
                            <p className="fst-italic">
                                To uplift the income and financial standing of its citizens, time and again, the government keeps
                                introducing different investment schemes in the country.
                            </p>
                            <ul>
                                <li>
                                    <Link className="bi bi-check"></Link>The best benefit of opting for govt investment schemes is that they
                                    are risk-free and hassle-free. Interested individuals can opt for any govt. plan through post offices
                                    across India as well as through banks.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Many government schemes offer tax benefits, which means that you
                                    can save money on taxes by investing in them. For example, investments in tax-saving schemes like Public
                                    Provident Fund (PPF), National Pension Scheme (NPS), and Equity Linked Saving Scheme (ELSS) are eligible
                                    for tax deductions under Section 80C of the Income Tax Act.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Unlike market-linked investments like stocks and mutual funds,
                                    government schemes usually offer a fixed rate of return. This can provide certainty and stability to
                                    your investment portfolio.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Many government schemes have a lock-in period, which means that
                                    you cannot withdraw your investment for a certain number of years. This can encourage long-term savings
                                    and prevent impulsive spending.
                                </li>
                                <li>
                                    <Link className="bi bi-check"></Link> Some of the popular government schemes in which you can invest are
                                    Atal Pension Yojana(APY),Pradhan Mantri Jan Dhan Yojana(PMJDY), Public Provident Fund(PPF),National
                                    Saving Scheme(NSC), Sukanya Samriddhi Yojana(SSY),etc.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Features Section --> */}

            {/* <!-- ======= News Section ======= --> */}
            <section id="pricing" className="pricing pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>LATEST NEWS</span>
                        <h2>LATEST NEWS</h2>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="pricing-item">
                                <h3>Stock News</h3>
                                {/* <h4>
                                    <sup>$</sup>0<span> / month</span>
                                </h4> */}

                                {/* {stockNewsData.slice(0, 5).map((item) => {
                                    return (
                                        <ol style={{ listStyleType: 'decimal' }} className="col-lg-12">
                                            <li>
                                                <a>{item.title}</a>
                                            </li>
                                        </ol>
                                    );
                                })} */}
                                {stockNewsData.length > 0 ? (
                                    <ol style={{ listStyleType: 'decimal' }} className="col-lg-12">
                                        <li>
                                            <a>{stockNewsData[0].title}..</a>
                                        </li>
                                        <li>
                                            <a>{stockNewsData[1].title}.</a>
                                        </li>
                                        <li>
                                            <a>{stockNewsData[2].title}.</a>
                                        </li>
                                        <li>
                                            <a>{stockNewsData[3].title}.</a>
                                        </li>
                                        <li>
                                            <a>{stockNewsData[4].title}.</a>
                                        </li>
                                    </ol>
                                ) : (
                                    ''
                                )}
                                <div className="d-flex ">
                                    <a href="#" className="buy-btn text-decoration-none ">
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="pricing-item featured">
                                <h3>Crypto News</h3>
                                {/* <h4>
                                    <sup>$</sup>29<span> / month</span>
                                </h4> */}
                                {/* {cryptoNewsData.slice(0, 5).map((item) => {
                                    return (
                                        <ul type="circle">
                                            <li>
                                                <a>{item.title}</a>
                                            </li>
                                        </ul>
                                    );
                                })} */}
                                {cryptoNewsData.length > 0 ? (
                                    <ol style={{ listStyleType: 'decimal' }} className="col-lg-12">
                                        <li>
                                            <a>{cryptoNewsData[0].title}.</a>
                                        </li>
                                        <li>
                                            <a>{cryptoNewsData[1].title}.</a>
                                        </li>
                                        <li>
                                            <a>{cryptoNewsData[2].title}.</a>
                                        </li>
                                        <li>
                                            <a>{cryptoNewsData[3].title}.</a>
                                        </li>
                                        <li>
                                            <a>{cryptoNewsData[4].title}.</a>
                                        </li>
                                    </ol>
                                ) : (
                                    ''
                                )}
                                <div className="d-flex ">
                                    <a href="#" className="buy-btn text-decoration-none">
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="pricing-item">
                                <h3>Financial News</h3>
                                {/* <h4>
                                    <sup>$</sup>49<span> / month</span>
                                </h4> */}
                                {/* {financeNewsData.slice(0, 5).map((item) => {
                                    return (
                                        <ul type="circle">
                                            <li>
                                                <a>{item.title}</a>
                                            </li>
                                        </ul>
                                    );
                                })} */}
                                <div></div>
                                {financeNewsData.length > 0 ? (
                                    <ol style={{ listStyleType: 'decimal' }} className="col-lg-12">
                                        <li>
                                            <a>{financeNewsData[0].title}.</a>
                                        </li>
                                        <li>
                                            <a>{financeNewsData[1].title}.</a>
                                        </li>
                                        <li>
                                            <a>{financeNewsData[2].title}.</a>
                                        </li>
                                        <li>
                                            <a>{financeNewsData[3].title}.</a>
                                        </li>
                                        <li>
                                            <a>{financeNewsData[4].title}.</a>
                                        </li>
                                    </ol>
                                ) : (
                                    ''
                                )}
                                <div className="d-flex ">
                                    <a href="#" className="buy-btn text-decoration-none">
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Pricing Section --> */}

            {/* <!-- ======= Testimonials Section ======= --> */}
            {/* <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="slides-1 swiper" data-aos="fade-up">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div className="stars">
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                    </div>
                                    <p>
                                        <Link className="bi bi-quote quote-icon-left"></Link>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <Link className="bi bi-quote quote-icon-right"></Link>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <div className="stars">
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                    </div>
                                    <p>
                                        <Link className="bi bi-quote quote-icon-left"></Link>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                        quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <Link className="bi bi-quote quote-icon-right"></Link>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <div className="stars">
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                    </div>
                                    <p>
                                        <Link className="bi bi-quote quote-icon-left"></Link>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                        tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <Link className="bi bi-quote quote-icon-right"></Link>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <div className="stars">
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                    </div>
                                    <p>
                                        <Link className="bi bi-quote quote-icon-left"></Link>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                                        minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <Link className="bi bi-quote quote-icon-right"></Link>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <div className="stars">
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                        <Link className="bi bi-star-fill"></Link>
                                    </div>
                                    <p>
                                        <Link className="bi bi-quote quote-icon-left"></Link>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                                        culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                                        quid.
                                        <Link className="bi bi-quote quote-icon-right"></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section> */}
            {/* <!-- End Testimonials Section -->

    <!-- ======= Frequently Asked Questions Section ======= --> */}
            <section id="faq" className="faq">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Frequently Asked Questions</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-10">
                            <div className="accordion accordion-flush" id="faqlist">
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-1"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What are stocks, and how do they work?
                                        </button>
                                    </h3>
                                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Stocks represent ownership in a company. When you buy a stock, you are buying a share of that
                                            company's ownership. The value of a stock is determined by supply and demand, and can fluctuate
                                            based on a variety of factors such as company performance, market conditions, and news events.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-2"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What is cryptocurrency, and how does it differ from traditional currency?
                                        </button>
                                    </h3>
                                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Cryptocurrency is a digital or virtual currency that uses cryptography to secure and verify
                                            transactions. Unlike traditional currency, which is backed by a government or central authority,
                                            cryptocurrency is decentralized and operates independently of any central authority.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-3"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What is a mutual fund, and how does it work?
                                        </button>
                                    </h3>
                                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            A mutual fund is a type of investment vehicle that pools money from multiple investors to
                                            purchase a portfolio of stocks, bonds, or other securities. The fund is managed by a
                                            professional investment manager, who makes decisions about which assets to buy and sell in order
                                            to maximize returns for the fund's investors.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-4"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What is a fixed deposit, and how does it work?
                                        </button>
                                    </h3>
                                    <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            <Link className="bi bi-question-circle question-icon"></Link>A fixed deposit is a type of
                                            savings account that offers a fixed interest rate for a set period of time. When you deposit
                                            money into a fixed deposit account, you agree to leave it there for a specified period,
                                            typically ranging from a few months to several years. In return, you earn a guaranteed interest
                                            rate that is typically higher than what you would earn in a regular savings account.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-5"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What is gold, and why is it considered a valuable investment?
                                        </button>
                                    </h3>
                                    <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Gold is a precious metal that has been used as a store of value and a medium of exchange for
                                            thousands of years. It is considered a valuable investment because it has a low correlation with
                                            other asset classes, which can help diversify a portfolio and reduce risk. Additionally, gold is
                                            often seen as a hedge against inflation and geopolitical uncertainty.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-6"
                                        >
                                            <Link className="bi bi-question-circle question-icon"></Link>
                                            What are government schemes, and how can they help me save money?
                                        </button>
                                    </h3>
                                    <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            <Link className="bi bi-question-circle question-icon"></Link>Government schemes are programs
                                            offered by the government to help individuals save money and achieve financial goals. These
                                            schemes can take many forms, such as tax-advantaged retirement accounts, education savings
                                            plans, and healthcare savings accounts. By participating in these schemes, you can often take
                                            advantage of tax benefits or earn a higher rate of return on your savings than you would with a
                                            traditional savings account.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <Link href="index.html" className="logo d-flex align-items-center text-decoration-none">
                                <span>InvestoMart</span>
                            </Link>
                            <p>
                                Track, manage, and optimize your investment portfolio with our powerful monitoring website. Stay informed
                                with real-time data, performance analytics, and personalized insights. Take control of your investments and
                                make informed decisions for financial success.
                            </p>
                            <div className="social-links d-flex mt-4">
                                <Link href="#" className="twitter text-decoration-none">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                                <Link href="#" className="facebook text-decoration-none">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link href="#" className="instagram text-decoration-none">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link href="#" className="linkedin text-decoration-none">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Terms of service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Privacy policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Investment Options</h4>
                            <ul>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Stock
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Mutual Funds
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Crypto
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Gold
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Fixed Deposit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Government Schemes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                50/ 18D N.C. Banerjee Road <br />
                                Baidyabati, Hooghly(Pin-712222)
                                <br />
                                India, West-Bengal <br />
                                <br />
                                <strong>Phone:</strong> +91 8982255429
                                <br />
                                <strong>Email:</strong> ranapriyavrat@gmail.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="copyright">
                        &copy; Copyright{' '}
                        <strong>
                            <span>TSG</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        <Link href="https://bootstrapmade.com/">TSG Tech</Link>
                    </div>
                </div>
            </footer>
            <Link href="#" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>

            <NewLoginDialog />
            <RegisterDialog />
        </>
    );
}
