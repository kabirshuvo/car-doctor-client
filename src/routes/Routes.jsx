import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Blog from "../pages/Blog/Blog";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/home";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);

export default router;
