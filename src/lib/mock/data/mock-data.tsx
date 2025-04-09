import { Bookmark, Brain, Copy, HelpCircle, Key, MessageSquare, ThumbsDown, ThumbsUp, Timer, UserCircle } from "lucide-react";
export const sections = {
  qa: {
    title: 'Q&A',
    icon: MessageSquare,
    content: [
      { q: 'Peux-tu te présenter ?', a: "Je suis développeur fullstack spécialisé en JavaScript/TypeScript avec 5 années d'expérience, principalement sur des architectures React et Node.js. J'ai travaillé dans des contextes startup et scale-up, ce qui m'a permis de m'adapter à des environnements en constante évolution." },
      { q: "Pourquoi postules-tu chez nous ?", a: "Parce que vous travaillez sur des sujets d’impact social fort avec une vraie exigence tech. J'apprécie aussi votre stack moderne et votre focus produit utilisateur." },
      { q: "Quel a été ton plus grand défi technique ?", a: "J’ai dirigé la migration d’un monolithe PHP vers une architecture microservices, avec une scalabilité horizontale via Kubernetes. Cela a nécessité coordination d’équipe, mise en place d’un CI/CD avancé, et refonte progressive sans downtime." },

      { q: "Pourquoi postules-tu chez nous ?", a: "Parce que vous travaillez sur des sujets d’impact social fort avec une vraie exigence tech. J'apprécie aussi votre stack moderne et votre focus produit utilisateur." },
      { q: "Quel a été ton plus grand défi technique ?", a: "J’ai dirigé la migration d’un monolithe PHP vers une architecture microservices, avec une scalabilité horizontale via Kubernetes. Cela a nécessité coordination d’équipe, mise en place d’un CI/CD avancé, et refonte progressive sans downtime." },
    ],
  },
  script: {
    title: 'Script',
    icon: Brain,
    content: [
      '✅ Ouverture (30s) : Bonjour, merci pour cet échange. Je suis ravi d’être là.',
      "🚀 Présentation synthétique : Je suis développeur fullstack JS depuis 5 ans, j’ai travaillé dans 3 contextes différents allant de la startup à l’ETI. J’ai une appétence pour l’architecture, le produit et le mentoring.",
      "🎯 Exemples concrets : Migration monolithe > microservices, mise en place de tests E2E, coaching de juniors, amélioration de la CI.",
      "🔁 Conclusion / Questions / Disponibilité : Je suis ouvert à vos questions et disponible rapidement.",
    ],
  },
  keywords: {
    title: 'Mots-clés',
    icon: Key,
    content: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Prisma',
      'CI/CD',
      'Clean Architecture',
      'Next.js',
      'Docker',
      'AWS',
    ],
  },
  recruiter: {
    title: 'Infos Recruteur',
    icon: UserCircle,
    content: {
      name: 'Alex Dupont',
      role: 'Engineering Manager',
      company: 'Doctolib',
    },
  },
  questions: {
    title: 'Questions à poser',
    icon: HelpCircle,
    content: [
      "Comment votre équipe gère-t-elle la dette technique ?",
      "Quelles sont les perspectives d’évolution pour ce poste ?",
      "Comment s’articule la collaboration entre produit, design et tech chez vous ?",
      "Avez-vous des rituels d’équipe ou du temps dédié à la veille ?",
      "Y a-t-il des challenges techniques en cours (scalabilité, refonte...) ?",
      "Comment votre équipe gère-t-elle la dette technique ?",
      "Quelles sont les perspectives d’évolution pour ce poste ?",
      "Comment s’articule la collaboration entre produit, design et tech chez vous ?",
      "Avez-vous des rituels d’équipe ou du temps dédié à la veille ?",
      "Y a-t-il des challenges techniques en cours (scalabilité, refonte...) ?",
    ],
  },
} as const;

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