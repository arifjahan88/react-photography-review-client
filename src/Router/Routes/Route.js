import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Headermain from "../../Layout/Headermain";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Headermain></Headermain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
