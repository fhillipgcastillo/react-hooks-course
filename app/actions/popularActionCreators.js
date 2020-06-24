import { POPULAR_FETCH_SUCCEDED, POPULAR_FETCH_ERROR}  from "./actionTypes";

export const fetchSuccess = (selectedLanguage, repos) => ({type: POPULAR_FETCH_SUCCEDED, selectedLanguage, repos});
export const fetchError = (error) => ({type: POPULAR_FETCH_ERROR, error});
