import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FileText } from 'lucide-react';
import Link from 'next/link';
export const CVBuilderTooltip = () => {

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="/dashboard/cv-builder"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary   md:h-8 md:w-8"
        >
          <FileText className="h-5 w-5" />
          <span className="sr-only">CV Builder</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">CV Builder</TooltipContent>
    </Tooltip>
  );
};