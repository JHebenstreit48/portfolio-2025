import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError } from "react-router-dom";
import '@/SCSS/ErrorPage.scss'; // Assuming you have a SCSS file for styling the error page
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (_jsxs("div", { id: "error-page", children: [_jsx("h1", { children: "Oops!" }), _jsx("p", { children: "Sorry, an unexpected error has occured." }), _jsx("p", { children: _jsx("i", { children: error.status || error.message }) })] }));
}
