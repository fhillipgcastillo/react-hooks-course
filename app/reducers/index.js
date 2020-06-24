import {combineReducers} from "redux";
import { popularReducer } from "./popularReducer";

const rootReducers = combineReducers(popularReducer);

export default rootReducers;