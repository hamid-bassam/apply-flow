import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Eye, Pencil, Trash2 } from "lucide-react"

const applicationStatus = ["POST", "Client", "Lettre", "Contact", "Relance"]
const stepsDone = ["POST", "Lettre"] // exemple : status cochés

export function ApplicationCard() {
  return (
    <Card className="bg-card text-card-foreground border border-border shadow-sm w-full max-w-sm">
      <CardHeader className="flex flex-row items-center  justify-between">
        <CardTitle className="text-lg">Suivi candidature</CardTitle>

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
        {/* Badges de suivi */}
        <div className="flex flex-wrap gap-2">
          {applicationStatus.map((step) => (
            <Badge
              key={step}
              className={cn(
                "rounded-md px-3 text-xs transition-colors",
                stepsDone.includes(step)
                  ? "bg-success text-success-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step}
            </Badge>
          ))}
        </div>

        {/* Bouton d’accès */}
        <Button variant="secondary" className="w-full">
          Voir l’application
        </Button>

        {/* Note / commentaire */}
        <Textarea
          placeholder="Notes personnelles sur la candidature"
          className="bg-background text-foreground border border-border"
          rows={4}
        />
      </CardContent>
    </Card>
  )
}
