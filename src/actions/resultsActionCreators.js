import { RESULTS_FETCH_SUCCEDED, RESULTS_FETCH_ERROR}  from "./actionTypes";

export const fetchSuccess = (players) => ({type: RESULTS_FETCH_SUCCEDED, players});
export const fetchError = ({message}) => ({type: RESULTS_FETCH_ERROR, message});
