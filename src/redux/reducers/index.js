import { combineReducers } from "redux";

import filterReducer from "./filters";
import cakesReducer from "./cakes";

const rootReducer = combineReducers({
  filter: filterReducer,
  cakes: cakesReducer,
});

export default rootReducer;
