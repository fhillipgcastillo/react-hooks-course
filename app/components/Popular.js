import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
import Loading from "./Loading";
import popularReducer from "../reducers/popularReducer";
import ReposGrid from "./ReposGrid";
import { useDispatch, useSelector } from "react-redux";
import { RESULTS_FETCH_SUCCEDED } from "../actions/actionTypes";
import { fetchSuccess } from "../actions/popularActionCreators";

function LangaugesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "rgb(187, 46, 31)" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LangaugesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("All");
  const state = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  const fetchedLanguages = React.useRef([]);

  const isLoading = () => {
    return !state[selectedLanguage] && state.error === null;
  };

  React.useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then((repos) => dispatch(fetchSuccess(selectedLanguage, repos)))
        .catch((error) => dispatch(fetchError(error)));
    }
  }, [selectedLanguage, fetchedLanguages]);

  return (
    <React.Fragment>
      <LangaugesNav
        test
        selected={selectedLanguage}
        onUpdateLanguage={setSelectedLanguage}
      />

      {isLoading() && <Loading text="Fetching Repos" />}

      {state.error && <p className="center-text error">{state.error}</p>}

      {state[selectedLanguage] && <ReposGrid repos={state[selectedLanguage]} />}
    </React.Fragment>
  );
}
