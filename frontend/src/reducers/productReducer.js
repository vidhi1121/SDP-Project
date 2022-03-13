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
  PRODUCT_CREATE_REVIEW_RESET,
} from "../constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addproductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ADD_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_ADD_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getproductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTBYID_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTBYID_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCTBYID_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateproductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTBYID_REQUEST:
      return { ...state, loading: true };
    case UPDATE_PRODUCTBYID_SUCCESS:
      return { updateloading: false, updatesuccess: true };
    case UPDATE_PRODUCTBYID_FAILS:
      return { updateloading: false, updateerror: action.payload };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
