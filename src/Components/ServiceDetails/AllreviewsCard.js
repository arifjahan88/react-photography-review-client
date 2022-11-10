import React from "react";

const AllreviewsCard = ({ alluser }) => {
  return (
    <div className="rounded-xl border-gray-200 shadow-sm dark:border-gray-700 p-2">
      <figure className="justify-center items-center p-5 text-center bg-white rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            "Reviews"
          </h3>
          <p className="my-4 font-light">{alluser.review}</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
          <img
            className="w-9 h-9 rounded-full"
            src={alluser.userphoto}
            alt=""
          />

          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{alluser.urername}</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              {alluser.email}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default AllreviewsCard;
