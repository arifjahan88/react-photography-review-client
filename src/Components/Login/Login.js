import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../Titlehooks/TitleHooks";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";
  const { logIn, googlelogin } = useContext(AuthContext);
  const [error, seterror] = useState("");
  const HandleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login SuccessFull");
        const currentUser = {
          email: user.email,
        };
        // get the jwt Token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("photoToken", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        seterror(err.message);
      });
  };
  const Handlegooglelogin = () => {
    googlelogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login SuccessFull");
        const currentuser = {
          email: user.email,
        };

        // get the jwt Token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentuser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("photoToken", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
        seterror(err.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={HandleLogin}
          className="hero-content flex-col lg:flex-row "
        >
          <img
            alt=""
            src="https://c0.wallpaperflare.com/preview/487/39/826/person-holding-black-fujica-camera.jpg"
            className="max-w-sm rounded-lg shadow-2xl hidden lg:flex"
          />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-red-600 text-xs mt-2">{error}</p>
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div>
                <p className="text-center text-sm my-2 font-semibold">
                  Or Sign in with
                </p>
                <div className="flex justify-center">
                  <Link>
                    <div className="p-2 bg-slate-300 rounded-full mx-1">
                      <FaFacebookF className="text-blue-900"></FaFacebookF>
                    </div>
                  </Link>
                  <Link>
                    <div className="p-2 bg-slate-300 rounded-full mx-1">
                      <FaLinkedinIn className="text-blue-700"></FaLinkedinIn>
                    </div>
                  </Link>
                  <Link>
                    <div
                      onClick={Handlegooglelogin}
                      className="p-2 bg-slate-300 rounded-full mx-1"
                    >
                      <FcGoogle></FcGoogle>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-xs my-5 text-center">
                Don't Have an Account?{" "}
                <Link to="/register">
                  <span className="text-orange-600 font-bold">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
