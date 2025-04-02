import { skillResources } from '@/data/skillsResources';

interface SkillsCardProps {
  skill: {
    name: string;
    icon: any;
    color?: string;
  };
  onClick: (skillName: string) => void;
}

const SkillsCard = ({ skill, onClick }: SkillsCardProps) => {
  const skillKey = skill.name.replace(/\s|\./g, '');
  const hasResources = !!skillResources[skillKey];

  return (
    <div
      className="skillCard"
      onClick={() => onClick(skill.name)}
      style={{ cursor: hasResources ? 'pointer' : 'default' }}
      title={hasResources ? 'Click to view resources' : ''}
    >
      {skill.icon ? (
        <skill.icon className="icon" style={{ color: skill.color }} />
      ) : (
        <div className="icon">🔧</div>
      )}
      <p className="label">{skill.name}</p>
    </div>
  );
};

export default SkillsCard;
