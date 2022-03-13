import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  addproductReducer,
  getproductByIdReducer,
  updateproductByIdReducer,
  productReviewCreateReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  getAllUsersReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
  allUserOrdersReducer,
} from "./reducers/orderReducers";
import {
  getAllMenReducer,
  hiringManReducer,
  manListMyReducer,
  manSubmitFormReducer,
} from "./reducers/hiringmanReducers";

const manAddressFromStorage = localStorage.getItem("manAddress")
  ? JSON.parse(localStorage.getItem("manAddress"))
  : {};

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const workerInfoFromStorage = localStorage.getItem("workerInfo")
  ? JSON.parse(localStorage.getItem("workerInfo"))
  : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  addproductReducer: addproductReducer,
  getproductByIdReducer: getproductByIdReducer,
  updateproductByIdReducer: updateproductByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  //hiringManReducer: hiringManReducer,
  manSubmitFormReducer: manSubmitFormReducer,
  getAllMenReducer: getAllMenReducer,
  manListMyReducer: manListMyReducer,
  productReviewCreate: productReviewCreateReducer,
});
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
  mansubmit: {
    workerInfo: workerInfoFromStorage,
    manAddress: manAddressFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
