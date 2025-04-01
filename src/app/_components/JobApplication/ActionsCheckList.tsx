"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"
import { useState } from "react"

export function ActionsChecklist() {
  const [actions, setActions] = useState([
    { text: "Faire une relance", done: false },
    { text: "Envoyer un message LinkedIn", done: false },
    { text: "Revoir la lettre", done: false },
    { text: "Suivre retour RH", done: false },
  ])

  const toggleAction = (index: number, checked: boolean) => {
    setActions((prev) => {
      const updated = [...prev]
      updated[index].done = checked
      return updated
    })
  }

  const addAction = () => {
    const text = prompt("Nouvelle action à ajouter ?")
    if (text) {
      setActions((prev) => [...prev, { text, done: false }])
    }
  }

  return (
    <div className="rounded-xl border border-border bg-muted/10 p-4">
      <div className="font-medium text-sm mb-2 text-muted-foreground">Actions</div>

      <ul className="space-y-2">
        {actions.map((action, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox checked={action.done} onCheckedChange={(checked) => toggleAction(idx, checked as boolean)} />
            <span className={action.done ? "line-through opacity-60" : ""}>{action.text}</span>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        size="sm"
        onClick={addAction}
        className="mt-3 text-xs text-primary hover:underline flex items-center gap-1"
      >
        <Plus className="w-3 h-3" /> Ajouter une action
      </Button>
    </div>
  )
}
