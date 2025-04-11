
import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { AvatarMenu } from "./AvatarMenu";
import { BreadCrumbNavigation } from "./BreadCrumbNavigation";
import { BurgerMenu } from "./BurgerMenu";
import { SearchBar } from "./SearchBar";
export const AppHeader = () => {
  return (
    <header className="sticky top-0 z-30  flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto  sm:bg-transparent sm:px-6 py-2 border border-border boder-b-2">
      {/* border-b  sm:border-0*/}
      <BurgerMenu />
      <BreadCrumbNavigation />
      <SearchBar />
      <ThemeToggle />
      <AvatarMenu />
    </header>
  )
    ;
};

