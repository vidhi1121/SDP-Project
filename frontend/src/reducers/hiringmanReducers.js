import {
  HIRING_MAN_FAIL,
  HIRING_MAN_SUCCESS,
  HIRING_MAN_REQUEST,
  HIRINGMAN_FORM_FAIL,
  HIRINGMAN_FORM_REQUEST,
  HIRINGMAN_FORM_SUCCESS,
  LIST_HIRING_MAN_FAIL,
  LIST_HIRING_MAN_REQUEST,
  LIST_HIRING_MAN_SUCCESS,
  LIST_HIRING_MAN_RESET,
  ALL_MAN_DETAILS_REQUEST,
  ALL_MAN_DETAILS_SUCCESS,
  ALL_MAN_DETAILS_FAIL,
} from "../constants/hiringmanConstants";

export const manSubmitFormReducer = (state = { men: [] }, action) => {
  switch (action.type) {
    case HIRINGMAN_FORM_REQUEST:
      return { loading: true };
    case HIRINGMAN_FORM_SUCCESS:
      return {
        loading: false,
        success: true,
        men: action.payload,
        workerInfo: action.payload,
      };
    case HIRINGMAN_FORM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const manListMyReducer = (state = { men: [] }, action) => {
  switch (action.type) {
    case LIST_HIRING_MAN_REQUEST:
      return {
        loading: true,
      };
    case LIST_HIRING_MAN_SUCCESS:
      return {
        loading: false,
        men: action.payload,
      };
    case LIST_HIRING_MAN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case LIST_HIRING_MAN_RESET:
      return { men: [] };
    default:
      return state;
  }
};
export const getAllMenReducer = (state = { men: [] }, action) => {
  switch (action.type) {
    case ALL_MAN_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ALL_MAN_DETAILS_SUCCESS:
      return { loading: false, men: action.payload };
    case ALL_MAN_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const hiringManReducer = (state = { men: [] }, action) => {
  switch (action.type) {
    case HIRING_MAN_REQUEST:
      return {
        loading: true,
      };
    case HIRING_MAN_SUCCESS:
      return {
        loading: false,
        success: true,
        men: action.payload,
      };
    case HIRING_MAN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    // case HIRING_MAN_RESET:
    //   return { orders: [] };
    default:
      return state;
  }
};
