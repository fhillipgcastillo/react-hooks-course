import { POPULAR_FETCH_SUCCEDED, POPULAR_FETCH_ERROR } from "../actions/actionTypes";

export default function popularReducer(state = {}, action) {
  switch (action.type) {
    case POPULAR_FETCH_SUCCEDED:
      return { ...state, [action.selectedLanguage]: action.repos };
    case POPULAR_FETCH_ERROR:
      return { ...state, error: action.error.message };
    default:
      return state;
  }
}
