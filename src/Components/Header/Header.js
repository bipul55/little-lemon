import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner-width">
        <div className="dark-overlay"></div>
        <div
          style={{ height: "100vh", zIndex: 2, position: "relative" }}
          className="d-flex justify-content-center align-items-center w-100"
        >
          <div>
            <h1 className="text-center text-white">Little Lemon</h1>
            <p className="text-sm  font-weight-light  text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              duis tristique sollicitudin nibh.
            </p>
            <div className="d-flex justify-content-center align-items-center w-100">
              <div className="btn btn-dark btn-sm m-auto">Explore Website</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
