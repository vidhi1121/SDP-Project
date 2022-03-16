import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import FormContainer from "../components/shared/FromContainer";
import { forgotPassword } from "../actions/userAction";

const ForgotPassword = ({ location, history }) => {
    const [email, setEmail] = useState("");

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const dispatch = useDispatch();
    const forgotPassword = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = forgotPassword;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(forgotPassword(email));
  };

  return (
    <>
    <FormContainer>
        <h1>Forgot Password</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {Loader}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              required
                    name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            </Form.Group>
            <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
                </Form>
                 </FormContainer>
    
    </>
  )
}

export default ForgotPassword