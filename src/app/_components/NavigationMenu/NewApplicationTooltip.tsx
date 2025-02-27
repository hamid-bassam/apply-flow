import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FilePlus } from 'lucide-react';
import Link from 'next/link';
export const NewApplicationTooltip = () => {

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="/dashboard/new-application"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary  md:h-8 md:w-8"
        >
          <FilePlus className="h-5 w-5" />
          <span className="sr-only">New Application</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">New Application</TooltipContent>
    </Tooltip>
  );
};