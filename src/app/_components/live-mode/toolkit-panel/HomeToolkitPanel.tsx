// 📁 features/toolkit/components/ToolkitOverviewPanel.tsx
'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Bot, CheckSquare, LayoutDashboard, NotebookPen, Repeat, TimerReset } from 'lucide-react';

const tools = [
  {
    id: 'quick-timer',
    name: 'Timer',
    description: 'Chronomètre intelligent pour rythmer vos réponses.',
    icon: TimerReset,
  },
  {
    id: 'checklist',
    name: 'Checklist stratégique',
    description: 'Gardez en tête vos actions clés.',
    icon: CheckSquare,
  },
  {
    id: 'redflags',
    name: 'Red Flags',
    description: 'Évitez les pièges classiques.',
    icon: AlertTriangle,
  },
  {
    id: 'framework-access',
    name: 'Cadres narratifs',
    description: 'Accès rapide aux structures STAR, SOAR...',
    icon: Repeat,
  },
  {
    id: 'smart-notes',
    name: 'Prise de notes',
    description: 'Consignez avec clarté vos idées en live.',
    icon: NotebookPen,
  },
  {
    id: 'assistant',
    name: 'Assistant IA',
    description: 'Co-pilote pour anticiper, reformuler ou répondre.',
    icon: Bot,
  },
];

export default function ToolkitOverviewPanel() {
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
          <LayoutDashboard className='w-4 h-4 ' />
        </div>
        <h2 className="text-lg font-semibold text-foreground">
          Live Toolkit
        </h2>
      </motion.div>
      <div className="grid gap-3 auto-rows-fr grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
        {tools.map((tool) => (



          <motion.div
            key={tool.id}
            className="relative group bg-transparent "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -2,
              boxShadow: '0 4px 12px rgba(120,119,198,0.15)',
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
                bg-[radial-gradient(ellipse_30%_30%_at_50%_50%,var(--tw-gradient-from),transparent)]
                from-primary/50
                dark:bg-[radial-gradient(ellipse_30%_30%_at_50%_50%,rgba(200,100,200,0.4),rgba(0,0,0,0.9))]
                transition-opacity duration-300 opacity-50 group-hover:opacity-75"
            />


            <button

              className=" w-full h-full relative z-10  hover:bg-primary/30 dark:hover:bg-primary/20 dark:bg-purple-950/10 transition-colors border border-border rounded-lg p-3 flex flex-col items-start justify-start gap-2 shadow-lg shadow-black/20 dark:shadow-sm dark:shadow-white/10 text-left"
            >
              <div className="flex items-center gap-2">
                <tool.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{tool.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug line-clamp-3">
                {tool.description}
              </p>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div >
  );
}


{/* <div className="relative group" key={tool.id}>
            <div className="absolute inset-0 z-0 rounded-lg pointer-events-none 
            bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(120,119,198,0.15),transparent)]
            dark:bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(150,100,220,0.3),rgba(0,0,0,0))]
            transition-all duration-300 opacity-60 group-hover:opacity-90"
            />

            <button
              className="relative z-10 w-full h-full hover:bg-primary/20 dark:hover:bg-primary/10 transition-colors 
            border border-border rounded-lg p-3 flex flex-col items-start justify-start gap-2 shadow-sm text-left
            bg-white/60 dark:bg-background/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <tool.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{tool.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug line-clamp-3">
                {tool.description}
              </p>
            </button>
          </div> */}