import { create } from 'zustand';

interface MainPanelState {
  activeSectionKey: string;
  isSearchOpen: boolean;
  setActiveSectionKey: (key: string) => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  setIsSearchOpen: (isOpen: boolean) => void;
}

export const useMainPanelStore = create<MainPanelState>((set) => ({
  activeSectionKey: 'qa',
  isSearchOpen: false,
  setActiveSectionKey: (key) => set({ activeSectionKey: key }),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen })
}));
