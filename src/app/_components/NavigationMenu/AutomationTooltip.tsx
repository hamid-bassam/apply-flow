import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Send } from 'lucide-react';
import Link from 'next/link';
export const AutomationTooltip = () => {

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="/dashboard/automation"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary   md:h-8 md:w-8"
        >
          <Send className="h-5 w-5" />
          <span className="sr-only">Automation</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Automation</TooltipContent>
    </Tooltip>
  );
};