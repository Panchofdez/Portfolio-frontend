import { combineReducers } from "redux";
import currentUser from "./currentUser";
import portfolios from "./portfolios";
import showPortfolio from "./showPortfolio";
import errors from "./errors";

const rootReducer = combineReducers({
  currentUser,
  portfolios,
  errors,
  showPortfolio,
});

export default rootReducer;
