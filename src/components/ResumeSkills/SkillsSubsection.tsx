import { useState } from 'react';
import SkillsCard from '@/components/ResumeSkills/SkillsCard';

interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
}

interface SkillsSubsectionProps {
  type: 'proficiency' | 'tools';
  level?: 'fluent' | 'learning' | 'refreshing';
  skills: Skill[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSubsection = ({ type, level, skills, onSkillClick }: SkillsSubsectionProps) => {
  const getLabel = () => {
    if (level === 'fluent') return '✅ Fluent';
    if (level === 'learning') return '🧠 Learning';
    if (level === 'refreshing') return '🔁 Refreshing';
    return '';
  };

  return (
    <div className="skillsSubsection">
      <h3 className={type === 'tools' ? 'subsectionTitle toolSub' : `subsectionTitle ${level}`}>
        {getLabel()}
      </h3>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <SkillWithChildren key={skill.name} skill={skill} onClick={onSkillClick} />
        ))}
      </div>
    </div>
  );
};

const SkillWithChildren = ({
  skill,
  onClick,
}: {
  skill: Skill;
  onClick: (name: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = !!skill.children?.length;

  return (
    <div className="nestedSkillWrapper">
      <SkillsCard
        skill={skill}
        isExpanded={isExpanded}
        onClick={onClick}
        onToggle={hasChildren ? () => setIsExpanded((prev) => !prev) : undefined}
      />
      {hasChildren && isExpanded && (
        <div className="nestedSkillsGrid">
          {skill.children!.map((child) => (
            <SkillsCard key={child.name} skill={child} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSubsection;
