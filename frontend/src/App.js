import React, {useEffect} from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import Homescreen from "./screens/Homescreen";
import Productdetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import GetHiredManScreen from "./screens/GetHiredManScreen";
import TermsandConditionScreen from "./screens/TermsandConditionScreen";
import Home from "./screens/Home";
import RequestDetails from "./screens/RequestDetails";

function App() {

  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          {/* <h1>veggies</h1> */}
          {/* <Homescreen/> */}
          <Route path="/home" component={Homescreen} exact />
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={AdminScreen} />
          <Route path="/product/:id" component={Productdetails} exact />
          <Route path="/gethired" component={TermsandConditionScreen} exact />
          <Route path="/fillform" component={GetHiredManScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/payment" component={PaymentScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen} exact />
          <Route path="/details" component={RequestDetails} exact />
          
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
