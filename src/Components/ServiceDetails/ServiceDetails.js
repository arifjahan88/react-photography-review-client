import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import ServiceReview from "../ServiceReview/ServiceReview";
import AllReviews from "./AllReviews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { description, img, name, price } = useLoaderData();

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/3 rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="text-center mx-auto">
            <h2 className="card-title text-3xl">
              {name}
              <div className="badge badge-secondary">Price : {price}$</div>
            </h2>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">PhotoGraphy</div>
          </div>
        </div>
      </div>
      {user?.uid ? (
        <ServiceReview></ServiceReview>
      ) : (
        <>
          <p className="text-5xl font-bold text-center p-8">
            Please Login to review ! !
          </p>
          <Link to="/login">
            <p className="link text-center mb-5">Go to Login Page. . . .</p>
          </Link>
        </>
      )}
      <AllReviews></AllReviews>
    </div>
  );
};

export default ServiceDetails;
