import { combineReducers } from "redux";
import popularReducer from "./popularReducer";
import resultsReducer from "../reducers/resultsReducer";

const rootReducer = combineReducers({popular: popularReducer, results: resultsReducer});

export default rootReducer;
