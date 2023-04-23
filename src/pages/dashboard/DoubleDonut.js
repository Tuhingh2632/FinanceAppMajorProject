import React from 'react';
import { Chart } from 'react-google-charts';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

const DoubleDonut = ({
    stock,
    stockVal,
    crypto,
    cryptoVal,
    mutualFund,
    mutualFundVal,
    gold,
    goldVal,
    others,
    othersVal,
}) => {
    const menu = useSelector((state) => state.menu);
    var { cp } = menu;
    const options = {
        pieSliceText: 'none',
        title: 'Current And Invested Amount'
    };
    const dataOld = [
        ['Name', 'Price'],
        ['Stock', stock],
        ['Crypto', crypto],
        ['Mutual Fund', mutualFund],
        ['Gold', gold],
        ['Others', others]
    ];

    const dataNew = [
        ['Name', 'Price'],
        ['Stock', stockVal],
        ['Crypto', cryptoVal],
        ['Mutual Fund', mutualFundVal],
        ['Gold', goldVal],
        ['Others', othersVal]
    ];

    const diffdata = {
        old: dataOld,
        new: dataNew
    };

    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Chart chartType="PieChart" height="320px" width="100%" diffdata={diffdata} options={options} />
            </Grid>
            
        </Grid>
    );
};

export default DoubleDonut;
