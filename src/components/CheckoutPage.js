import React from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

import CheckoutCard from './CheckoutCard';
import { Total } from './Total';
import { useStateValue} from '../StateProvider';

const useStyles = makeStyles((theme) => ({

    root:{
        flexGrow: 1,
        padding: '2rem',
    },

}));


export const CheckoutPage = () => {

    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();

    function FormRow (){
        return (
            <>
            {
                 basket?.map((item) => (                                   
                    <Grid key={item.id} item xs={12} sm={8} md={6} lg={4} >  
                      <CheckoutCard key={item.id} product={item}/>                        
                    </Grid>
            ))}
            </>
        )
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography align='center' gutterBottom variant='h4'>
                        Shoping Card
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={3}>
                    <FormRow/>
                </Grid>
                <Grid  item xs={12} sm={4} md={3} >
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>            
        </div>
    )
}
