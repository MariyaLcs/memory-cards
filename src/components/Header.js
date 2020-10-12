import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        F.O.R.D.
      </Link>
      <Link href="/list" className="item">
        Topic Search
      </Link>
      <Link href="/dropdown" className="item">
        Speaking Club
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
