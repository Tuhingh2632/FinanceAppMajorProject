import React, {useState, useEffect} from 'react'

import {
    Grid,
} from '@mui/material'

import Chart from 'react-apexcharts'

import graphOptions from './options'

const Graph = ({totalGain, totalInvestment}) => {

    // states
    const [options, setOptions] = useState(graphOptions)
    const [chartSeries, setChartSeries] = useState([])

    // useEffect
    useEffect(() => {
        setChartSeries([Number(totalInvestment), Number(totalGain)])
    }, [totalGain, totalInvestment]);

  return (
    <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Chart 
                    options={options} 
                    series={chartSeries}
                    type='donut'
                    width={458}
                />
            </Grid>
        </Grid>
    </>
  )
}

export default Graph;