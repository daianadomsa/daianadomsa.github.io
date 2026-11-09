import { SkillArea, SkillLevel } from '../models/skill.model';

export const SKILL_LEVELS: readonly SkillLevel[] = [
  {
    title: 'Nivel Avansat',
    label: 'Main Skills',
    subtitle: '',
    skills: ['Java', 'Python', 'SQL', 'HTML / CSS', 'JavaScript'],
    highlighted: true,
  },
  {
    title: 'Nivel Intermediar',
    label: 'Intermediate',
    subtitle:
      '',
    skills: ['PHP', 'C / C++', 'React', 'REST API', 'PySpark', 'OpenCV'],
  },
  {
    title: 'Cunoștințe de Bază',
    label: 'Basic Knowledge',
    subtitle: '',
    skills: ['Angular', 'TypeScript', 'Docker', 'Kotlin', 'Google Cloud (GCP)', 'Azure'],
  },
];

export const SKILL_AREAS: readonly SkillArea[] = [
  {
    title: 'Baze de Date',
    label: 'Storage',
    description:
      '',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Experiență practică din proiecte',
    label: 'Hands-on Experience',
    description:
      '',
    tags: [
      'Data Processing & Big Data',
      'Image Processing & Computer Vision',
      'Integrare REST APIs',
      'Testing & Debugging',
      'Git & GitHub',
    ],
  },
];
