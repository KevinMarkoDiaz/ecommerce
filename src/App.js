import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch,  } from 'react-router-dom';
import './App.css';


import { CheckoutPage } from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SignIn from './components/Signin';
import Signup from './components/Signup';
import { useStateValue} from './StateProvider';

import { auth } from './firebase';
import { actionTypes } from './reducer';
import Checkout from './components/CheckOutForm/CheckOut';




function App() {

  const [{user}, dispatch] = useStateValue(); 

  useEffect(() => {

    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser) {

        dispatch({
          type: actionTypes.SET_USER,
          user: authUser    
        });
        
      }
    });
    
  }, [])

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        
        <Route path="/signup">
          <Signup />
        </Route>

        <Route  path="/signin">
          <SignIn/>
        </Route>

        <Route  path="/checkout-page">
          <CheckoutPage/>
        </Route>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        <Route  path="/" >
          <Products/>
        </Route>

      </Switch>
    </Router>


    </>
  );
}

export default App;
