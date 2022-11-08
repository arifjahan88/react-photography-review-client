import React from "react";

const ServiceCard = ({ limitservice }) => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt=""
            src={limitservice.img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{limitservice.name}</h1>
            <p className="py-6">
              {limitservice.description.slice(0, 150) + ". . . ."}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;
