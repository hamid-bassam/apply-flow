import { Bookmark, Brain, Copy, HelpCircle, Key, MessageSquare, ThumbsDown, ThumbsUp, Timer, UserCircle } from "lucide-react";

export const sections = {
  qa: {
    title: 'Q&A',
    icon: MessageSquare,
    content: [
      { q: 'Parle-moi de toi', a: 'Développeur fullstack passionné avec 5 ans d\'expérience...' },
      { q: 'Pourquoi notre entreprise ?', a: 'Votre focus sur l\'innovation et l\'impact social...' },
      { q: 'Plus grand défi technique ?', a: 'Migration d\'une architecture monolithique vers des microservices...' },
    ]
  },
  script: {
    title: 'Script',
    icon: Brain,
    content: [
      'Introduction concise et impactante en 2-3 phrases',
      'Points clés du parcours professionnel',
      'Réalisations techniques majeures'
    ]
  },
  keywords: {
    title: 'Mots-clés',
    icon: Key,
    content: ['TypeScript', 'React', 'Node.js', 'Architecture', 'CI/CD', 'Cloud Native']
  },
  recruiter: {
    title: 'Infos Recruteur',
    icon: UserCircle,
    content: [{
      name: 'Alex Dupont',
      role: 'Lead Developer',
      company: 'Doctolib'
    }, {
      name: 'Alex Dupont',
      role: 'Lead Developer',
      company: 'Doctolib'
    }]
  },
  questions: {
    title: 'Questions à poser',
    icon: HelpCircle,
    content: [
      'Structure de l\'équipe actuelle ?',
      'Stack technique détaillée ?',
      'Prochaines étapes du recrutement ?'
    ]
  }
};

export const dockItems = [
  { title: "Q&A", icon: <MessageSquare className="h-5 w-5 text-neutral-300" />, href: "#qa" },
  { title: "Script", icon: <Brain className="h-5 w-5 text-neutral-300" />, href: "#script" },
  { title: "Mots-clés", icon: <Key className="h-5 w-5 text-neutral-300" />, href: "#keywords" },
  { title: "Recruteur", icon: <UserCircle className="h-5 w-5 text-neutral-300" />, href: "#recruiter" },
  { title: "Questions", icon: <HelpCircle className="h-5 w-5 text-neutral-300" />, href: "#questions" },
];

export const quickActions = [
  { icon: Timer, label: "Timer", action: "00:00" },
  { icon: ThumbsUp, label: "Point Fort", count: 0 },
  { icon: ThumbsDown, label: "Point Faible", count: 0 },
  { icon: Bookmark, label: "Marquer", active: false },
  { icon: Copy, label: "Copier Notes", action: "copy" },
];


export const mockFrameworks = [
  {
    id: 'star',
    name: 'STAR',
    icon: '⭐️',
    description: 'Situation, Task, Action, Result',
    used: false,
    saved: false,
    steps: [
      { title: 'Situation', placeholder: 'Décrivez le contexte...', value: '' },
      { title: 'Task', placeholder: 'Quel était ton rôle / objectif ?', value: '' },
      { title: 'Action', placeholder: 'Qu’as-tu fait concrètement ?', value: '' },
      { title: 'Result', placeholder: 'Quel a été le résultat mesurable ?', value: '' },
    ],
  },
  {
    id: 'soar',
    name: 'SOAR',
    icon: '🦅',
    description: 'Situation, Obstacle, Action, Result',
    used: false,
    saved: false,
    steps: [
      { title: 'Situation', placeholder: 'Quel était le contexte ?', value: '' },
      { title: 'Obstacle', placeholder: 'Quel était le blocage rencontré ?', value: '' },
      { title: 'Action', placeholder: 'Quelle a été ta solution ?', value: '' },
      { title: 'Result', placeholder: 'Quel a été l’impact positif ?', value: '' },
    ],
  },
  {
    id: 'grow',
    name: 'GROW',
    icon: '🌱',
    description: 'Goal, Reality, Options, Will',
    used: false,
    saved: false,
    steps: [
      { title: 'Goal', placeholder: 'Quel était l’objectif à atteindre ?', value: '' },
      { title: 'Reality', placeholder: 'Quel était le point de départ ?', value: '' },
      { title: 'Options', placeholder: 'Quelles solutions envisagées ?', value: '' },
      { title: 'Will', placeholder: 'Qu’as-tu mis en place ?', value: '' },
    ],
  },
];