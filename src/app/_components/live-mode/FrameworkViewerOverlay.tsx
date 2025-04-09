'use client';
import { useFrameworkStore } from "@/features/live-session/store/toolkit-panel/FrameworkStore";
import { Bookmark, Check, X } from "lucide-react";

export const FrameworkViewerOverlay = () => {
  const { active, isOpen, close, updateStep, toggleSaved, toggleUsed } = useFrameworkStore();

  if (!isOpen || !active) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur bg-background/80 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg w-full max-w-xl border border-border shadow-lg relative p-6 space-y-6 overflow-y-auto max-h-[90vh]">
        <button onClick={close} className="absolute top-2 right-2">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <span className="text-2xl">{active.icon}</span>
          <div>
            <h2 className="text-lg font-bold">{active.name}</h2>
            <p className="text-sm text-muted-foreground">{active.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          {active.steps.map((step, idx) => (
            <div key={idx}>
              <h3 className="font-semibold">{step.title}</h3>
              <textarea
                value={step.value}
                placeholder={step.placeholder}
                onChange={(e) => updateStep(idx, e.target.value)}
                className="w-full mt-1 p-2 text-sm border rounded bg-muted focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <button onClick={toggleUsed} className="text-xs flex items-center gap-1 px-3 py-1 border rounded hover:bg-muted">
            <Check className="w-4 h-4" /> Marquer utilisé
          </button>
          <button onClick={toggleSaved} className="text-xs flex items-center gap-1 px-3 py-1 border rounded hover:bg-muted">
            <Bookmark className="w-4 h-4" /> Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};
