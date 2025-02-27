"use client"
import logo from '@/assets/applyFlowLogo.png';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BarChart, FilePlus, FileText, Home, Mic, PanelLeft, Send, Settings } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const BurgerMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const handleLinkTouch = (e: React.TouchEvent, path: string) => {
    setIsSheetOpen(false); // Fermer le Sheet
    router.push(path); // Rediriger vers le chemin souhaité
  };
  return (


    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>


      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">

          <Link
            href="/dashboard"
            className="w-full shrink-0 flex items-center gap-2 rounded-full  text-lg font-semibold text-secondary md:text-base"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard')}
          >
            <Image src={logo.src} className=" transition-all group-hover:scale-110 " alt="LifeChanger" width={40}
              height={40} />
            APPLYFLOW
          </Link >
          <Link
            href="/dashboard"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard')}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/new-application"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/notes')}
          >
            <FilePlus className="h-5 w-5" />
            New Application
          </Link>
          <Link
            href="/dashboard/cv-builder"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/cv-builder')}
          >
            <FileText className="h-5 w-5" />
            CV Builder
          </Link>

          <Link
            href="/dashboard/automation"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/automation')}
          >
            <Send className="h-5 w-5" />
            Automation
          </Link>
          <Link
            href="/dashboard/applications"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/applications')}
          >
            <BarChart className="h-5 w-5" />
            Applications
          </Link>
          <Link
            href="/dashboard/interview-prep"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/interview-prep')}
          >
            <Mic className="h-5 w-5" />
            Interview Preparation
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-4 px-2.5  hover:text-foreground"
            onTouchEnd={(e) => handleLinkTouch(e, '/dashboard/settings')}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};