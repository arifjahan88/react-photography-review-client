import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { description, img, name, price, _id } = useLoaderData();

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
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
