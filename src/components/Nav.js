import React from "react";
import ThemeContext from "../contexts/theme";
import Link from "next/link";

const activeStyle = {
  color: "rgb(187, 46, 31)",
};

export default function Nav({ toggleTheme }) {
  const { theme } = React.useContext(ThemeContext);
  /**
   * TO DO: Add logic to adde activeColor style when the page is the same as the link
   */

  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <Link href="/">
            <a className="nav-link">Popular</a>
          </Link>
        </li>
        <li>
          <Link href="/battle">
            <a className="nav-link">Battle</a>
          </Link>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className="btn-clear"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🔦" : "💡"}
      </button>
    </nav>
  );
}
