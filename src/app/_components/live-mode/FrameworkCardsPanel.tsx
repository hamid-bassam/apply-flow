'use client'

import { Card, CardContent } from '@/components/ui/card';
import { useFrameworkStore } from '@/features/live-session/store/toolkit-panel/FrameworkStore';
import { cn } from '@/lib/utils';
import { BookOpenCheck, CheckCircle } from 'lucide-react';

export const FrameworkCardsPanel = () => {
  const frameworks = useFrameworkStore((s) => s.frameworks);
  const active = useFrameworkStore((s) => s.active);
  const setActive = useFrameworkStore((s) => s.setActive);

  return (
    <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-8rem)] px-2 py-4">
      {Object.values(frameworks).map((fw) => (
        <Card
          key={fw.id}
          onClick={() => setActive(fw.id)}
          className={cn(
            'cursor-pointer transition hover:shadow-md border-muted bg-card hover:bg-muted/30',
            fw.id === active?.id && 'border-primary bg-muted'
          )}
        >
          <CardContent className="p-4 flex items-center gap-4">
            {/* <span className="text-xl">{fw.icon}</span> */}
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">{fw.name}</h3>
              <p className="text-xs text-muted-foreground">{fw.description}</p>
            </div>
            {fw.used ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <BookOpenCheck className="w-4 h-4 text-muted-foreground" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
