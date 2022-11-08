import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  return (
    <div>
      {services.map((service) => (
        <>
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                alt=""
                src={service.img}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{service.name}</h1>
                <p className="py-6">
                  {service.description.slice(0, 150) + "......"}
                </p>
                <Link to={`/servicedetails/${service._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Services;
