import {
  ITEMS_CREATE_FAIL,
  ITEMS_CREATE_REQUEST,
  ITEMS_CREATE_SUCCESS,
  ITEMS_LIST_FAIL,
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
} from "../constants/itemConstants";

export const itemsListReducers = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEMS_LIST_REQUEST:
      return { loading: true };
    case ITEMS_LIST_SUCCESS:
      return { loading: false, items: action.payload };
    case ITEMS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const itemsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_CREATE_REQUEST:
      return { loading: true };
    case ITEMS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ITEMS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
