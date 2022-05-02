import axios from "axios";
import swal from "sweetalert";

import {
  HIRING_MAN_FAIL,
  HIRING_MAN_REQUEST,
  HIRING_MAN_SUCCESS,
  HIRINGMAN_FORM_FAIL,
  HIRINGMAN_FORM_REQUEST,
  HIRINGMAN_FORM_SUCCESS,
  MAN_ADDRESS,
  ALL_MAN_DETAILS_REQUEST,
  ALL_MAN_DETAILS_SUCCESS,
  ALL_MAN_DETAILS_FAIL,
  ACCEPT_HIRING_MAN_REQUEST,
  ACCEPT_HIRING_MAN_FAIL,
  LIST_HIRING_MAN_REQUEST,
  LIST_HIRING_MAN_SUCCESS,
  LIST_HIRING_MAN_FAIL,
} from "../constants/hiringmanConstants";

export const submitForm =
  (
    // user,
    firstname,
    middlename,
    lastname,
    email,
    address1,
    address2,
    city,
    pincode,
    state,
    mobileNo,
    isApprove
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: HIRINGMAN_FORM_REQUEST });

      const { data } = await axios.post("http://localhost:8080/api/hireman", {
        // user: user._id,
        firstname,
        middlename,
        lastname,
        email,
        address1,
        address2,
        city,
        pincode,
        state,
        mobileNo,
        isApprove,
      });
      dispatch({
        type: HIRINGMAN_FORM_SUCCESS,
        payload: data,
      });

      localStorage.setItem("workerInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: HIRINGMAN_FORM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getallMen = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_MAN_DETAILS_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     "Contnet-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.get(
      `http://localhost:8080/api/hireman/getallmen`
      //config
    );

    dispatch({
      type: ALL_MAN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MAN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveRequest = (manid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACCEPT_HIRING_MAN_REQUEST,
    });
    
    const { data } = await axios.post(
      "http://localhost:8080/api/hireman/approverequest",

      { manid }
      //config
    );
    alert("Approved Success");

    //dispatch({ type: DELIVER_ORDER_ALL_SUCCESS, payload: data });
    const men = await axios.get(
      "http://localhost:8080/api/hireman/getallmen"
      // config
    );
    dispatch({ type: ALL_MAN_DETAILS_SUCCESS, payload: men.data });
    window.location.href = "/admin/hireman";
  } catch (error) {
    dispatch({
      type: ACCEPT_HIRING_MAN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveManAddress = (data) => (dispatch) => {
  dispatch({ type: MAN_ADDRESS, payload: data });
  localStorage.setItem("manAddress", JSON.stringify(data));
};

export const listMyRequest = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_HIRING_MAN_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.get(
      "http://localhost:8080/api/hireman/myrequest"
      //config
    );
    dispatch({ type: LIST_HIRING_MAN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_HIRING_MAN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllRequest = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HIRING_MAN_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    //   const { data } = await axios.get(
    //     "http://localhost:8080/api/orders/alluserorders",
    //     config
    //   );
    const { data } = await axios.get(
      "http://localhost:8080/api/hireman/allrequest"
    );
    dispatch({ type: HIRING_MAN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: HIRING_MAN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteMan = (manid) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/hireman/deleteman",
      {
        manid,
      }
    );

    swal("User Deleted Successfully!!!", "success");
    window.location.reload(); //href = "/admin/userlist";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting User");
  }
};
