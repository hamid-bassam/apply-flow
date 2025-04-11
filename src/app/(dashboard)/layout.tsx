
import { ReactNode } from "react";
import { AppHeader } from "../_components/header/AppHeader";
import { SideMenu } from "../_components/naviation-menu/SideMenu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-primary/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/*  */}
      {/* <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" /> */}
      {/* bg-muted/40 */}
      {/* bg-background text-foreground */}
      <SideMenu />
      <div className="flex flex-col flex-grow sm:pl-14   ">
        {/* sm:py-4  sm:pt-2 sm:gap-4 */}
        <AppHeader />
        <main className="flex flex-col flex-grow">{children}</main>
        {/* <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground">
          <div className="p-6 rounded-lg border border-border bg-card text-card-foreground shadow">
            🎉 Test dark mode with tokens
          </div>

          <div className="p-4 bg-white text-black dark:bg-black dark:text-white rounded">
            ✅ Hardcoded dark mode (sanity check)
          </div>
        </div> */}
      </div >
    </div >

  )
}