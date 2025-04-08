/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { CommandDialog, CommandInput, CommandList } from '@/components/ui/command';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from '@/lib/utils';

import { Brain, HelpCircle, Key, MessageSquare, UserCircle } from 'lucide-react';
import { Fragment, useState } from 'react';
import { MainPanel } from '../../_components/live-mode/MainPanel';
import { NotesPanel } from '../../_components/live-mode/NotesPanel';
import { ToolkitPanel } from '../../_components/live-mode/ToolkitPanel';

import { useLayoutStore } from '@/features/live-session/store/LayoutStore';


const dockItems = [
  { title: "Q&A", icon: <MessageSquare className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#qa" },
  { title: "Script", icon: <Brain className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#script" },
  { title: "Mots-clés", icon: <Key className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#keywords" },
  { title: "Recruteur", icon: <UserCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#recruiter" },
  { title: "Questions", icon: <HelpCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#questions" },
];



export default function Page() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const layout = useLayoutStore((s) => s.layout);

  return (
    <div className="flex flex-col flex-1 ">


      <ResizablePanelGroup
        direction="horizontal"
        className={cn(
          "flex-1 h-full"
        )}
      // isRightAligned && "flex-row-reverse", 
      >


        {layout.map((panel, index) => (
          <Fragment key={panel.id}>
            <ResizablePanel defaultSize={panel.defaultSize} minSize={panel.minSize} className={cn(panel.className, "")}>
              {panel.type === 'main' && <MainPanel />}
              {panel.type === 'toolkit' && <ToolkitPanel />}
              {panel.type === 'notes' && <NotesPanel />}
            </ResizablePanel>
            {index !== layout.length - 1 && <ResizableHandle withHandle />}
          </Fragment>

        ))}
      </ResizablePanelGroup>



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