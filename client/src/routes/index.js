import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/Error";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
export const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                index: true,
                element: _jsx(About, {}),
            },
            {
                path: 'contact',
                element: _jsx(Contact, {}),
            },
            {
                path: 'portfolio',
                element: _jsx(Portfolio, {}),
            },
            {
                path: 'resume',
                element: _jsx(Resume, {}),
            },
        ],
    },
]);
