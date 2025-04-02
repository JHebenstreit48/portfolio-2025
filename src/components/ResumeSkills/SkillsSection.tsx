import SkillsSubsection from './SkillsSubsection';

interface SkillsSectionProps {
  title: string;
  subcategories: any[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSection = ({ title, subcategories, onSkillClick }: SkillsSectionProps) => {
  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">{title}</h2>

      {subcategories.map((subcategory) =>
        subcategory.skills.length > 0 ? (
          <SkillsSubsection
            key={subcategory.label || subcategory.level}
            type={subcategory.type}
            level={subcategory.level}
            label={subcategory.label}
            skills={subcategory.skills}
            onSkillClick={onSkillClick}
          />
        ) : null
      )}
    </div>
  );
};

export default SkillsSection;
