
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

export function OfferMetaSummary({ meta }: { meta: OfferMeta }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
      {meta.location && (
        <div>
          <span className="font-medium text-foreground">📍 Lieu :</span>{" "}
          {meta.location}
        </div>
      )}

      <div>
        <span className="font-medium text-foreground">💼 Contrat :</span>{" "}
        {meta.isFreelance ? "Freelance" : "CDI/CDD"}
      </div>

      <div>
        <span className="font-medium text-foreground">🏠 Remote :</span>{" "}
        {meta.isFullRemote ? "Oui" : "Non / partiel"}
      </div>

      {meta.tjm && (
        <div>
          <span className="font-medium text-foreground">💰 TJM :</span>{" "}
          {meta.tjm} €
        </div>
      )}

      {meta.experience && (
        <div>
          <span className="font-medium text-foreground">📚 Expérience :</span>{" "}
          {meta.experience}
        </div>
      )}

      {meta.teamSize && (
        <div>
          <span className="font-medium text-foreground">👥 Équipe :</span>{" "}
          {meta.teamSize}
        </div>
      )}

      {meta.startDate && (
        <div>
          <span className="font-medium text-foreground">🚀 Démarrage :</span>{" "}
          {meta.startDate}
        </div>
      )}

      {meta.process && (
        <div className="col-span-2">
          <span className="font-medium text-foreground">🧭 Process :</span>{" "}
          {meta.process}
        </div>
      )}
    </div>
  )
}
