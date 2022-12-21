import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../Titlehooks/TitleHooks";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setreviews] = useState([]);
  useTitle("My Reviews");

  useEffect(() => {
    fetch(
      `https://react-photography-review-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("photoToken")}`,
        },
      }
    )
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
      fetch(
        `https://react-photography-review-server.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("photoToken")}`,
          },
        }
      )
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
            <ReviewsCard
              key={review._id}
              review={review}
              handledelete={handledelete}
            ></ReviewsCard>
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
        {reviews.length < 0 && user?.uid && (
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
