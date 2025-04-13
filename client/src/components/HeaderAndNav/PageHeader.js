import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/HeaderAndNav/Navigation";
export default function PageHeader() {
    const location = useLocation();
    const currentPath = location.pathname;
    const getHeaderText = (path) => {
        switch (path) {
            case "/":
                return "About";
            case "/contact":
                return "Contact";
            case "/portfolio":
                return "Portfolio";
            case "/resume":
                return "Resume";
            default:
                return "Page";
        }
    };
    const headerText = getHeaderText(currentPath);
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsx("div", { className: "pageHeaderContainer", children: _jsx("h1", { className: 'pageHeader', children: headerText }) })] }));
}
