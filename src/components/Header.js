import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">Omdb App</Link>
      </header>
      <nav>
        <Link to="/dashboard/first">first</Link>

        <Link to="/dashboard/second">second</Link>
      </nav>
    </div>
  );
};

export default Header;
