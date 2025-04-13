import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skills from '@/components/ResumeSkills/Skills';
import myResume from '@/assets/Justin-Hebenstreit-Resume-2025.pdf';
import '@/SCSS/Resume/Resume.scss';
export default function Resume() {
    return (_jsxs("div", { className: "resume-page", children: [_jsxs("div", { id: "skills", children: [_jsx("h2", { className: "sectionTitle", children: "Skills" }), _jsx(Skills, {})] }), _jsx("div", { className: "resumeButtonWrapper", children: _jsx("a", { href: myResume, download: true, target: "_blank", rel: "noopener noreferrer", className: "resumeButton", children: "Resume" }) })] }));
}
