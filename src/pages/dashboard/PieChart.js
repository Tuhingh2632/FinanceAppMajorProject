import React, { Component, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


const Donut = ({ stock, crypto, mutualFund, gold, others }) => {
    
    const menu = useSelector((state) => state.menu);
    var { cp } = menu;
    const options = {
        labels: ['Stock', 'Crypto', 'Mutual Fund', 'Gold', 'Others']
    };

    let seriesSet = [stock,crypto ,mutualFund,gold, others];
    


    console.log(stock);
    console.log(mutualFund);
    console.log(crypto);
    console.log(gold);
    console.log(others);

    return (
        <div className="donut">
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
                <Chart options={options} series={seriesSet} type="donut" width="400" />
            )}
        </div>
    );
};
export default Donut;
