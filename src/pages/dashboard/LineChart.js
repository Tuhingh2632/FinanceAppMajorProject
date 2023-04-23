import React, { Component } from "react";
import Chart from "react-apexcharts";
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
const LineChart=({stock,stockVal, crypto,cryptoVal, mutualFund,mutualFundVal, gold,goldVal, others,othersVal,totalAmountInvested,totalAmountCurrent})=> {

  const menu = useSelector((state) => state.menu);
  var { cp } = menu;

  console.log(stock);
  console.log(stockVal);
  console.log(crypto);
  console.log(cryptoVal);
  console.log(mutualFund);
  console.log(mutualFundVal);
  console.log(gold);
  console.log(goldVal);
  console.log(others);
  console.log(othersVal);
  console.log(totalAmountInvested);
  console.log(totalAmountCurrent);


  let stockIn=((stock/totalAmountInvested)*100);
  let cryptoIn=((crypto/totalAmountInvested)*100);
  let mutualFundIn=((mutualFund/totalAmountInvested)*100);
  let goldIn=((gold/totalAmountInvested)*100);
  let othersIn=((others/totalAmountInvested)*100);

  let stockCur=((stockVal/totalAmountInvested)*100);
  let cryptoCur=((cryptoVal/totalAmountInvested)*100);
  let mutualFundCur=((mutualFundVal/totalAmountInvested)*100);
  let goldCur=((goldVal/totalAmountInvested)*100);
  let othersCur=((othersVal/totalAmountInvested)*100);

  console.log(stockCur);
  console.log(stockIn);
  let stockRe=stockVal-stock;
  let cryptoRe=cryptoVal-crypto;
  let mutualFundRe=mutualFundVal-mutualFund;
  let goldRe=goldVal-gold;
  let othersRe=othersVal-others;

  let totalReturns=(stockRe+cryptoRe+mutualFundRe+goldRe+othersRe);

  let stockReInPer=(stockRe/stock)*100;
  let cryptoReInPer=(cryptoRe/crypto)*100;
  let mutualFundReInPer=(mutualFundRe/mutualFund)*100;
  let goldReInPer=(goldRe/gold)*100;
  let othersReInPer=(othersRe/others)*100;

  console.log(totalReturns);
  console.log(stockReInPer);
  console.log(cryptoReInPer);
  console.log(mutualFundReInPer);
  console.log(goldReInPer);
  console.log(othersReInPer);
  


 const options= {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ["Stocks", "Crypto", "Mutual Fund", "Gold", "Others"],
    },
    yaxis: {
      title: {
        text: 'percent %'
      },
      labels: {
        formatter: (value) => Math.floor(value),
    },
    },
    fill: {
      opacity: 1
    },
    
    }



   
   const series= [
      // {
      //   name: "Invested",
      //   data: [stockIn, cryptoIn, mutualFundIn, goldIn, othersIn]
      // },
      // {
      //   name: "Current",
      //   data: [stockCur, cryptoCur, mutualFundCur, goldCur, othersCur]
      // },
      {
        name: "Returns",
        data: [stockReInPer, cryptoReInPer, mutualFundReInPer, goldReInPer, othersReInPer]
      }
    ]
  
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {cp?(<CircularProgress
                    size="1rem"
                    color="inherit"
                    style={{
                        display: 'inline-block',
                        position: 'relative',
                        margin: '0 auto'
                    }}
                />):(<Chart
                  options={options}
                  series={series}
                  type="bar"
                  width="400"
              />)}
            
          </div>
        </div>
      </div>
    );
  
}

export default LineChart;