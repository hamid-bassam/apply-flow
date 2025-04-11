"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Eye, FilePlus2, Pencil, Plus, Trash2 } from "lucide-react"

const sections = [
  { label: "POST", color: "bg-primary/20", description: "Fiche de l'offre à laquelle on postule" },
  { label: "Avatar", color: "bg-primary/20", description: "Profil (CV) adapté à cette offre" },
  { label: "Client", color: "bg-primary/20", description: "Informations sur l'entreprise ou le client final" },
  { label: "Lettre", color: "bg-primary/20", description: "Lettre de motivation personnalisée" },
]

const actions = [
  "Faire une relance",
  "Envoyer un message LinkedIn",
  "Revoir la lettre",
  "Suivre retour RH",
]

export function ApplicationCardV1() {
  const handleSectionClick = (sectionLabel: string) => {
    console.log(`Ouvrir ou modifier : ${sectionLabel}`)
    // Logique de modal ou redirection ici
  }

  return (
    <Card className="bg-card text-card-foreground border border-border shadow-sm w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Suivi candidature</CardTitle>

        <div className="flex items-center gap-1 text-muted-foreground">
          <Button variant="ghost" size="icon" className="h-8 w-8" title="Voir">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" title="Modifier">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-destructive/20 text-destructive"
            title="Supprimer"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Grid sections */}
        <div className="grid grid-cols-2 gap-4">
          {sections.map((section) => (
            <button
              key={section.label}
              onClick={() => handleSectionClick(section.label)}
              className={cn(
                "rounded-xl h-24 flex flex-col items-center justify-center text-sm font-medium text-muted-foreground border border-border hover:bg-muted/30 transition cursor-pointer text-center px-2 focus:outline-none",
                section.color
              )}
            >
              <div className="flex items-center gap-1">
                <FilePlus2 className="h-4 w-4 text-muted-foreground" />
                {section.label}
              </div>
              <span className="text-xs font-normal text-muted-foreground mt-1">
                {section.description}
              </span>
            </button>
          ))}
        </div>

        {/* Action To-Do */}
        <div className="rounded-xl border border-border bg-muted/10 p-4">
          <div className="font-medium text-sm mb-2 text-muted-foreground">Actions</div>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {actions.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 text-xs text-primary hover:underline flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Ajouter une action
          </Button>
        </div>

        {/* Notes */}
        <Textarea
          placeholder="Notes personnelles sur la candidature"
          className="bg-background text-foreground border border-border"
          rows={4}
        />
      </CardContent>
    </Card>
  )
}
