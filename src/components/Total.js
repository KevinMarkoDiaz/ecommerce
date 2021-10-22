import React from 'react';
import accounting from 'accounting';
import {Button} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { getBasketTotal } from '../reducer';
import { useStateValue} from '../StateProvider';

const useStyles = makeStyles({
   
    root:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'20vh'
    },
 
  });

  
  export const Total = () => {
    const [{basket}, dispatch] = useStateValue(); 
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h5>Total ítems: {basket?.length} </h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
            <Button sx={{marginTop:'2rem'}} variant='outlined' color='error'>
                Check out
            </Button>
            
        </div>
    )
}
