import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import useTitle from "../Titlehooks/TitleHooks";

const Reviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setreviews] = useState([]);
  useTitle("My Reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photoToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setreviews(data));
  }, [user, logout]);

  const handledelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("photoToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setreviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      {user?.uid ? (
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto">
          {reviews.map((review) => (
            <>
              <div className="rounded-xl border-gray-200 shadow-sm dark:border-gray-700 p-2 my-8">
                <figure className="justify-center items-center p-8 text-center bg-white rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-end items-center ">
                    <Link to={`/updatereview/${review._id}`}>
                      <button className="btn btn-outline btn-xs mr-2">
                        Update
                      </button>
                    </Link>
                    <button onClick={() => handledelete(review._id)}>
                      <ImCross className="cursor-pointer"></ImCross>
                    </button>
                  </div>
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      "Reviews"
                    </h3>
                    <p className="my-4 font-light">{review.review}</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                    <img
                      className="w-9 h-9 rounded-full"
                      src={review.userphoto}
                      alt=""
                    />

                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{review.urername}</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                        {review.email}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center font-mono font-bold text-5xl mt-24 mb-5">
            Please Log in to see your Review !!
          </p>
          <Link to="/login">
            <p className="link text-center mb-5">Go to Login Page. . . .</p>
          </Link>
        </>
      )}
      <div>
        {reviews.length <= 0 && user?.uid && (
          <>
            <p className="text-center font-mono font-bold text-5xl mt-24 mb-5">
              There is no Review. Please Review.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
