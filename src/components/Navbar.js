import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { ShoppingCart } from '@mui/icons-material';

import logo from "../assets/img/logo.png"
import { Badge } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';


import { useStateValue} from '../StateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';


const useStyles = makeStyles({
  logoImg: {
    width: 'auto',
    height: '40px',
  },
  root:{
    flexGrow:1,
    marginBottom:'7rem',
  },
  grow:{
    flexGrow: 1,
  },
  image:{
    marginRight:'10px',
  },
  button:{
    marginLeft: '2rem',
  },
});



export default function Navbar() {
 
  const [{basket, user}, dispatch] = useStateValue(); 
  const classes = useStyles();
  const history = useHistory();

  const handleAuth = (e)=>{

    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null, 
      });


      history.push('/');
      
    }



  };

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        sx={{
            
          backgroundColor: 'whitesmoke',
          boxShadow:'none',
        }}
      >
        <Toolbar>
          <Link to="/">
           <IconButton >
              <img className={classes.logoImg} src={logo} alt="logo"/>
           </IconButton>
          </Link>
           
          <div className={classes.grow}/>  
          
          <Typography variant="h6" component="p" color='textPrimary'>
            Hello {user? user.email :  'Guest'}
          </Typography>
          <div className={classes.button}>
          <Link to="/signin">
            <Button 
              onClick={handleAuth}
              variant='outlined'>
              <strong>
                 {user? 'Sing Out' : 'Sing In'}
              </strong>
            </Button>
          </Link>  
          <Link to="/checkout-page">  
            <IconButton arial-label="show cart items" color="inherit">
              <Badge badgeContent={basket?.length} color="error">
                <ShoppingCart fontSize="large" color="primary"/>      
              </Badge>
            </IconButton>
          </Link>  
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
