import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { BarChart } from 'lucide-react';
import Link from 'next/link';
export const ApplicationsTooltip = () => {

  return (

    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary  md:h-8 md:w-8"
        >
          <BarChart className="h-5 w-5" />
          <span className="sr-only">Applications</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Applications</TooltipContent>
    </Tooltip>
  );
};