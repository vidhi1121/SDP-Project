import React, { useState, useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import {  Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOrderDetails, payOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";


// OrderScreen
const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

   const orderPay = useSelector((state) => state.orderPay);
   const { loading: loadingPay, success: successpay } = orderPay;
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  // class ErrorBoundary extends React.Component {
  //   state = { error: null, errorInfo: null };

  //   componentDidCatch(error, errorInfo) {
  //     this.setState({
  //       error: error,
  //       errorInfo: errorInfo
  //     });
  //   }

  //   render() {
  //     if (this.state.errorInfo) {
  //       return (
  //         <div>
  //           <h2>Something went wrong.</h2>
  //           <details style={{ whiteSpace: "pre-wrap" }}>
  //             {this.state.error && this.state.error.toString()}
  //             <br />
  //             {this.state.errorInfo.componentStack}
  //           </details>
  //         </div>
  //       );
  //     }

  //     return this.props.children;
  //   }
  // }
  // const Discount = () =>{
  //   if (order.totalPrice < 500)
  //   {
  //     return (<Message variant="danger">
  //     Sorry...we not give any kind of discount 
  //   </Message>);
  //   }
  //   else if(order.totalPrice >= 500 && order.totalPrice < 1000)
  //   {
  //     return (<Message variant="success">
  //               we  give 5% discount 
  //                 <Row>

  //                 <Col>Final Price</Col>
  //                 <Col>₹{order.totalPrice * 95 /100}</Col>
                  
  //               </Row> </Message>
  //              );
  //   }
  //   else if(order.totalPrice <= 1000 && order.totalPrice < 2000)
  //   {
  //     return (
  //                 <Row>
  //                 <Col>Final Price</Col>
  //                 <Col>₹{order.totalPrice * 90 /100}</Col>
  //                 <Message variant="success">
  //                 we  give 10% discount</Message>
  //               </Row> 
  //               );
  //   }
  //   else if(order.totalPrice >= 2000) {
  //    return ( <Message variant="success">
  //     we  give 15% discount
  //     <Row>
  //     <Col>Final Price</Col>
  //     <Col>₹{order.totalPrice * 85 /100}</Col>
  //   </Row> 
  //   </Message>);
  //   }
  //   else{}
  // }
  
  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("http://localhost:8080/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successpay]);

// useEffect(()=>{
//     dispatch(getOrderDetails(orderId))
// },[dispatch,orderId])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>Name : </strong>
              {order.user.name}
            </p>
            <p>
              <strong>Email : </strong>
              {order.user.email}
            </p>
            <p>
              <strong>Address :</strong>
              {order.shippingAddress.address}&nbsp;
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}&nbsp;
            </p>
            {order.isDeliverd ? (
              <Message variant="success">Deliverd {order.isDeliverd}</Message>
            ) : (
              <Message variant="danger">Not Deliverd</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid On {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Message>Your Cart is Empty</Message>
            ) : (
              <ListGroup variant="flush">
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ₹{item.price} 
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>GST</Col>
                  <Col>₹{order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
                {/* {
                  order.totalPrice < 500 ? (<Message variant="danger">
                  Sorry...we not give any kind of discount 
                </Message>):(<Message variant="danger">
                  we  give 10% discount
                  <Row>
                  <Col>Final Price</Col>
                  <Col>₹{order.totalPrice * 90 /100}</Col>
                </Row> 
                </Message>
                
               )
                } */}
                {/* <><Discount /></> */}
                
                
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
