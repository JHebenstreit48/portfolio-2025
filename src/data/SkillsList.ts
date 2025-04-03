import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLess,
  FaNetworkWired,
  FaSass,
  FaWifi,
} from "react-icons/fa";
import {
  SiAngular,
  SiApollographql,
  SiC,
  SiCplusplus,
  SiCisco,
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
  SiAndroidstudio,
  SiRider,
  SiWireshark,
} from "react-icons/si";
import { DiVisualstudio, DiUnitySmall } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsWrench } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";

import type { Subcategory } from "@/components/ResumeSkills/Skills";

export const SkillsList: { title: string; subcategories: Subcategory[] }[] = [
  {
    title: "Web Development",
    subcategories: [
      {
        type: "proficiency",
        level: "fluent",
        skills: [
          { name: "HTML", icon: SiHtml5, color: "#E44D26" },
          { name: "CSS", icon: SiCss3, color: "#1572B6" },
          { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Node.js", icon: FaNodeJs, color: "#339933" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
      },
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "Angular", icon: SiAngular, color: "#DD0031" },
          { name: "Apollo", icon: SiApollographql, color: "#311C87" },
          { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
          { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
          { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
          { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
          { name: "Sass", icon: FaSass, color: "#CC6699" },
          { name: "LESS", icon: FaLess, color: "#1D365D" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          fluent: [{ name: "Insomnia", icon: SiInsomnia, color: "#4000BF" }],
          learning: [{ name: "Postman", icon: SiPostman, color: "#FF6C37" }],
        },
      },
    ],
  },
  {
    title: "Mobile Development",
    subcategories: [
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
          { name: "Flutter", icon: SiFlutter, color: "#02569B" },
          { name: "Dart", icon: SiDart, color: "#0175C2" },
          { name: "Kotlin", icon: SiKotlin, color: "#0095D5" },
          { name: "Swift", icon: SiSwift, color: "#FA7343" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          learning: [
            { name: "Expo", icon: SiExpo, color: "#000020" },
            { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
          ],
        },
      },
    ],
  },
  {
    title: "Game Development",
    subcategories: [
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "Unity", icon: SiUnity, color: "#000" },
          {
            name: "C Family",
            icon: SiC,
            color: "#A8B9CC",
            children: [
              { name: "C", icon: SiC, color: "#A8B9CC" },
              { name: "C++", icon: SiCplusplus, color: "#00599C" },
              { name: "C#", icon: SiSharp, color: "#9B4F96", resourceKey: "CSharp" },
            ],
          },
          { name: "Python", icon: SiPython, color: "#3776AB" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          learning: [
            { name: "Unity Hub", icon: DiUnitySmall, color: "#000" },
            { name: "Rider", icon: SiRider, color: "#000" },
          ],
        },
      },
    ],
  },
  {
    title: "Cisco / IT / Networking",
    subcategories: [
      {
        type: "proficiency",
        level: "refreshing",
        skills: [
          { name: "Cisco", icon: SiCisco, color: "#1BA0D7" },
          { name: "Security Protocols", icon: null },
          { name: "Networking", icon: FaNetworkWired, color: "#0AC1D6" },
          { name: "Wireless", icon: FaWifi, color: "#0AC1D6" },
          { name: "Subnetting", icon: null },
          { name: "OSI Model", icon: null },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          refreshing: [{ name: "Packet Tracer", icon: null }],
          learning: [
            { name: "GNS3", icon: BsWrench, color: "#000" },
            { name: "Wireshark", icon: SiWireshark, color: "#000" },
          ],
        },
      },
    ],
  },
  {
    title: "Shared Tools & Environments",
    subcategories: [
      {
        type: "proficiency",
        level: "fluent",
        skills: [
          { name: "Python", icon: SiPython, color: "#3776AB" },
          { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
          { name: "Git", icon: FaGitAlt, color: "#F05032" },
          { name: "GitHub", icon: FaGithub, color: "#fff" },
        ],
      },
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          fluent: [
            { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#fff" },
          ],
          learning: [
            { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
          ],
        },
      },
    ],
  },
];
