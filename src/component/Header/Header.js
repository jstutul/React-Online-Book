import React from "react";
import Search from "../Search/Search";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Q BOOKS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
};

export default Header;
