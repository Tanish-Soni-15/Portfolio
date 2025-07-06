import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
export const SkillsData=[
  {
    category: 'Frontend Development',
    icon: Globe, // Keep this if you're using lucide-react or similar icon library
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'Bootstrap (Basic)'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Multer'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'DevOps / Tools',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'C', 'C++', 'Java (Basics)'],
  },
  {
    category: 'Design / UI',
    icon: Palette,
    skills: ['Responsive Design', 'Figma (Basic)', 'UI Components'],
  },
]
