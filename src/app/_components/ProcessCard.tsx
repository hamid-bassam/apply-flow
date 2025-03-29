import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const steps = [
  { label: "Call RH", status: "done" },
  { label: "Test technique", status: "todo" },
  { label: "Entretien Tech", status: "todo" },
  { label: "Entretien Client", status: "todo" },
  { label: "Proposition", status: "waiting" },
]

export function ProcessCard() {
  return (
    <Card className="bg-card text-card-foreground border border-border shadow-sm w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Process de recrutement</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Étapes du process */}
        <div className="flex flex-col gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between text-sm px-3 py-1 rounded-md border",
                step.status === "done" &&
                "bg-success/10 text-success-foreground border-success",
                step.status === "todo" &&
                "bg-muted text-muted-foreground border-border",
                step.status === "waiting" &&
                "bg-warning/10 text-warning-foreground border-warning"
              )}
            >
              <span>{step.label}</span>
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs",
                  step.status === "done" && "bg-success text-success-foreground",
                  step.status === "todo" && "bg-muted text-muted-foreground",
                  step.status === "waiting" &&
                  "bg-warning text-warning-foreground"
                )}
              >
                {step.status}
              </Badge>
            </div>
          ))}
        </div>

        {/* Notes personnelles */}
        <Textarea
          placeholder="Remarques sur le process"
          className="bg-background text-foreground border border-border"
          rows={3}
        />

        {/* Bouton */}
        <Button variant="default" className="w-full">
          Voir détails / lien Notion
        </Button>
      </CardContent>
    </Card>
  )
}
