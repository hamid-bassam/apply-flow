import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Eye, Pencil, Trash2 } from "lucide-react"

const tags = ["TT", "free", "TJM", "XP", "Team", "Start", "city", "proc"]
const skills = [
  { name: "React", selected: true },
  { name: "Node.js", selected: true },
  { name: "Tailwind", selected: true },
  { name: "TypeScript", selected: false },
  { name: "Prisma", selected: false },
  { name: "Next.js", selected: false },
  { name: "SQL", selected: false },
  { name: "AWS", selected: false },
]

export function OfferCard() {
  return (
    <Card className="bg-card text-card-foreground border border-border shadow-sm">
      <CardHeader className="flex flex-row items-center  justify-between">
        <CardTitle className="text-lg">Titre du post</CardTitle>

        {/* Actions */}
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
        {/* Description */}
        <div className="text-sm text-muted-foreground">
          Courte description de la mission, son objectif, et l’environnement.
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-md px-3">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              className={cn(
                "rounded-md px-3 transition-colors",
                skill.selected
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {skill.name}
            </Badge>
          ))}
        </div>

        {/* Lien de l'offre */}
        <Button variant="outline" className="w-full">
          Lien de l’offre
        </Button>

        {/* Contacts */}
        <Button variant="ghost" className="w-full border border-border">
          Contacts
        </Button>

        {/* Notes perso */}
        <Textarea
          placeholder="Notes personnelles"
          className="bg-background text-foreground border border-border"
          rows={4}
        />
      </CardContent>
    </Card>
  )
}
