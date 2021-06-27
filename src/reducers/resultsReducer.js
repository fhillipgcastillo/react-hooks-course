import {
  RESULTS_FETCH_SUCCEDED,
  RESULTS_FETCH_ERROR,
} from "../actions/actionTypes";

export default function resultsReducer(prevState, action) {
  /**
   * TODO: standarize action to only receive type and payload
   */
  
  switch (action.type) {
    case RESULTS_FETCH_SUCCEDED:
      return {
        ...prevState,
        winner: action.players[0],
        loser: action.players[1],
        error: null,
        loading: false,
      };
    case RESULTS_FETCH_ERROR:
      return {
        ...prevState,
        error: action.error,
        loading: false,
      };
    default:
      return {
        ...prevState,
        error: null,
        loading: true,
      };
  }
}
