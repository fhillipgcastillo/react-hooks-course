import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import { ThemeProvider } from "../contexts/theme";
import Nav from "../components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";
import store from "../store";
import { Provider } from "react-redux";

const Popular = React.lazy(() => import("../components/Popular"));
const Battle = React.lazy(() => import("../components/Battle"));
const Results = React.lazy(() => import("../components/Results"));

function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Provider store={store}>
        <ThemeProvider value={theme}>
          <div className={theme}>
            <div className="container">
              <Nav toggleTheme={toggleTheme} />
              <Component {...pageProps} />
            </div>
          </div>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
