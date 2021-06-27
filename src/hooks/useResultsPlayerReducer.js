import React from "react";
import { battle } from "../utils/api";
import resultsReducer from "../reducers/resultsReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuccess, fetchError } from "../actions/resultsActionCreators";

export function useResultsPlayerReducer(playerOne = null, playerTwo = null) {
  const state = useSelector((state) => state.results);
  const dispatch = useDispatch();

  React.useEffect(() => {
    battle([playerOne, playerTwo])
      .then((players) => dispatch(fetchSuccess(players)))
      .catch((error) => dispatch(fetchError(error)));
  }, [playerOne, playerTwo]);
  // state => {winner, loser, error, loading},
  // dispatch => (type: ["success" || "error"], error: String, |players: [ |objects]( lenght: 2))
  return [state, dispatch];
}
