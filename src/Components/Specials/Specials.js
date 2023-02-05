import React from "react";

const specials = [
  {
    id: 5,
    photo: require("../../Assets/pexels-mariana-kurnyk-1775043.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s.",
  },
  {
    id: 6,
    photo: require("../../Assets/pexels-terje-sollie-299347.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s.",
  },
  {
    id: 7,
    photo: require("../../Assets/pexels-quang-nguyen-vinh-4078059.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s.",
  },
];
const Specials = () => {
  return (
    <div className="mt-5">
      <h3>Specials</h3>

      <div className="row">
        {specials.map((special) => {
          return (
            <div className="col-lg-4 p-3" key={special.id}>
              <article className="card bg-white p-1">
                <img src={special.photo} className="w-100 rounded " />
                <div className="p-3">
                  <p className="text-sm text-justify font-weight-light">
                    {special.description}
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn btn-sm btn-primary">See More</div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specials;
