import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NavbarCompo = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/jobPostings" className="nav-link">
              Job Postings
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-link">
              community
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              shop now
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chats" className="nav-link">
              chats
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-link">
              notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              help
            </Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default NavbarCompo;
