/* eslint-disable @typescript-eslint/no-unused-vars */

import { ResizablePanel } from "@/components/ui/resizable";
import { Bookmark, Copy, ThumbsDown, ThumbsUp, Timer, Zap } from 'lucide-react';
import { useState } from 'react';

export type ToolkitPanelProps = {
  test?: string;
};

const quickActions = [
  { icon: Timer, label: "Timer", action: "00:00" },
  { icon: ThumbsUp, label: "Point Fort", count: 0 },
  { icon: ThumbsDown, label: "Point Faible", count: 0 },
  { icon: Bookmark, label: "Marquer", active: false },
  { icon: Copy, label: "Copier Notes", action: "copy" },
];


export const ToolkitPanel = (props: ToolkitPanelProps) => {
  const [quickActionCounts, setQuickActionCounts] = useState({ "Point Fort": 0, "Point Faible": 0 });
  const [timer, setTimer] = useState("00:00");
  return (
    <div className="h-full p-4 rounded-lg  ">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Quick Actions</h2>
        </div>

        <div className="space-y-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="w-full p-3 flex items-center justify-between rounded-lg bg-primary/20 hover:bg-primary/50 transition-colors"
              onClick={() => {
                if (action.label === "Point Fort" || action.label === "Point Faible") {
                  setQuickActionCounts(prev => ({
                    ...prev,
                    [action.label as keyof typeof quickActionCounts]: prev[action.label as keyof typeof quickActionCounts] + 1
                  }));
                }
              }}
            >
              <div className="flex items-center gap-3">
                <action.icon className="w-4 h-4" />
                <span className="text-sm">{action.label}</span>
              </div>
              {(action.label === "Point Fort" || action.label === "Point Faible") && (
                <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                  {quickActionCounts[action.label]}
                </span>
              )}
              {action.label === "Timer" && (
                <span className="text-xs font-mono">{timer}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};