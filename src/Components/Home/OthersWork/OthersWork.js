import React from "react";

const OthersWork = () => {
  return (
    <div>
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-bold py-4 mb-5">
        Our Others Work Image Gallery
      </h2>
      <p className="w-full lg:w-1/3 mx-auto text-center mb-4 font-thin">
        Here is Our previasly work that what we are done yet. so, dont be late Hurry up to confirm
        your Work. And please don't forget to review our page.
      </p>
      <div>
        <div className="avatar grid lg:flex items-center justify-center">
          <div className="w-72 rounded m-4">
            <img
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1589521732544-3d40b61d1705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <h2>weeding</h2>
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBvc2V8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1483034695875-9b894c34cecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80"
            />
          </div>
        </div>
        <div className="avatar grid lg:flex items-center justify-center">
          <div className="w-72 rounded m-4">
            <img
              alt="Not Found in the server"
              src="https://www.goodnewskla.com/wp-content/uploads/2021/03/photo-1474552226712-ac0f0961a954.jpg"
            />
          </div>
          <div className="w-72 m-4 rounded">
            <img
              alt="Not Found in the server"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1514811126-listing-quotes.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersWork;
