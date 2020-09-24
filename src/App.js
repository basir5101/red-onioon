import React, { createContext, useContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import MenuItem from './Components/MenuItem/MenuItem';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderInfo from './Components/OrderInfo/OrderInfo';

export const  userContext = createContext();
export const  orderItem = createContext();
function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [item, setItem] = useState([])

  return (
    <userContext.Provider value = {[user, setUser]}>
    <orderItem.Provider value = {[item, setItem]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/menuItem/:itemId'>
          <MenuItem></MenuItem>
        </Route>
        <PrivateRoute path = '/place-order'>
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <Route path = '/create-new-account'>
          <SignUp></SignUp>
        </Route>
        <Route path = '/order-info'>
            <OrderInfo></OrderInfo>
        </Route>
        <Route path = '*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
   </orderItem.Provider>
   </userContext.Provider>

  );
}

export default App;
