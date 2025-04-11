/* eslint-disable @typescript-eslint/no-unused-expressions */
// 📁 features/toolkit/components/ChecklistBusinessPanel.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRightCircle, CheckSquare, MessageSquare, Pencil, Trash2 } from 'lucide-react';
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
  const [comments, setComments] = useState<Record<string, string[]>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState<Record<string, number | null>>({});
  const [showInput, setShowInput] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleInput = (id: string) => {
    setShowInput((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDraftChange = (id: string, value: string) => {
    setDrafts((prev) => ({ ...prev, [id]: value }));
  };

  const submitComment = (id: string) => {
    const comment = drafts[id]?.trim();
    if (!comment) return;
    setComments((prev) => ({ ...prev, [id]: [...(prev[id] || []), comment] }));
    setDrafts((prev) => ({ ...prev, [id]: '' }));
    setShowInput((prev) => ({ ...prev, [id]: false }));
  };

  const deleteComment = (id: string, index: number) => {
    setComments((prev) => ({
      ...prev,
      [id]: prev[id]?.filter((_, i) => i !== index) || []
    }));
  };

  const startEdit = (id: string, index: number) => {
    setEditing((prev) => ({ ...prev, [id]: index }));
    setDrafts((prev) => ({ ...prev, [id]: comments[id]?.[index] || '' }));
    setShowInput((prev) => ({ ...prev, [id]: true }));
  };

  const saveEdit = (id: string) => {
    const updated = drafts[id]?.trim();
    if (updated && editing[id] !== null) {
      setComments((prev) => {
        const newComments = [...(prev[id] || [])];
        newComments[editing[id]!] = updated;
        return { ...prev, [id]: newComments };
      });
      setEditing((prev) => ({ ...prev, [id]: null }));
      setDrafts((prev) => ({ ...prev, [id]: '' }));
      setShowInput((prev) => ({ ...prev, [id]: false }));
    }
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
              transition: { type: 'spring', stiffness: 180, damping: 18 },
            }}
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none rounded-lg bg-[radial-gradient(ellipse_25%_25%_at_50%_50%,var(--tw-gradient-from),transparent)] from-primary/40 dark:bg-[radial-gradient(ellipse_30%_30%_at_50%_50%,rgba(200,100,200,0.4),rgba(0,0,0,0.9))] transition-opacity duration-300 opacity-40 group-hover:opacity-100"
            />

            <div className="w-full h-full relative z-10 hover:bg-primary/20 dark:hover:bg-info/5 transition-colors border border-border rounded-lg p-3 flex flex-col items-start justify-start gap-3 shadow-sm text-left">
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

              {comments[item.id]?.map((comment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-muted-foreground flex items-start justify-between gap-2 w-full"
                >
                  <span className="whitespace-pre-wrap break-words flex-1 min-w-0 ">
                    {comment}
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={() => startEdit(item.id, index)} className="hover:text-primary">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => deleteComment(item.id, index)} className="hover:text-destructive">
                      <span className="sr-only">Delete comment</span>
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 w-full">
                {showInput[item.id] ? (
                  <>
                    <Input
                      placeholder="Ajouter une remarque..."
                      value={drafts[item.id] || ''}
                      onChange={(e) => handleDraftChange(item.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          editing[item.id] !== null ? saveEdit(item.id) : submitComment(item.id);
                        }
                      }}
                      className="text-sm flex-1"
                      autoFocus
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        editing[item.id] !== null ? saveEdit(item.id) : submitComment(item.id);
                      }}
                      className="text-primary hover:text-primary/80 rounded-full"
                    >
                      <ArrowRightCircle className="w-4 h-4" />
                    </Button>
                  </>
                ) : (

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary rounded-full ml-auto"
                    onClick={() => toggleInput(item.id)}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>

                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}