import { BsTools } from 'react-icons/bs';
import SkillsCard from '@/components/ResumeSkills/SkillsCard';

interface SkillsSubsectionProps {
  type: string;
  level?: string;
  label?: string;
  skills: any[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSubsection = ({ type, level, label, skills, onSkillClick }: SkillsSubsectionProps) => {
  const renderTitle = () => {
    if (type === 'proficiency') {
      if (level === 'fluent') return '✅ Fluent';
      if (level === 'learning') return '🧠 Learning';
      if (level === 'refreshing') return '🔁 Refreshing';
    }

    if (type === 'tools') {
      let icon = '';
      if (level === 'fluent') icon = '✅';
      else if (level === 'learning') icon = '🧠';
      else if (level === 'refreshing') icon = '🔁';

      return (
        <span className="toolsHeader">
          <BsTools className="toolsIcon" />
          {icon} {label || 'Tools'}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="skillsSubsection">
      <h3 className={type === 'tools' ? 'toolsTitle' : `subsectionTitle ${level}`}>
        {renderTitle()}
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
