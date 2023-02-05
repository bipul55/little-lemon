import React from "react";

const testomonies = [
  {
    id: 1,
    name: "Umid Ghimire",
    profile: require("../../Assets/pexels-mateus-souza-3586798.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is typesetting industry. Lorem Ipsum has...",
  },
  {
    id: 2,
    name: "Roy Sharma",
    profile: require("../../Assets/pexels-murat-esibatir-4355346.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is typesetting industry. Lorem Ipsum has...",
  },
  {
    id: 3,
    name: "Gray Storm",
    profile: require("../../Assets/pexels-mateus-souza-3586798.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is typesetting industry. Lorem Ipsum has...",
  },
];

const Testomonials = () => {
  return (
    <div className="mt-5">
      <h3 className="text-left">Testomonials</h3>

      <div className="row">
        {testomonies.map((testomonie) => {
          return (
            <div className="col-lg-4 p-3" key={testomonie.id}>
              <article className="card bg-white p-3">
                <div className="d-flex align-items-start">
                  <img
                    src={testomonie.profile}
                    className="w-25 h-100"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                  <div className="w-75 pl-3">
                    <h5>{testomonie.name}</h5>
                    <p className="text-xsm text-justify font-weight-light">
                      {testomonie.description}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn btn-sm btn-primary mt-1">See More</div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testomonials;
