import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { itemsCreateReducer, itemsListReducers } from "./reducers/itemReducers";

const reducer = combineReducers({
  itemsList: itemsListReducers,
  itemsCreate: itemsCreateReducer,
  
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
