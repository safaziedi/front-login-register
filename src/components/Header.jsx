import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login">
              {" "}
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
