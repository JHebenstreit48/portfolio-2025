import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import SkillsSection from '@/components/ResumeSkills/SkillsSection';
import { SkillsList } from '@/data/SkillsList';
import { SkillsResources } from '@/data/SkillsResources';
import '@/SCSS/Resume/Skills.scss';
const Skills = () => {
    const [modalData, setModalData] = useState(null);
    const handleSkillClick = (skillName) => {
        const key = skillName.replace(/\s|\./g, '');
        const resources = SkillsResources[key];
        if (resources) {
            setTimeout(() => {
                setModalData({ skillName, resources });
            }, 700);
        }
    };
    return (_jsxs("div", { className: "skillsContainer", children: [SkillsList.map((section) => (_jsx(SkillsSection, { title: section.title, subcategories: section.subcategories, onSkillClick: handleSkillClick }, section.title))), modalData && (_jsx(SkillsModal, { skillName: modalData.skillName, resources: modalData.resources, onClose: () => setModalData(null) }))] }));
};
export default Skills;
