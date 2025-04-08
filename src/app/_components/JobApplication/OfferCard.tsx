"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Plus, Sparkles, Star } from "lucide-react"
import { Separator } from "../../../components/ui/separator"
import { CardActionsDropdown } from "../CardActionsDropDown"
import { Contact } from "./ContactPreview"
import { ContactsSection } from "./ContactSection"
import { OfferMetaBadges } from "./OfferMetaBadges"
import { OfferMeta } from "./OfferMetaSummary"


const contacts: Contact[] = [
  {
    name: "Sophie R.",
    role: "RH",
    email: "sophie@recrutement.com",
    phone: "06 12 34 56 78",
    notes: "Très réactive, relancer le 5 avril",
  },
  {
    name: "Youssef T.",
    role: "Manager",
    email: "yt@startup.io",
    notes: "Très technique, discussion stack avancée",
  },
  {
    name: "Marie L.",
    role: "Manager",
    email: "marie@tech.com",
    notes: "A relancer le 10 avril",
  }
]
const meta: OfferMeta = {
  isFullRemote: true,
  isFreelance: true,
  tjm: 550,
  experience: "3+ ans",
  teamSize: "4 devs",
  startDate: "Avril",
  location: "100% Remote",
  process: "RH + Test + Client",
}
type Skill = {
  name: string
  level: "core" | "plus" | "bonus"
}

const skills: Skill[] = [
  { name: "React", level: "core" },
  { name: "Next.js", level: "core" },
  { name: "Node.js", level: "plus" },
  { name: "TypeScript", level: "core" },
  { name: "Tailwind", level: "plus" },
  { name: "Prisma", level: "bonus" },
  { name: "SQL", level: "bonus" },
]

export function OfferCard() {
  return (
    <Card className="w-full bg-card text-card-foreground border border-border shadow-sm">
      <CardHeader className="flex flex-row items-center  justify-between pt-4">
        <CardTitle className="text-lg">Titre du post</CardTitle>

        {/* Actions */}
        {/* Dropdown actions */}
        <CardActionsDropdown
          onView={() => console.log("Voir")}
          onEdit={() => console.log("Modifier")}
          onDelete={() => console.log("Supprimer")}
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {/* Description */}
        <div className="text-sm text-muted-foreground">
          Courte description de la mission, son objectif, et l’environnement.
        </div>

        {/* Tags */}
        <OfferMetaBadges meta={meta} />
        <Separator className="my-1" />
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            const icon =
              skill.level === "core" ? <Star className="w-3 h-3 mr-1" />
                : skill.level === "plus" ? <Plus className="w-3 h-3 mr-1" />
                  : <Sparkles className="w-3 h-3 mr-1" />

            return (
              <Badge
                key={skill.name}
                variant="secondary"
                className={cn(
                  "text-xs px-2 py-1 rounded-full flex items-center gap-1",
                  skill.level === "core" && "border border-primary/40 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80",
                  skill.level === "plus" && "border border-muted ",
                  skill.level === "bonus" && "opacity-70"
                )}
              >
                {icon}
                {skill.name}
              </Badge>
            )
          })}
        </div>

        {/* Lien de l'offre */}
        <Button variant="outline" className="w-full">
          <a href="https://www.linkedin.com/jobs/view/1234567890" target="_blank" rel="noopener noreferrer">
            <span className="text-sm">🔗 Lien de l’offre</span>

          </a>

        </Button>

        {/* Contacts */}
        <ContactsSection contacts={contacts} />

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
