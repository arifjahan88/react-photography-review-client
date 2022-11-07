import React from "react";
import ServiceCard from "../ServiceCard.js/ServiceCard";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://wallpapers.com/images/hd/photography-of-silver-and-black-nikon-camera-u0josmiwlhuvjm1s-u0josmiwlhuvjm1s.jpg')] h-screen flex justify-center items-center">
        <h2 className="text-9xl font-sans font-bold">PHOTOGRAPHY</h2>
      </div>
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default Home;
