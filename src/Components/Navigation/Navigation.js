import React from "react";
export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  sticky-top"
      style={{
        background: "#e3f2fd",
      }}
    >
      <a className="navbar-brand">
        <img
          src={require("../../Assets/Asset 16@4x.png")}
          style={{ height: "40px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{ justifyContent: "center" }}
      >
        <ul
          className="navbar-nav"
          style={{ justifyContent: "space-around", width: "35%" }}
        >
          <li className="nav-item active">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">About</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Specials</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
