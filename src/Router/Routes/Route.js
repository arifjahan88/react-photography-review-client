import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService/AddService";
import Blogs from "../../Components/Blogs/Blogs";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Reviews from "../../Components/Reviews/Reviews";
import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails";
import Services from "../../Components/Services/Services";
import UpdateReview from "../../Components/Update/UpdateReview";
import Main from "../../Layout/Main";
import Privateroutes from "./Privateroutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "reviews",
        element: (
          <Privateroutes>
            <Reviews></Reviews>
          </Privateroutes>
        ),
      },
      {
        path: "updatereview/:id",
        element: (
          <Privateroutes>
            <UpdateReview></UpdateReview>
          </Privateroutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatereviews/${params.id}`),
      },
      {
        path: "addservice",
        element: (
          <Privateroutes>
            <AddService></AddService>
          </Privateroutes>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
