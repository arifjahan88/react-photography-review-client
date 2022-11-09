import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Titlehooks/TitleHooks";
import ServiceCard from "../ServiceCard.js/ServiceCard";

const Home = () => {
  const [limitservice, setlimitsservice] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("http://localhost:5000/limitservice")
      .then((res) => res.json())
      .then((data) => setlimitsservice(data));
  }, []);
  return (
    <div>
      <div className="bg-[url('https://wallpapers.com/images/hd/photography-of-silver-and-black-nikon-camera-u0josmiwlhuvjm1s-u0josmiwlhuvjm1s.jpg')] h-screen flex justify-center items-center bg-fixed">
        <h2 className="text-9xl font-sans font-bold">PHOTOGRAPHY</h2>
      </div>
      <div>
        {limitservice.map((ls) => (
          <ServiceCard key={ls._id} limitservice={ls}></ServiceCard>
        ))}
      </div>
      <div className="text-center py-3 bg-base-200">
        <Link to="/services">
          <button className="btn btn-primary ">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
