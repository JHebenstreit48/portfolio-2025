import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Cards from "@/components/Portfolio/PortfolioCards";
import Data from "@/components/Portfolio/PortfolioData";
// import WorkInProgress from "@/components/Portfolio/WorkInProgressAlert";
export default function Portfolio() {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: 'pageHeader', children: "Portfolio" }), _jsx("div", {}), _jsx("div", { className: "cardContainer", children: _jsx("div", { className: "row", children: Data.map((project, index) => (_jsx(Cards, { name: project.name, description: project.description, image: project.image, gitHubRepo: project.gitHubRepo, deployment: project.deployment }, project.name + index))) }) })] }));
}
