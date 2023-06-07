import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
