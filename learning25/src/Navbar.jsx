import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          DP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {/* Movies Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="moviesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </Link>
              <ul className="dropdown-menu" aria-labelledby="moviesDropdown">
                <li>
                  <Link className="dropdown-item" to="/movies">
                    All Movies
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/findmovies">
                    Find Movies
                  </Link>
                </li>
              </ul>
            </li>

            {/* FormDemo Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="formDemoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FormDemo
              </Link>
              <ul className="dropdown-menu" aria-labelledby="formDemoDropdown">
                <li>
                  <Link className="dropdown-item" to="/formdemo1">
                    FormDemo1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/formdemo2">
                    FormDemo2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/formdemo3">
                    FormDemo3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/formdemo4">
                    FormDemo4
                  </Link>
                </li>
              </ul>
            </li>

            {/* HWFormDemo Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="hwFormDemoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HWFormDemo
              </Link>
              <ul className="dropdown-menu" aria-labelledby="hwFormDemoDropdown">
                <li>
                  <Link className="dropdown-item" to="/hwformdemo1">
                    HWFormDemo1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hwformdemo2">
                    HWFormDemo2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hwformdemo3">
                    HWFormDemo3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hwformdemo4">
                    HWFormDemo4
                  </Link>
                </li>
              </ul>
            </li>

            {/* API Demo */}
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
                API Demo
              </Link>
            </li>

            {/* Search Movies */}
            <li className="nav-item">
              <Link className="nav-link" to="/searchmovies">
                Search Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">
                Api Demo 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo3">
                Api Demo 3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                LOGIN 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
