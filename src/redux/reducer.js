import { combineReducers } from "redux";
import {
  CERAMIC,
  CURRENT_ACCOUNT,
  IS_CERAMIC_AUTHENTICATED,
  LOAD,
  LOADER_CONTENT,
  METAMASK_CONNECT_FUNCTION,
  METAMASK_STATUS,
  SHOW_LOADER,
} from "./types";

const metamaskStatus = (state = false, action) => {
  if (action.type === METAMASK_STATUS) return action.payload;
  return state;
};

const currentAccount = (state = "", action) => {
  if (action.type === CURRENT_ACCOUNT) return action.payload;
  return state;
};
const metamaskConnectFunction = (state = {}, action) => {
  if (action.type === METAMASK_CONNECT_FUNCTION) return action.payload;
  return state;
};

const load = (state = false, action) => {
  if (action.type === LOAD) return action.payload;
  return state;
};

const showLoader = (state = false, action) => {
  if (action.type === SHOW_LOADER) return action.payload;
  return state;
};

const isCeramicAuthenticated = (state = false, action) => {
  if (action.type === IS_CERAMIC_AUTHENTICATED) return action.payload;
  return state;
};

const loaderContent = (state = "Loading...", action) => {
  if (action.type === LOADER_CONTENT) return action.payload;
  return state;
};

const ceramic = (state = {}, action) => {
  if (action.type === CERAMIC) return action.payload;
  return state;
};

export default combineReducers({
  metamaskConnectFunction,
  currentAccount,
  metamaskStatus,
  load,
  showLoader,
  isCeramicAuthenticated,
  loaderContent,
  ceramic,
});
