import {
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_FAIL,
  ITEMS_LIST_SUCCESS,
  ITEMS_CREATE_REQUEST,
  ITEMS_CREATE_SUCCESS,
  ITEMS_CREATE_FAIL,
} from "../constants/itemConstants";
import axios from "axios";

export const listItems = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEMS_LIST_REQUEST,
    });


    const { data } = await axios.get(`/api/items`);
    dispatch({
      type: ITEMS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ITEMS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createItemsAction =
  (
    itemName,
    unit,
    dimensions,
    weight,
    manufacturer,
    brand,
    selingPrice,
    costPrice,
    description,
    openingStock,
    reorderPoint,
    preferedVendor
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ITEMS_CREATE_REQUEST,
      });

      const { data } = await axios.post(`/api/items/create`, {
        itemName,
        unit,
        dimensions,
        weight,
        manufacturer,
        brand,
        selingPrice,
        costPrice,
        description,
        openingStock,
        reorderPoint,
        preferedVendor,
      });

      dispatch({
        type: ITEMS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: ITEMS_CREATE_FAIL,
        payload: message,
      });
    }
  };
