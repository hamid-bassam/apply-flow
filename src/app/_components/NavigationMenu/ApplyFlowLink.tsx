
import logo from '@/assets/applyFlowLogo.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
export const ApplyFlowLink = ({ className, children }: { className: string, children?: React.ReactNode }) => {

  return (
    <Link
      href="/dashboard"
      className={cn("group flex  flex-start shrink-0 items-center  h-16 w-16 text-base", className)}
    >
      <Image src={logo.src} className=" transition-all group-hover:scale-110 " alt="ApplyFlow" width={40}
        height={40} />
      {children ?? <span className="sr-only">Life Changer</span>}
    </Link >
  );
};