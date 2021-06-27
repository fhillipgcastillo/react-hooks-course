import { combineReducers } from "redux";
import popularReducer from "./popularReducer";
import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({popular: popularReducer, results: resultsReducer});

export default rootReducer;
