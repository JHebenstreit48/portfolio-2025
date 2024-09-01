import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

 
 
 export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'resume',
          element: <Resume />,
        },
      ],
    },
  ]);