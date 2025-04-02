// src/components/ResumeSkills/SkillsSection.tsx

import SkillsSubsection from '@/components/ResumeSkills/SkillsSubsection';

interface SkillsSubsectionGroup {
  level: string;
  skills: any[];
}

interface SkillsSubcategory {
  type: string;
  level?: string;
  label?: string;
  skills?: any[]; // optional for "tools" with nested subcategories
  subcategories?: SkillsSubsectionGroup[];
}

interface SkillsSectionProps {
  title: string;
  subcategories: SkillsSubcategory[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSection = ({ title, subcategories, onSkillClick }: SkillsSectionProps) => {
  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">{title}</h2>

      {subcategories.map((subcategory) => {
        if (subcategory.type === 'tools' && Array.isArray(subcategory.subcategories)) {
          // Render each proficiency level within the tools subsection
          return subcategory.subcategories.map((toolSub) => (
            <SkillsSubsection
              key={`${subcategory.label}-${toolSub.level}`}
              type="tools"
              level={toolSub.level}
              label={subcategory.label}
              skills={toolSub.skills ?? []}
              onSkillClick={onSkillClick}
            />
          ));
        } else if (Array.isArray(subcategory.skills) && subcategory.skills.length > 0) {
          // Render proficiency-based subsections
          return (
            <SkillsSubsection
              key={subcategory.label || subcategory.level}
              type={subcategory.type}
              level={subcategory.level}
              label={subcategory.label}
              skills={subcategory.skills}
              onSkillClick={onSkillClick}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SkillsSection;
