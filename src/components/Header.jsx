import React from "react";
import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="display-6">
            <FaTasks className="me-2"  />
            Intrective Task Manager App
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
