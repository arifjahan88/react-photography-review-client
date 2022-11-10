import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={service.img}>
              <img
                className="lg:max-w-sm rounded-lg shadow-2xl"
                src={service.img}
                alt=""
              />
            </PhotoView>
          </div>
        </PhotoProvider>

        <div>
          <h1 className="text-5xl font-bold">{service.name}</h1>
          <p className="py-6">{service.description.slice(0, 150) + "......"}</p>
          <Link to={`/servicedetails/${service._id}`}>
            <button className="btn btn-sm btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
