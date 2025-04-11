// 📁 features/toolkit/components/ChecklistBusinessPanel.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckSquare, MessageSquareMore } from 'lucide-react';
import { useState } from 'react';

const checklistItems = [
  {
    id: 'clarify-role',
    label: 'Ai-je bien compris le rôle visé et ses enjeux ?',
  },
  {
    id: 'company-values',
    label: "Suis-je aligné avec les valeurs et la culture de l'entreprise ?",
  },
  {
    id: 'technical-match',
    label: 'Ma stack correspond-elle aux besoins du poste ?',
  },
  {
    id: 'highlight-impact',
    label: 'Suis-je prêt à démontrer mon impact concret ?',
  },
  {
    id: 'ask-relevant',
    label: 'Ai-je préparé des questions pertinentes à poser ?',
  },
];

export default function ChecklistBusinessPanel() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [comments, setComments] = useState<Record<string, string>>({});

  const toggleCheck = (id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const updateComment = (id: string, value: string) => {
    setComments((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <motion.div
      className="p-4 space-y-6 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <div className="flex flex-shrink-0 items-center justify-center w-7 h-7 shadow-sm shadow-black dark:shadow-white/50 rounded-full bg-primary/10 text-primary border border-primary/30">
          <CheckSquare className='w-4 h-4' />
        </div>
        <h2 className="text-lg font-semibold text-foreground">
          Checklist Business
        </h2>
      </motion.div>


      <div className="grid gap-3 auto-rows-fr grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {/* space-y-4 */}

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
              transition-opacity duration-300 opacity-40 group-hover:opacity-100"
            />
            {/* relative z-10 border border-border rounded-lg p-4 bg-card hover:bg-muted/30 transition-colors */}
            <div className="w-full h-full relative z-10 hover:bg-primary/20 dark:hover:bg-info/5 transition-colors border border-border rounded-lg p-3 flex flex-col items-start justify-start gap-2 shadow-sm text-left">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checks[item.id]}
                  onChange={() => toggleCheck(item.id)}
                  className="mt-1 accent-primary w-4 h-4"
                />
                <span className="text-sm text-foreground leading-snug">
                  {item.label}
                </span>
              </label>

              <div className="mt-2 flex items-start gap-2">
                <MessageSquareMore className="w-4 h-4 text-muted-foreground mt-1" />
                <textarea
                  placeholder="Note personnelle ou point à développer..."
                  value={comments[item.id] || ''}
                  onChange={(e) => updateComment(item.id, e.target.value)}
                  className="w-full text-sm bg-muted/20 p-2 rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  rows={2}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}