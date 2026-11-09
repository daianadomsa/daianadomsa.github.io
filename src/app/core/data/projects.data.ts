import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'MatchMate - Microservices App',
    description:
      'Aplicație de tip microservicii pentru potrivirea jucătorilor. ',
    tags: ['Node.js', 'Docker', 'Azure', 'Microservices', 'SQL'],
    category: 'Cloud',
    githubLink: 'https://github.com/daianadomsa/MatchMate-MicroservicesApp',
  },
  {
    id: 2,
    title: 'Traffic Sign Recognition AI',
    description:
      'Proiect de computer vision pentru recunoașterea semnelor de circulație. ',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision'],
    category: 'Data & Machine Learning',
    githubLink: 'https://github.com/daianadomsa/TrafficSignRecognition',
  },
  {
    id: 3,
    title: 'FindMe - Lost & Found App',
    description:
      'Aplicație Android pentru găsirea obiectelor pierdute. ',
    tags: ['Java', 'Kotlin', 'Android SDK', 'Firebase', 'Google Maps'],
    category: 'Mobile Apps',
    githubLink: 'https://github.com/daianadomsa/AndroidProject',
  },
  {
    id: 4,
    title: 'Employee Onboarding System',
    description:
      'Aplicație full-stack pentru fluxul de integrare a noilor angajați. ',
    tags: ['Next.js', 'Java', 'PostgreSQL', 'REST API', 'Full-Stack'],
    category: 'Web development',
    githubLink: 'https://github.com/daianadomsa/OnboardingSystem',
  },
  {
    id: 5,
    title: 'EditorText Personalizat',
    description:
      'Editor de text pentru Windows cu formatare de bază, inserare de imagini și temă întunecată. ',
    tags: ['VB.NET', '.NET 8.0', 'Windows Forms', 'Guna UI'],
    category: 'Desktop app',
    githubLink: 'https://github.com/daianadomsa/EditorText',
  },
  {
    id: 6,
    title: 'UK Housing Price Prediction',
    description:
      'Analiză de date imobiliare din Regatul Unit cu PySpark. ',
    tags: ['PySpark', 'Big Data', 'Google Cloud', 'Machine Learning'],
    category: 'Data & Machine Learning',
    githubLink: 'https://github.com/daianadomsa/UK-Housing-Prediction',
  },
  {
    id: 7,
    title: 'Phishing Website Detection',
    description:
      'Comparație între câțiva algoritmi de clasificare pentru detectarea site-urilor de phishing, cu accent pe pregătirea datelor și evaluarea modelelor.',
    tags: ['Python', 'Scikit-Learn', 'Machine Learning'],
    category: 'Data & Machine Learning',
    githubLink: 'https://github.com/daianadomsa/Phishing-Websites-Detection',
  },
  {
    id: 8,
    title: 'MyThesis Platform',
    description:
      'Platformă pentru gestionarea lucrărilor de licență: alocare de teme, urmărirea progresului și arhivarea proiectelor finalizate.',
    tags: ['React.js', 'JSON Server', 'JavaScript', 'CSS Modules', 'REST API'],
    category: 'Web development',
    githubLink: 'https://github.com/daianadomsa/my-thesis-plaform',
  },
  {
    id: 9,
    title: 'AutoML Platform',
    description:
      'Proiect de cercetare pentru selectarea automată a algoritmilor și a hiperparametrilor în limite de buget. ',
    tags: ['Python', 'AutoML', 'Machine Learning', 'Big Data'],
    category: 'Data & Machine Learning',
    githubLink: 'https://github.com/daianadomsa/autoML-SHADE-DEHB-ILS',
  },
  {
    id: 10,
    title: 'MiniRank',
    description:
      'Aplicație pentru urmărirea pozițiilor în motoarele de căutare (SEO).',
    tags: ['PHP', 'SQLite', 'JavaScript', 'CSS'],
    category: 'Web Development',
    githubLink: 'https://github.com/daianadomsa/minirank',
  },
];
