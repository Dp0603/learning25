import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/movies">
              Movies
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo1">
              FormDemo1
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo2">
              FormDemo2
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo3">
              FormDemo3
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo4">
              FormDemo4
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hwformdemo1">
              HWFormDemo1
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hwformdemo2">
              HWFormDemo2
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hwformdemo3">
              HWFormDemo3
            </Link>            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hwformdemo4">
              HWFormDemo4
            </Link>            
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
