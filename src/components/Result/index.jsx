import React from 'react';

import {
    Stack,
    Typography,
    Grid,
} from '@mui/material';

const SipResult = ({totalValue}) => {

  return (
    <>
        <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4' gutterBottom>TOTAL VALUE : ₹ {totalValue}</Typography>
                </Grid>
        </Grid>
    </>
  )
}

export default SipResult;