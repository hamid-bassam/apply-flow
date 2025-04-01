"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Eye, FilePlus2, FileText, Link as LinkIcon, Pencil, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { ActionsChecklist } from "./ActionsCheckList"

const sections = [
  { label: "POST", color: "bg-primary/20", description: "Fiche de l'offre à laquelle on postule" },
  { label: "Avatar", color: "bg-primary/20", description: "Profil (CV) adapté à cette offre" },
  { label: "Client", color: "bg-primary/20", description: "Informations sur l'entreprise ou le client final" },
  { label: "Lettre", color: "bg-primary/20", description: "Lettre de motivation personnalisée" },
]



export function ApplicationCardV2() {
  const [openPostModal, setOpenPostModal] = useState(false)
  const [openAvatarModal, setOpenAvatarModal] = useState(false)

  const [postLink, setPostLink] = useState("")
  const [postText, setPostText] = useState("")
  const [postFile, setPostFile] = useState<File | null>(null)

  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!avatarFile) return

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        setAvatarPreviewUrl(reader.result)
      }
    }
    reader.readAsDataURL(avatarFile)
  }, [avatarFile])

  const handleSectionClick = (sectionLabel: string) => {
    if (sectionLabel === "POST") {
      setOpenPostModal(true)
    } else if (sectionLabel === "Avatar") {
      setOpenAvatarModal(true)
    } else {
      console.log(`Ouvrir ou modifier : ${sectionLabel}`)
    }
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
        <div className="grid grid-cols-2 gap-4">
          {sections.map((section) => (
            <button
              key={section.label}
              onClick={() => handleSectionClick(section.label)}
              className={cn(
                "rounded-xl  relative overflow-hidden flex items-center justify-center text-sm font-medium text-muted-foreground border border-border hover:bg-muted/30 transition cursor-pointer text-center px-2 py-3 focus:outline-none",
                section.color
              )}
            >
              {section.label === "Avatar" && avatarFile && avatarPreviewUrl ? (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <span className="absolute bottom-2 left-2 text-xs text-muted-foreground">
                    {avatarFile.name}
                  </span>
                </div>
              ) : (
                <div className="z-10 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <FilePlus2 className="h-4 w-4 text-muted-foreground" />
                    {section.label}
                  </div>
                  <span className="text-xs font-normal text-muted-foreground mt-1">
                    {section.description}
                  </span>

                  {section.label === "POST" && (
                    <div className="mt-2 space-y-1 text-xs text-left w-full text-muted-foreground z-10">
                      {postLink && (
                        <div className="flex items-center gap-1">
                          <LinkIcon className="h-3 w-3" />
                          <a href={postLink} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                            Voir le lien
                          </a>
                        </div>
                      )}
                      {postText && <div className="line-clamp-2 text-muted-foreground">📝 {postText}</div>}
                      {postFile && <div className="text-muted-foreground">📎 {postFile.name}</div>}
                    </div>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* <div className="rounded-xl border border-border bg-muted/10 p-4">
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
        </div> */}

        <ActionsChecklist />

        <Textarea
          placeholder="Notes personnelles sur la candidature"
          className="bg-background text-foreground border border-border"
          rows={4}
        />
      </CardContent>

      <Dialog open={openPostModal} onOpenChange={setOpenPostModal}>
        <DialogContent className="sm:max-w-md space-y-4">
          <DialogHeader>
            <DialogTitle>Contenu fiche de poste</DialogTitle>
          </DialogHeader>

          <div className="space-y-2">
            <label className="text-sm font-medium">Lien vers l offre</label>
            <Input
              type="url"
              placeholder="https://..."
              value={postLink}
              onChange={(e) => setPostLink(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Résumé ou contenu texte</label>
            <Textarea
              placeholder="Résumé ou points clés..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Uploader un fichier</label>
            <Input
              type="file"
              accept=".pdf,.png,.jpg"
              onChange={(e) => setPostFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="flex justify-end">
            <Button variant="secondary" onClick={() => setOpenPostModal(false)}>
              Enregistrer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openAvatarModal} onOpenChange={setOpenAvatarModal}>
        <DialogContent className="sm:max-w-md space-y-4">
          <DialogHeader>
            <DialogTitle>Ajouter un CV adapté</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <label className="text-sm font-medium">Uploader le fichier PDF</label>
            <Input
              type="file"
              accept=".pdf"
              onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
            />
          </div>
          <div className="flex justify-end">
            <Button variant="secondary" onClick={() => setOpenAvatarModal(false)}>
              Enregistrer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
