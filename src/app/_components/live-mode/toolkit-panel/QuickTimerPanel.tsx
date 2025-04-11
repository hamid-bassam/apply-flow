'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function QuickTimerPanel() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s: number) => {
    const mins = String(Math.floor(s / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <motion.div
      className="p-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2
        className="text-lg font-semibold text-foreground flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        🕒 Timer en live
      </motion.h2>

      <motion.div
        className="text-5xl font-mono text-primary tracking-wide"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {formatTime(seconds)}
      </motion.div>

      <div className="flex items-center gap-4">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsRunning((r) => !r)}
          className="transition hover:scale-110"
        >
          {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setSeconds(0)}
          disabled={!seconds}
          className="hover:text-destructive"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
