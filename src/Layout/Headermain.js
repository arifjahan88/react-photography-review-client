import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navberheader from "../Components/Navber/Navberheader";

const Headermain = () => {
  return (
    <div>
      <Navberheader></Navberheader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Headermain;
