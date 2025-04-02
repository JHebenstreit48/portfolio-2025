import SkillsSubsection from '@/components/ResumeSkills/SkillsSubsection';

interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
}

interface ProficiencySubcategory {
  type: 'proficiency';
  level: 'fluent' | 'learning' | 'refreshing';
  skills: Skill[];
}

interface ToolsByLevel {
  fluent?: Skill[];
  learning?: Skill[];
  refreshing?: Skill[];
}

interface ToolSubcategory {
  type: 'tools';
  label: string;
  toolsByLevel: ToolsByLevel;
}

type Subcategory = ProficiencySubcategory | ToolSubcategory;

interface SkillsSectionProps {
  title: string;
  subcategories: Subcategory[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSection = ({ title, subcategories, onSkillClick }: SkillsSectionProps) => {
  const renderToolsSubcategories = (subcategory: ToolSubcategory) => {
    const { toolsByLevel } = subcategory;

    return (
      <>
        <h3 className="toolsTitle">
          <span className="toolsHeader">🛠️ Tools</span>
        </h3>
        {(['fluent', 'learning', 'refreshing'] as const).map((level) =>
          toolsByLevel[level]?.length ? (
            <SkillsSubsection
              key={`tools-${level}`}
              type="tools"
              level={level}
              skills={toolsByLevel[level]!}
              onSkillClick={onSkillClick}
            />
          ) : null
        )}
      </>
    );
  };

  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">{title}</h2>
      {subcategories.map((subcategory, index) => {
        if (subcategory.type === 'proficiency' && subcategory.skills?.length) {
          return (
            <SkillsSubsection
              key={`pro-${subcategory.level}-${index}`}
              type="proficiency"
              level={subcategory.level}
              skills={subcategory.skills}
              onSkillClick={onSkillClick}
            />
          );
        }

        if (subcategory.type === 'tools') {
          return <div key={`tools-${index}`}>{renderToolsSubcategories(subcategory)}</div>;
        }

        return null;
      })}
    </div>
  );
};

export default SkillsSection;
