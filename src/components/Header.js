import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <header className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Omdb App
        </Link>
      </header>
      <nav>
        <Link className="navbar-brand" to="/dashboard/first">
          first
        </Link>

        <Link className="navbar-brand" to="/dashboard/second">
          second
        </Link>
      </nav>
    </div>
  );
};

export default Header;
