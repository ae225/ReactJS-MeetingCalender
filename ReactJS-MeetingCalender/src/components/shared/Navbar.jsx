import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex">
          <a href="#" className="nav-link text-white">
            Home
          </a>
          <a href="#" className="nav-link text-white">
            About
          </a>
          <a href="#" className="nav-link text-white">
            Services
          </a>
          <a href="#" className="nav-link text-white">
            Contact
          </a>
        </div>

        <div className="dropdown">
          <a
            href="#"
            className="text-white dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Demo
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
