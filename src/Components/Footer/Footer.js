import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-muted p-2 "
      style={{
        background: "#e3f2fd",
      }}
    >
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase mb-4 text-left">Little Lemon</h6>
              <p className="text-left  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-left ">
                Products
              </h6>
              <p className="text-left font-bold ">About</p>
              <p className="text-left font-bold ">Specials</p>
              <p className="text-left font-bold ">Testomonials</p>
              <p className="text-left font-bold ">Contact Us</p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-left ">
                Useful links
              </h6>
              <p className="text-left font-bold ">Pricing</p>
              <p className="text-left font-bold ">Settings</p>
              <p className="text-left font-bold ">Orders</p>
              <p className="text-left font-bold ">Help</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-left ">
                Contact
              </h6>
              <p className="text-left font-bold "> 872 Chicago, US</p>
              <p className="text-left font-bold ">littlelemon@info.com</p>
              <p className="text-left font-bold ">+ 01 234 567 88</p>
              <p className="text-left font-bold ">+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
