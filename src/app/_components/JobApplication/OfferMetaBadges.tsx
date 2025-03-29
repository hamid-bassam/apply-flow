import { Badge } from "@/components/ui/badge"

export type OfferMeta = {
  isFullRemote: boolean
  isFreelance: boolean
  tjm?: number
  experience?: string
  teamSize?: string
  startDate?: string
  location?: string
  process?: string
}

export function OfferMetaBadges({ meta }: { meta: OfferMeta }) {
  return (
    <div className="flex flex-wrap gap-2">
      {meta.isFullRemote && (
        <Badge variant="outline" className="text-xs">
          🏠 Full Remote
        </Badge>
      )}

      <Badge variant="outline" className="text-xs">
        💼 {meta.isFreelance ? "Freelance" : "CDI/CDD"}
      </Badge>

      {meta.tjm && (
        <Badge variant="outline" className="text-xs">
          💰 {meta.tjm} €/j
        </Badge>
      )}

      {meta.experience && (
        <Badge variant="outline" className="text-xs">
          📚 {meta.experience}
        </Badge>
      )}

      {meta.teamSize && (
        <Badge variant="outline" className="text-xs">
          👥 {meta.teamSize}
        </Badge>
      )}

      {meta.startDate && (
        <Badge variant="outline" className="text-xs">
          🚀 {meta.startDate}
        </Badge>
      )}

      {meta.location && (
        <Badge variant="outline" className="text-xs">
          📍 {meta.location}
        </Badge>
      )}

      {meta.process && (
        <Badge variant="outline" className="text-xs max-w-[12rem] truncate">
          🧭 {meta.process}
        </Badge>
      )}
    </div>
  )
}
