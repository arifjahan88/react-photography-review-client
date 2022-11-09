import React from "react";

const OthersWork = () => {
  return (
    <div>
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-bold py-4 mb-5">
        Our Others Work Image Gallery
      </h2>
      <p className="w-full lg:w-1/3 mx-auto text-center mb-4 font-thin">
        Here is Our previasly work that what we are done yet. so, dont be late
        Hurry up to confirm your Work. And please don't forget to review our
        page.
      </p>
      <div className="">
        <div className="avatar grid lg:flex items-center justify-center">
          <div className="w-72 rounded m-4">
            <img
              alt=""
              src="https://i.pinimg.com/736x/55/e5/53/55e55342b66a5e7b6aa08dadb7886255.jpg"
            />
            <h2>weeding</h2>
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBvc2V8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt=""
              src="https://i.pinimg.com/originals/46/46/48/464648c7fa1c042e22284c6f596ac9ad.jpg"
            />
          </div>
        </div>
        <div className="avatar grid lg:flex items-center justify-center">
          <div className="w-72 rounded m-4">
            <img
              alt=""
              src="https://www.goodnewskla.com/wp-content/uploads/2021/03/photo-1474552226712-ac0f0961a954.jpg"
            />
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt=""
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1514811126-listing-quotes.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersWork;
