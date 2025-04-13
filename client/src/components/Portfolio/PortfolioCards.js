import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '@/SCSS/Portfolio/PortfolioCards.scss';
export default function Cards(project) {
    return (_jsxs("div", { className: "card text-bg-dark", children: [_jsx("h5", { className: "cardTitle", children: project.name }), _jsx("div", { className: "imageWrapper", children: _jsx("img", { className: "cardImg", src: project.image, alt: project.description }) }), _jsxs("div", { className: "liveAndDeploy", children: [_jsx("a", { target: "_blank", rel: "noopener noreferrer", className: "githubIcon fa-brands fa-github icon", href: project.gitHubRepo }), _jsx("a", { target: "_blank", rel: "noopener noreferrer", className: "deploymentIcon fa-solid fa-globe icon", href: project.deployment })] })] }));
}
