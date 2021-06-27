import React from "react";
import "../index.css";
import { ThemeProvider } from "../contexts/theme";
import Nav from "../components/Nav";
import store from "../store";
import { Provider } from "react-redux";


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
