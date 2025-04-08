/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { CommandDialog, CommandInput, CommandList } from '@/components/ui/command';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from '@/lib/utils';

import { Bookmark, Brain, Copy, Eye, HelpCircle, Key, MessageSquare, Search, SquareSplitHorizontal, ThumbsDown, ThumbsUp, Timer, UserCircle, Zap } from 'lucide-react';
import { useState } from 'react';
import { FloatingDock } from '../../../components/ui/floating-dock';
import { Switch } from '../../../components/ui/switch';

const sections = {
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
    content: {
      name: 'Alex Dupont',
      role: 'Lead Developer',
      company: 'Doctolib'
    }
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

const dockItems = [
  { title: "Q&A", icon: <MessageSquare className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#qa" },
  { title: "Script", icon: <Brain className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#script" },
  { title: "Mots-clés", icon: <Key className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#keywords" },
  { title: "Recruteur", icon: <UserCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#recruiter" },
  { title: "Questions", icon: <HelpCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#questions" },
];

const quickActions = [
  { icon: Timer, label: "Timer", action: "00:00" },
  { icon: ThumbsUp, label: "Point Fort", count: 0 },
  { icon: ThumbsDown, label: "Point Faible", count: 0 },
  { icon: Bookmark, label: "Marquer", active: false },
  { icon: Copy, label: "Copier Notes", action: "copy" },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('qa');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isRightAligned, setIsRightAligned] = useState(false);
  const [quickActionCounts, setQuickActionCounts] = useState({ "Point Fort": 0, "Point Faible": 0 });
  const [timer, setTimer] = useState("00:00");

  return (
    <div className="flex flex-col flex-1  ">


      <ResizablePanelGroup
        direction="horizontal"
        className={cn(
          isRightAligned && "flex-row-reverse", "flex-1 h-full"
        )}
      >
        {/* Quick Actions Panel */}
        <ResizablePanel defaultSize={20} minSize={15} className='pt-3' >
          <div className="h-full p-4 rounded-lg  ">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Quick Actions</h2>
              </div>

              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full p-3 flex items-center justify-between rounded-lg bg-primary/20 hover:bg-primary/50 transition-colors"
                    onClick={() => {
                      if (action.label === "Point Fort" || action.label === "Point Faible") {
                        setQuickActionCounts(prev => ({
                          ...prev,
                          [action.label as keyof typeof quickActionCounts]: prev[action.label as keyof typeof quickActionCounts] + 1
                        }));
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="w-4 h-4" />
                      <span className="text-sm">{action.label}</span>
                    </div>
                    {(action.label === "Point Fort" || action.label === "Point Faible") && (
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                        {quickActionCounts[action.label]}
                      </span>
                    )}
                    {action.label === "Timer" && (
                      <span className="text-xs font-mono">{timer}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main Content */}
        <ResizablePanel defaultSize={50} minSize={20}>
          <main className="h-full p-6 px-2 overflow-y-auto bg-card  border-x rounded border-primary/50 space-y-[18px]">
            <div className="flex  items-center justify-between gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex min-w-8 items-center flex-grow  p-2 text-xs text-muted-foreground border rounded-full hover:bg-primary/50 transition overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <Search className="flex-shrink-0 w-4 h-4 mr-2 " />
                {/* hidden if size is small */}
                Rechercher... (Ctrl+K)
              </button>

              <div className="flex-shrink-0 flex-1 max-w-fit">
                <FloatingDock items={dockItems} desktopClassName='px-2' />
              </div>
            </div>



            {/* 
            <div className="flex items-center ">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center w-full p-2 text-sm text-muted-foreground border rounded-full hover:bg-primary/50"
              >
                <Search className="w-4 h-4 mr-2" />
                Rechercher... (Ctrl+K)
              </button>
            </div>
            <div className='w-fit '>

              <FloatingDock items={dockItems} />
            </div> */}

            <div className="space-y-4">
              {activeSection === 'qa' && (
                <div className="space-y-6">
                  {sections.qa.content.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-primary/20">
                      <h3 className="font-medium mb-2">{item.q}</h3>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'script' && (
                <div className="space-y-4">
                  {sections.script.content.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-primary/80">
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'keywords' && (
                <div className="flex flex-wrap gap-2">
                  {sections.keywords.content.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {activeSection === 'recruiter' && (
                <div className="p-6 rounded-lg bg-primary/20">
                  <h3 className="text-lg font-medium mb-2">{sections.recruiter.content.name}</h3>
                  <p className="text-sm text-muted-foreground">{sections.recruiter.content.role}</p>
                  <p className="text-sm text-muted-foreground">{sections.recruiter.content.company}</p>
                </div>
              )}

              {activeSection === 'questions' && (
                <div className="space-y-3">
                  {sections.questions.content.map((question, i) => (
                    <div key={i} className="p-4 rounded-lg bg-primary/20">
                      <p className="text-sm">{question}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Notes Section */}
        <ResizablePanel defaultSize={30} minSize={30}>
          <div className="h-full flex flex-col pt-6 ">
            <div className="flex justify-between gap-4 px-4   rounded-t">
              {/* bg-primary/20 shadow   */}
              {/* Floating Dock */}
              <FloatingDock items={dockItems} />
              {/* alignement */}
              <div className="flex  items-center gap-2">
                <div className="flex items-center gap-1">
                  <SquareSplitHorizontal className="h-4 w-4" />
                  {/* <span className="text-sm">Alignement</span> */}
                  <Switch checked={isRightAligned} onCheckedChange={(checked) => setIsRightAligned(checked)} />
                </div>
                {/* focus */}
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <Switch checked={isFocusMode} onCheckedChange={setIsFocusMode} />
                </div>
              </div>
            </div>
            <aside className="h-full p-4 flex flex-col ">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Prends tes notes ici (IA bientôt disponible...)"
                className="w-full flex-grow p-4 bg-primary/20 rounded-lg resize-none text-sm focus:outline-none focus:ring-1 focus:ring-primary "
              />
              <button className="w-full mt-4 p-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Enregistrer les notes
              </button>
            </aside>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Floating Dock */}
      {/* <FloatingDock items={dockItems} /> */}

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Rechercher dans tous les contenus..." />
        <CommandList className="max-h-[300px] overflow-y-auto">
          {/* La logique de recherche sera implémentée ici */}
        </CommandList>
      </CommandDialog>
    </div>
  );
}