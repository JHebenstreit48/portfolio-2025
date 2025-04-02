import { useState } from 'react';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import SkillsSection from '@/components/ResumeSkills/SkillsSection';
import { SkillsList } from '@/data/SkillsList';
import { SkillsResources } from '@/data/SkillsResources';
import '@/SCSS/Resume/Skills.scss';

const Skills = () => {
  const [modalData, setModalData] = useState<{
    skillName: string;
    resources: { label: string; url: string }[];
  } | null>(null);

  const handleSkillClick = (skillName: string) => {
    const key = skillName.replace(/\s|\./g, '');
    const resources = SkillsResources[key];

    if (resources) {
      setTimeout(() => {
        setModalData({ skillName, resources });
      }, 700);
    }
  };

  return (
    <div className="skillsContainer">
      {SkillsList.map((section) => (
        <SkillsSection
          key={section.title}
          title={section.title}
          subcategories={section.subcategories}
          onSkillClick={handleSkillClick}
        />
      ))}

      {modalData && (
        <SkillsModal
          skillName={modalData.skillName}
          resources={modalData.resources}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default Skills;
