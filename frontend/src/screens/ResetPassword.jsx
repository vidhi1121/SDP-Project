import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import FormContainer from "../components/shared/FromContainer";
import { resetPassword } from "../actions/userAction";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import { useAlert } from "react-alert";

const ForgotPassword = ({ location, history , match}) => {
    const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const alert = useAlert();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const dispatch = useDispatch();
    const forgotPassword = useSelector((state) => state.userLogin);
  const { loading, success, error} = forgotPassword;

  useEffect(() => {
    if (success) {
        alert.success("Password Updated Successfully");
      history.push("/login");
    }
  }, [history, redirect, success]);

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    //dispatch
    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, myForm));
  };

  return (
    <>
    <FormContainer>
        <h1>Change Password</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {Loader}
        {/* <Form onSubmit={resetPasswordSubmit}> */}
        <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Profile</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
    
          </FormContainer>
    </>
  )
}

export default ForgotPassword