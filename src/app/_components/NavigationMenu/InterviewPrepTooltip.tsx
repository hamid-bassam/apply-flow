import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Mic } from 'lucide-react';
import Link from 'next/link';
export const InterviewPrepTooltip = () => {

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="/dashboard/interview-prep"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary  md:h-8 md:w-8"
        >
          <Mic className="h-5 w-5" />
          <span className="sr-only">Interview Preparation</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Interview Preparation</TooltipContent>
    </Tooltip>
  );
};