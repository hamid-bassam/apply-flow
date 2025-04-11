// 📁 features/toolkit/components/ChecklistBusinessPanel.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardList, Target, TrendingUp, XCircle } from 'lucide-react';

const checklistItems = [
  {
    id: 'impact',
    label: "Impact quantifiable ou visible",
    description: "Ai-je mis en avant l'effet de mes actions ?",
    icon: TrendingUp,
  },
  {
    id: 'role',
    label: "Rôle personnel clair",
    description: "Est-ce que mon implication directe est lisible ?",
    icon: Target,
  },
  {
    id: 'structure',
    label: "Structure réponse",
    description: "Ma réponse est-elle claire, fluide et logique ?",
    icon: ClipboardList,
  },
  {
    id: 'valeur-ajoutee',
    label: "Valeur ajoutée mise en avant",
    description: "Est-ce que je me distingue ?",
    icon: CheckCircle2,
  },
  {
    id: 'redflag',
    label: "Pas de red flag involontaire",
    description: "Ai-je dit quelque chose qui pourrait inquiéter ?",
    icon: XCircle,
  },
];

export default function ChecklistBusinessPanel() {
  return (
    <motion.div
      className="p-4 space-y-6 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary border border-primary/30">
          <ClipboardList className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Checklist Business</h2>
      </motion.div>

      <div className="grid gap-3 auto-rows-fr grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {checklistItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative group bg-transparent"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -1,
              backgroundColor: 'rgba(255,255,255,0.02)',
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 18,
              },
            }}
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none rounded-lg
              bg-[radial-gradient(ellipse_25%_25%_at_50%_50%,var(--tw-gradient-from),transparent)]
              from-primary/40
              dark:bg-[radial-gradient(ellipse_30%_30%_at_50%_50%,rgba(200,100,200,0.4),rgba(0,0,0,0.9))]
              transition-opacity duration-300 opacity-40 group-hover:opacity-75"
            />
            <button
              className="w-full h-full relative z-10 hover:bg-primary/20 dark:hover:bg-primary/10 transition-colors border border-border rounded-lg p-3 flex flex-col items-start justify-start gap-2 shadow-sm text-left"
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug">
                {item.description}
              </p>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}