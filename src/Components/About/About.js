import React from "react";

const About = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="row ">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 ">
            <h2 className="mb-0">Little Lemon</h2>
            <p className="text-sm">Chicago</p>
            <div className="row">
              <p className="text-sm text-justify  col-lg-9 col-sm-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
