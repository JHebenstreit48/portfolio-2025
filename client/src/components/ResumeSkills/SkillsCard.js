import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SkillsResources } from '@/data/SkillsResources';
const SkillsCard = ({ skill, isExpanded, onClick, onToggle }) => {
    const skillKey = skill.name.replace(/\s|\./g, '');
    const hasResources = !!SkillsResources[skillKey];
    const hasChildren = !!skill.children?.length;
    return (_jsxs("div", { className: "skillCard", onClick: (e) => {
            e.stopPropagation(); // ✅ Prevent bubbling
            if (!hasChildren) {
                onClick(skill.name); // ✅ Modal will work now
            }
        }, style: { cursor: hasResources ? 'pointer' : 'default' }, title: hasResources ? 'Click to view resources' : '', children: [skill.icon ? (_jsx(skill.icon, { className: `icon ${skill.name === 'Cisco' ? 'ciscoIcon' :
                    skill.name === 'Unity Hub' ? 'unityHubIcon' :
                        skill.name === 'Sass' ? 'sassIcon' :
                            skill.name === 'LESS' ? 'lessIcon' :
                                ''}`, style: { color: skill.color } })) : (_jsx("div", { className: "icon", children: "\uD83D\uDD27" })), _jsx("p", { className: "label", children: skill.name }), hasChildren && (_jsx("div", { className: "toggleArrow", onClick: (e) => {
                    e.stopPropagation(); // ✅ Prevent parent modal logic
                    if (onToggle)
                        onToggle();
                }, children: isExpanded ? '▲' : '▼' }))] }));
};
export default SkillsCard;
