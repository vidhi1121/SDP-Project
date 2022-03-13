import axios from "axios";
import swal from "sweetalert";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
  PRODUCT_ADD_FAILS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  GET_PRODUCTBYID_FAILS,
  GET_PRODUCTBYID_REQUEST,
  GET_PRODUCTBYID_SUCCESS,
  UPDATE_PRODUCTBYID_FAILS,
  UPDATE_PRODUCTBYID_REQUEST,
  UPDATE_PRODUCTBYID_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
} from "../constants/productConstant";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:8080/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8080/api/products/${id}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProducts = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ADD_REQUEST });
    const { data } = await axios.post("http://localhost:8080/api/addproducts", {
      product,
    });
    dispatch({
      type: PRODUCT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductById = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTBYID_REQUEST });
    const { data } = await axios.post(
      "http://localhost:8080/api/getproductsbyid",
      {
        productId,
      }
    );
    dispatch({
      type: GET_PRODUCTBYID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTBYID_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCTBYID_REQUEST });
    const { data } = await axios.post(
      "http://localhost:8080/api/updateproducts",
      {
        updatedProduct,
      }
    );
    dispatch({
      type: UPDATE_PRODUCTBYID_SUCCESS,
      payload: data,
    });
    window.location.href = "/admin/veggieslist";
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCTBYID_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/deleteproducts", {
      productId,
    });

    swal("Veg Deleted Successfully!!!", "success");
    window.location.href = "/admin/veggieslist";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Veg");
  }
};

export const searchProduct = (searchkey) => async (dispatch) => {
  let searchedVeg;

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const res = await axios.get("http://localhost:8080/api/products");
    searchedVeg = res.data.filter((product) =>
      product.name.toLowerCase().includes(searchkey)
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: searchedVeg });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILS, payload: error });
  }
};

export const createProductReview =
  (id, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `http://localhost:8080/api/products/${id}/reviews`,
        review,
        config
      );

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
