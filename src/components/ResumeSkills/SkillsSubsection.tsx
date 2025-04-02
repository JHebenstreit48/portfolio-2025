import SkillsCard from '@/components/ResumeSkills/SkillsCard';

interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
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
          <SkillsCard key={skill.name} skill={skill} onClick={onSkillClick} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSubsection;
