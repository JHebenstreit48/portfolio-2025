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
      return (
        <>
          {level === 'fluent' && '✅ Fluent'}
          {level === 'learning' && '🧠 Learning'}
          {level === 'refreshing' && '🔁 Refreshing'}
        </>
      );
    }

    if (type === 'tools') {
      return (
        <span className="toolsHeader">
          <BsTools className="toolsIcon" />
          {level === 'fluent' && '✅ '}
          {level === 'learning' && '🧠 '}
          {level === 'refreshing' && '🔁 '}
          {label}
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
          <SkillsCard
            key={skill.name}
            skill={skill}
            onClick={onSkillClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSubsection;
