import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaWifi,
} from 'react-icons/fa';
import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiDrupal,
  SiGraphql,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiSharp,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiSwift,
  SiExpo,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { BsTools } from 'react-icons/bs';
import { TbBrandReactNative } from 'react-icons/tb';

import { useState } from 'react';
import SkillModal from '@/components/ResumeAndSkills/SkillsModal';
import { skillResources } from '@/data/skillsResources';
import '@/SCSS/Resume/Skills.scss';

const skillsSections = [
  {
    title: 'Web Development',
    subcategories: [
      {
        type: 'proficiency',
        level: 'fluent',
        skills: [
          { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
          { name: 'CSS', icon: SiCss3, color: '#1572B6' },
          { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          { name: 'React', icon: FaReact, color: '#61DAFB' },
          { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Angular', icon: SiAngular, color: '#DD0031' },
          { name: 'Apollo', icon: SiApollographql, color: '#311C87' },
          { name: 'Drupal', icon: SiDrupal, color: '#0678BE' },
          { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
          { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
          { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        ],
      },
    ],
  },
  {
    title: 'Mobile Development',
    subcategories: [
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
          { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
          { name: 'Dart', icon: SiDart, color: '#0175C2' },
          { name: 'Kotlin', icon: SiKotlin, color: '#0095D5' },
          { name: 'Swift', icon: SiSwift, color: '#FA7343' },
          { name: 'Expo', icon: SiExpo, color: '#000020' },
          { name: 'Android Studio', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Game Development',
    subcategories: [
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Unity', icon: SiUnity, color: '#000' },
          { name: 'C#', icon: SiSharp, color: '#9B4F96' },
          { name: 'Python', icon: SiPython, color: '#3776AB' },
        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'Unity Hub', icon: null },
          { name: 'Rider', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Cisco / IT / Networking',
    subcategories: [
      {
        type: 'proficiency',
        level: 'refreshing',
        skills: [
          { name: 'Cisco (CCNA)', icon: null },
          { name: 'Security Protocols', icon: null },
          { name: 'Packet Tracer', icon: null },
          { name: 'Networking', icon: FaNetworkWired, color: '#0AC1D6' },
          { name: 'Wireless', icon: FaWifi, color: '#0AC1D6' },
          { name: 'Subnetting', icon: null },
          { name: 'OSI Model', icon: null },
        ],
      },
      {
        type: 'tools',
        label: 'Tools',
        skills: [
          { name: 'GNS3', icon: null },
          { name: 'Wireshark', icon: null },
        ],
      },
    ],
  },
  {
    title: 'Shared Tools & Environments',
    subcategories: [
      {
        type: 'proficiency',
        level: 'fluent',
        skills: [
          { name: 'Python', icon: SiPython, color: '#3776AB' },
          { name: 'VS Code', icon: BiLogoVisualStudio, color: '#007ACC' },
          { name: 'Git', icon: FaGitAlt, color: '#F05032' },
          { name: 'GitHub', icon: FaGithub, color: '#fff' },
        ],
      },
      {
        type: 'proficiency',
        level: 'learning',
        skills: [
          { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91' },
        ],
      },
    ],
  },
];

const Skills = () => {
  const [modalData, setModalData] = useState<{
    skillName: string;
    resources: { label: string; url: string }[];
  } | null>(null);

  const handleSkillClick = (skillName: string) => {
    const key = skillName.replace(/\s|\./g, '');
    const resources = skillResources[key];
    if (resources) {
      setModalData({ skillName, resources });
    }
  };

  return (
    <div className="skillsContainer">
      {skillsSections.map((section) => (
        <div key={section.title} className="skillsSection">
          <h2 className="skillsTitle">{section.title}</h2>

          {section.subcategories.map((subcategory) =>
            subcategory.skills.length > 0 ? (
              <div
                key={subcategory.label || subcategory.level}
                className="skillsSubsection"
              >
                <h3
                  className={
                    subcategory.type === 'tools'
                      ? 'toolsTitle'
                      : `subsectionTitle ${subcategory.level}`
                  }
                >
                  {subcategory.type === 'proficiency' && subcategory.level === 'fluent' && '✅ Fluent'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'learning' && '🧠 Learning'}
                  {subcategory.type === 'proficiency' && subcategory.level === 'refreshing' && '🔁 Refreshing'}
                  {subcategory.type === 'tools' && (
                    <span className="toolsHeader">
                      <BsTools className="toolsIcon" />
                      {subcategory.label}
                    </span>
                  )}
                </h3>
                <div className="skillsGrid">
                  {subcategory.skills.map((skill) => {
                    const skillKey = skill.name.replace(/\s|\./g, '');
                    return (
                      <div
                        key={skill.name}
                        className="skillCard"
                        onClick={() => handleSkillClick(skill.name)}
                        style={{ cursor: skillResources[skillKey] ? 'pointer' : 'default' }}
                        title={skillResources[skillKey] ? 'Click to view resources' : ''}
                      >
                        {skill.icon ? (
                          <skill.icon className="icon" style={{ color: skill.color }} />
                        ) : (
                          <div className="icon">🔧</div>
                        )}
                        <p className="label">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null
          )}
        </div>
      ))}
      {modalData && (
        <SkillModal
          skillName={modalData.skillName}
          resources={modalData.resources}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default Skills;
