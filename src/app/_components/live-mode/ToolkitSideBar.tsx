// ✅ Starter layout for the Live Mode Toolkit (Layout vertical fixe modulaire)
// Stack : React + TailwindCSS + Shadcn UI + Zustand

'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
// import { useToolkitStore } from '@/lib/store/toolkit';
import { cn } from '@/lib/utils';
import { PenToolIcon } from 'lucide-react';

const toolsList = [
  { id: 'checklist', name: 'Checklist', icon: <PenToolIcon size={16} /> },
  { id: 'keywords', name: 'Mots-clés', icon: <PenToolIcon size={16} /> },
  { id: 'flags', name: 'Red Flags', icon: <PenToolIcon size={16} /> },
  { id: 'attitude', name: 'Com/Attitude', icon: <PenToolIcon size={16} /> },
  { id: 'notes', name: 'Notes', icon: <PenToolIcon size={16} /> },
];

export default function ToolkitSidebar() {
  // const { activeTools, toggleTool } = useToolkitStore();

  return (
    <aside className="h-full bg-muted text-muted-foreground border-r border-border p-2 flex flex-col">
      <div className="font-semibold text-sm mb-2 text-foreground">Toolkit</div>
      <ScrollArea className="flex-1 pr-2">
        <div className="flex flex-col gap-2">
          {toolsList.map((tool) => (
            <Tooltip key={tool.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={
                    //activeTools.includes(tool.id) ? 'default' :
                    'ghost'}
                  size="sm"
                  className={cn(
                    'w-full justify-start gap-2 text-sm',
                    //activeTools.includes(tool.id) && 'bg-primary text-primary-foreground'
                  )}
                  onClick={() => { }
                    // toggleTool(tool.id)
                  }
                >
                  {tool.icon}
                  {tool.name}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{tool.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
