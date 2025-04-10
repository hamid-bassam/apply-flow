/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommandDialog, CommandInput, CommandList } from '@/components/ui/command';
import { Brain, HelpCircle, Key, MessageSquare, Search, UserCircle } from 'lucide-react';

import { useMainPanelStore } from '../../../features/live-session/store/main-panel/MainPanelStore';
import { FloatingStateNav } from './FloatingStateNav';
export type MainPanelProps = {
  main?: string;
};

const dockItems = [
  { title: "Q&A", icon: <MessageSquare className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#qa", _key: 'qa' },
  { title: "Script", icon: <Brain className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#script", _key: 'script' },
  { title: "Mots-clés", icon: <Key className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#keywords", _key: 'keywords' },
  { title: "Recruteur", icon: <UserCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#recruiter", _key: 'recruiter' },
  { title: "Questions", icon: <HelpCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#questions", _key: 'questions' },
];

// 📁 /features/toolkit/mock/sections.ts

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

export type SectionKey = keyof typeof sections;
export const MainPanel = (props: MainPanelProps) => {
  // const [activeSectionKey, setActiveSection] = useState('qa');
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { activeSectionKey, isSearchOpen, setIsSearchOpen, setActiveSectionKey, openSearch, closeSearch, toggleSearch } = useMainPanelStore();

  return (
    <div className="relative bg-card/50 border-x rounded border-primary/50 overflow-y-auto h-full" >
      <div className='sticky top-0' >
        <div className="absolute inset-0 z-[-1] bg-white/90 dark:bg-black blur rounded-t-lg shadow-md border-b border-border" />
        <div className="flex p-2 z-10 top-0 items-center justify-between gap-4 bg-primary/5   " >
          {/* md:backdrop-filter-none  */}
          <button
            onClick={openSearch}
            className="flex min-w-8 items-center flex-grow p-2 text-xs text-muted-foreground border rounded-full hover:bg-card transition overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <Search className="flex-shrink-0 w-4 h-4 mr-2 " />
            {/* hidden if size is small */}
            Rechercher... (Ctrl+K)
          </button>

          <div className="flex-shrink-0 flex-1 max-w-fit">
            <FloatingStateNav items={dockItems} desktopClassName='px-2' />
          </div>
        </div>
      </div>

      <div className='space-y-3 p-3 max-h-[calc(100vh-7.5rem)]'>
        {activeSectionKey === 'qa' && (
          <>
            {sections.qa.content.map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-primary/20">
                <h3 className="font-medium mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </>
        )}

        {activeSectionKey === 'script' && (
          <div className="space-y-4">
            {sections.script.content.map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-primary/80">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        )}

        {activeSectionKey === 'keywords' && (
          <div className="flex flex-wrap gap-2">
            {sections.keywords.content.map((keyword, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-secondary text-sm">
                {keyword}
              </span>
            ))}
          </div>
        )}

        {activeSectionKey === 'recruiter' && (
          <div className="p-6 rounded-lg bg-primary/20">
            <h3 className="text-lg font-medium mb-2">{sections.recruiter.content.name}</h3>
            <p className="text-sm text-muted-foreground">{sections.recruiter.content.role}</p>
            <p className="text-sm text-muted-foreground">{sections.recruiter.content.company}</p>
          </div>
        )}

        {activeSectionKey === 'questions' && (
          <div className="space-y-3">
            {sections.questions.content.map((question, i) => (
              <div key={i} className="p-4 rounded-lg bg-primary/20">
                <p className="text-sm">{question}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} >
        <CommandInput placeholder="Rechercher dans tous les contenus..." />
        <CommandList className="max-h-[300px] overflow-y-auto">
          {/* La logique de recherche sera implémentée ici */}
        </CommandList>
      </CommandDialog >
    </div >
  );
};