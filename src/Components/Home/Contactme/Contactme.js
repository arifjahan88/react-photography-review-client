import React from "react";
import photo from "../../Assets/My photo/photo.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contactme = () => {
  return (
    <div>
      <h2 className="text-6xl font-light font-sans text-center my-10">
        Contact Me !
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
        <div className="avatar flex items-center justify-center lg:justify-end">
          <div className="w-80 rounded opacity-75">
            <img alt="" src={photo} />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl font-mono font-bold">Md Arif Jahan</h2>
            <p className="text-xl font-thin">
              Student at Daffodil International University
            </p>
            <p className="text-base font-thin">Dhaka, Bangladesh</p>
            <div className="flex gap-2 text-xl mt-2 ">
              <Link>
                <BsFacebook></BsFacebook>
              </Link>
              <Link>
                <BsInstagram></BsInstagram>
              </Link>
              <Link>
                <BsLinkedin></BsLinkedin>
              </Link>
              <Link>
                <BsGithub></BsGithub>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
