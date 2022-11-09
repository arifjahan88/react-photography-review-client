import React, { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const AllReviews = () => {
  const { user } = useContext(AuthContext);
  const [allusers, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handledelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remaining = allusers.filter((rev) => rev._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-center font-serif text-5xl my-5">
          Here Is Our All review.
        </h2>
        {user?.uid ? (
          <div className="grid lg:grid-cols-2 gap-2 container mx-auto">
            {allusers.map((alluser) => (
              <>
                <div className="rounded-xl border-gray-200 shadow-sm dark:border-gray-700 p-2">
                  <figure className="justify-center items-center p-5 text-center bg-white rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end items-center ">
                      <Link to={`/updatereview/${alluser._id}`}>
                        <button className="btn btn-outline btn-xs mr-2">
                          Update
                        </button>
                      </Link>
                      <button onClick={() => handledelete(alluser._id)}>
                        <ImCross className="cursor-pointer"></ImCross>
                      </button>
                    </div>
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
          {allusers.length <= 0 && user?.uid && (
            <>
              <p className="text-center font-mono font-bold text-5xl mt-24 mb-5">
                There is no Review. Please Review.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
