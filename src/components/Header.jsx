import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                To Do List
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul>

          <div class="col-md-3 text-end">
            <Link to="/login">
              {" "}
              <button type="button" class="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button type="button" class="btn btn-primary">
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
