import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const applicationStatus = ["POST", "Client", "Lettre", "Contact", "Relance"]
const stepsDone = ["POST", "Lettre"] // exemple : status cochés

export function ApplicationCard() {
  return (
    <Card className="bg-card text-card-foreground border border-border shadow-sm w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Suivi candidature</CardTitle>
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
