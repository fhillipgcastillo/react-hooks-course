import { createStore } from "redux";
import rootReducers from "./reducers/rootReducer";

export default createStore(rootReducers, {
  popular: { error: null },
  results: { winner: null, loser: null, error: null, loading: true },
});
