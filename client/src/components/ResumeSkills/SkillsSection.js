import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SkillsSubsection from '@/components/ResumeSkills/SkillsSubsection';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import { SkillsResources } from '@/data/SkillsResources';
const SkillsSection = ({ title, subcategories }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const handleSkillClick = (skillName) => {
        const skillObj = findSkillByName(skillName);
        const key = skillObj?.resourceKey || skillName.replace(/\s|\./g, '');
        const resources = SkillsResources[key];
        if (resources) {
            setSelectedSkill(skillName);
            setModalOpen(true);
        }
        else {
            console.warn(`No resources found for: ${key}`);
        }
    };
    const findSkillByName = (name) => {
        for (const sub of subcategories) {
            const skillList = sub.type === 'proficiency'
                ? sub.skills
                : Object.values(sub.toolsByLevel || {}).flat();
            for (const skill of skillList) {
                if (skill.name === name)
                    return skill;
                if (skill.children) {
                    const childMatch = skill.children.find((child) => child.name === name);
                    if (childMatch)
                        return childMatch;
                }
            }
        }
        return undefined;
    };
    const renderToolsSubcategories = (subcategory) => {
        const { toolsByLevel } = subcategory;
        return (_jsxs(_Fragment, { children: [_jsx("h3", { className: "toolsTitle", children: _jsx("span", { className: "toolsHeader", children: "\uD83D\uDEE0\uFE0F Tools" }) }), ['fluent', 'learning', 'refreshing'].map((level) => toolsByLevel[level]?.length ? (_jsx(SkillsSubsection, { type: "tools", level: level, skills: toolsByLevel[level], onSkillClick: handleSkillClick }, `tools-${level}`)) : null)] }));
    };
    return (_jsxs("div", { className: "skillsSection", children: [_jsx("h2", { className: "skillsTitle", children: title }), subcategories.map((subcategory, index) => {
                if (subcategory.type === 'proficiency') {
                    return (_jsx(SkillsSubsection, { type: "proficiency", level: subcategory.level, skills: subcategory.skills, onSkillClick: handleSkillClick }, `pro-${subcategory.level}-${index}`));
                }
                if (subcategory.type === 'tools') {
                    return _jsx("div", { children: renderToolsSubcategories(subcategory) }, `tools-${index}`);
                }
                return null;
            }), modalOpen && selectedSkill && (_jsx(SkillsModal, { skillName: selectedSkill, resources: SkillsResources[findSkillByName(selectedSkill)?.resourceKey || selectedSkill.replace(/\s|\./g, '')], onClose: () => setModalOpen(false) }))] }));
};
export default SkillsSection;
