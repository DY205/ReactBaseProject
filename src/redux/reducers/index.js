import { combineReducers } from "redux";
import { USER_LOGOUT } from "../constants";
import {login,forLoader} from "./loginReducer";

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  login,
  forLoader
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
