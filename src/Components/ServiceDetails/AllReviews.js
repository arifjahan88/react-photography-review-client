import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import AllreviewsCard from "./AllreviewsCard";

const AllReviews = () => {
  const { user } = useContext(AuthContext);
  const [allusers, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://react-photography-review-server.vercel.app/reviewsall", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("photoToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div>
        {user?.uid && (
          <>
            <h2 className="text-center font-serif text-5xl my-5">
              Here Is Our All review.
            </h2>
          </>
        )}
        {user?.uid ? (
          <div className="grid lg:grid-cols-2 gap-2 container mx-auto">
            {allusers.map((alluser) => (
              <AllreviewsCard
                key={alluser._id}
                alluser={alluser}
              ></AllreviewsCard>
            ))}
          </div>
        ) : (
          <>
            <p className="text-center font-mono font-bold text-5xl mt-24 mb-5">
              Please Log in to see Others Review !!
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
