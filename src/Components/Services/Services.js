import React, { useEffect, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";

import useTitle from "../Titlehooks/TitleHooks";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setservices] = useState([]);
  useTitle("Services");

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  return (
    <div>
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
