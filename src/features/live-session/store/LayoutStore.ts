/* eslint-disable @typescript-eslint/no-unused-vars */
// 📁 /features/toolkit/store/layoutStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Type des sections pouvant apparaître dans l'interface (toolkit, main, notes)
export type SectionType = 'toolkit' | 'main' | 'notes';

// Représente une instance unique de panel dans l'UI
export type PanelInstance = {
  id: string;
  type: SectionType;
  defaultSize?: number; // Taille par défaut du panel
  minSize?: number; // Taille minimale du panel
  className?: string; // Classe CSS personnalisée pour le panel
};

// Typage global du store Zustand pour la gestion du layout dynamique
interface LayoutStore {
  layout: PanelInstance[];
  addPanel: (type: SectionType) => void;
  movePanel: (id: string, toIndex: number) => void;
  removePanel: (id: string) => void;
  setLayout: (layout: PanelInstance[]) => void;
  resetLayout: () => void;
}

const DEFAULT_LAYOUT: PanelInstance[] = [
  { id: 'panel-1', type: 'toolkit', defaultSize: 20, minSize: 15 },
  { id: 'panel-2', type: 'main', defaultSize: 50, minSize: 20 },
  { id: 'panel-3', type: 'notes', defaultSize: 30, minSize: 30 },
];

export const useLayoutStore = create<LayoutStore>()(
  devtools(
    persist(
      (set, get) => ({
        layout: DEFAULT_LAYOUT,

        addPanel: (type) =>
          set((state) => ({
            layout: [...state.layout, { id: `panel-${state.layout.length + 1}`, type }],
          }), false, 'layout/addPanel'),

        movePanel: (id, toIndex) =>
          set((state) => {
            const current = [...state.layout];
            const index = current.findIndex((p) => p.id === id);
            if (index === -1) return { layout: current };
            const [panel] = current.splice(index, 1);
            current.splice(toIndex, 0, panel);
            return { layout: current };
          }, false, 'layout/movePanel'),

        removePanel: (id) =>
          set((state) => ({
            layout: state.layout.filter((p) => p.id !== id),
          }), false, 'layout/removePanel'),

        setLayout: (layout) => set({ layout }, false, 'layout/setLayout'),

        resetLayout: () => set({ layout: DEFAULT_LAYOUT }, false, 'layout/resetLayout')
      }),
      {
        name: 'layout-storage', // clé localStorage
        version: 1,
      }
    ),
    { name: 'LayoutStore' }
  )
);
