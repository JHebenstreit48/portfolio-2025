import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '@/SCSS/Resume/SkillsModal.scss';
const SkillModal = ({ skillName, resources, onClose }) => {
    return (_jsx("div", { className: "modalOverlay", onClick: onClose, children: _jsxs("div", { className: "modalContent", onClick: (e) => e.stopPropagation(), children: [_jsxs("h2", { children: ["Resources for ", skillName] }), _jsx("ul", { children: resources.map((res) => (_jsx("li", { children: _jsx("a", { href: res.url, target: "_blank", rel: "noopener noreferrer", children: res.label }) }, res.url))) }), _jsx("button", { className: "closeButton", onClick: onClose, children: "Close" })] }) }));
};
export default SkillModal;
