import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SkillsCard from '@/components/ResumeSkills/SkillsCard';
const SkillsSubsection = ({ type, level, skills, onSkillClick }) => {
    const getLabel = () => {
        if (level === 'fluent')
            return '✅ Fluent';
        if (level === 'learning')
            return '🧠 Learning';
        if (level === 'refreshing')
            return '🔁 Refreshing';
        return '';
    };
    return (_jsxs("div", { className: "skillsSubsection", children: [_jsx("h3", { className: type === 'tools' ? 'subsectionTitle toolSub' : `subsectionTitle ${level}`, children: getLabel() }), _jsx("div", { className: "skillsGrid", children: skills.map((skill) => (_jsx(SkillWithChildren, { skill: skill, onClick: onSkillClick }, skill.name))) })] }));
};
const SkillWithChildren = ({ skill, onClick, }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = !!skill.children?.length;
    return (_jsxs("div", { className: "skillWrapper", children: [_jsx(SkillsCard, { skill: skill, isExpanded: isExpanded, onClick: onClick, onToggle: hasChildren ? () => setIsExpanded((prev) => !prev) : undefined }), hasChildren && (_jsx("div", { className: `nestedSkillsGrid ${isExpanded ? 'visible' : 'hidden'}`, children: skill.children.map((child) => (_jsx(SkillsCard, { skill: child, onClick: onClick }, child.name))) }))] }));
};
export default SkillsSubsection;
