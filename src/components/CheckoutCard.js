import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
 import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStateValue} from '../StateProvider';
import { actionTypes } from '../reducer';
import { getBasketTotal } from '../reducer';

import accounting from 'accounting';

const useStyles = makeStyles({
  media:{
    height : "300px",
    paddingTop : '56 .25% ' ,
  },
 
  root:{
    maxWidth: 345,
  },
  cardRating:{
      display:'flex',
  },
});


export default function CheckoutCard({product: {id, name, productType, image, price, rating, description }}) {
  
  const [{basket}, dispatch] = useStateValue(); 
  const classes = useStyles();
  const removeItem = ()=>{
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id

    })

    console.log(basket)
  };


  return (
    <Card className={classes.root}>
      <CardHeader
    
        action={
            <Typography
                variant='h5'
                color='textSecondary'
            >
                {accounting.formatMoney(price)}
            </Typography> 
        }
        title={name}
        subheader="Stock Disponible"
      />
      <CardMedia
     className={classes.media}
     image={image}
     title="Contemplative Reptile"
      />
      
      <CardActions 
        disableSpacing 
        sx={{
            display:'flex',
            justifyContent:'space-between',
            textAlign:'center',
            }} 
        >
        <div className={classes.cardRating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))
        }
        </div>
         <IconButton onClick={removeItem}>
            <DeleteOutlineIcon fontSize='large'/>
         </IconButton>
      </CardActions>
    </Card>
  );
}
