import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/propertiesData.json"),
      },
      {
        path: "property/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch("/propertiesData.json"),
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile> </PrivateRoute>,
      },
      {
        path: "contact",
        element: <PrivateRoute> <Contact></Contact> </PrivateRoute>,
      },
    ]
  },
]);