// 📁 /features/live-session/store/FrameworkStore.ts
import { create } from 'zustand';

export type FrameworkKey = 'STAR' | 'SOAR' | 'GROW';

export type Step = {
  title: string;
  placeholder: string;
  value: string;
};

export type Framework = {
  id: FrameworkKey;
  name: string;
  description: string;
  steps: Step[];
  used: boolean;
  icon?: string;
  saved?: boolean;
};

type FrameworkStore = {
  frameworks: Record<FrameworkKey, Framework>;
  active: Framework | null;
  isOpen: boolean;
  setActive: (key: FrameworkKey | null) => void;
  updateStep: (index: number, value: string) => void;
  toggleUsed: () => void;
  toggleSaved: () => void;
  close: () => void;
};

export const useFrameworkStore = create<FrameworkStore>((set) => ({
  frameworks: {
    STAR: {
      id: 'STAR',
      name: 'Cadre STAR',
      description: 'Situation, Tâche, Action, Résultat',
      used: false,
      steps: [
        { title: 'Situation', placeholder: 'Quel était le contexte ?', value: '' },
        { title: 'Tâche', placeholder: 'Quel était ton rôle ?', value: '' },
        { title: 'Action', placeholder: 'Qu’as-tu fait concrètement ?', value: '' },
        { title: 'Résultat', placeholder: 'Quels ont été les résultats ?', value: '' },
      ],
    },
    SOAR: {
      id: 'SOAR',
      name: 'Cadre SOAR',
      description: 'Situation, Objectif, Action, Résultat',
      used: false,
      steps: [
        { title: 'Situation', placeholder: 'Décris le contexte', value: '' },
        { title: 'Objectif', placeholder: 'Quel était l’objectif ?', value: '' },
        { title: 'Action', placeholder: 'Que fais-tu ?', value: '' },
        { title: 'Résultat', placeholder: 'Quel résultat obtenu ?', value: '' },
      ],
    },
    GROW: {
      id: 'GROW',
      name: 'Cadre GROW',
      description: 'Goal, Reality, Options, Will',
      used: false,
      steps: [
        { title: 'Goal', placeholder: 'Quel est l’objectif ?', value: '' },
        { title: 'Reality', placeholder: 'Quelle est la situation actuelle ?', value: '' },
        { title: 'Options', placeholder: 'Quelles sont les options ?', value: '' },
        { title: 'Will', placeholder: 'Qu’est-ce que tu choisis ?', value: '' },
      ],
    },
  },
  active: null,
  isOpen: false,
  setActive: (fw) =>
    set((state) => ({
      active: fw ? state.frameworks[fw] : null,
      isOpen: !!fw,
    })),
  close: () => set({ active: null, isOpen: false }),
  updateStep: (index: number, value: string) =>
    set((state) => {
      if (!state.active) return state;
      const steps = [...state.active.steps];
      steps[index] = { ...steps[index], value };
      return { active: { ...state.active, steps } };
    }),
  toggleUsed: () =>
    set((state) => {
      if (!state.active) return state;
      return { active: { ...state.active, used: !state.active.used } };
    }),
  toggleSaved: () =>
    set((state) => {
      if (!state.active) return state;
      return { active: { ...state.active, saved: !state.active.saved } };
    }),

}));
