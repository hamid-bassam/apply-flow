
import { ReactNode } from "react";
import { AppHeader } from "../_components/Header/AppHeader";
import { SideMenu } from "../_components/NavigationMenu/SideMenu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      {/* bg-muted/40 */}
      {/* bg-background text-foreground */}
      <SideMenu />
      <div className="flex flex-col flex-grow sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex flex-col flex-grow pt-2 ">{children}</main>
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