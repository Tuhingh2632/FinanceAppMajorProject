import React from 'react';

import { Grid, Typography } from '@mui/material';

const index = ({ name }) => {
    return (
        <Grid container xs={12} spacing={4}>
            <Grid item xs={12}>
                {name === 'SIP Calculator' ? (
                    <Typography variant="h3">{name}</Typography>
                ) : (
                    <Typography variant="h3">{name}</Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default index;
