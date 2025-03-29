import { cn } from "@/lib/utils"

type TimelineItem = {
  label: string
  type: "event" | "action" | "entretien" | "prep"
  done?: boolean
}

const timeline: TimelineItem[] = [
  { label: "event 1", type: "event", done: true },
  { label: "action 1", type: "action", done: true },
  { label: "entretien com", type: "entretien", done: true },
  { label: "préparation de cv", type: "action", done: true },
  { label: "portfolio à jour", type: "action", done: true },
  { label: "relance x", type: "action" },
  { label: "préparation entretien tech", type: "action" },
]

export function Timeline() {
  return (
    <div className="relative pl-6 pr-2">
      <ul className="space-y-6">
        {timeline.map((item, idx) => {
          const isLast = idx === timeline.length - 1
          const next = timeline[idx + 1]
          const showConnector = !isLast && next.done !== false && item.done !== false

          return (
            <li key={idx} className="relative flex items-start gap-3">
              {/* Dot */}
              <div className="relative">
                <div
                  className={cn(
                    "w-4 h-4 mt-1 border-2 z-10",
                    // item.type === "event" && "bg-info border-info-foreground rounded-full",
                    // item.type === "action" && "bg-success border-success-foreground rounded-sm",
                    // item.type === "entretien" && "bg-warning border-warning-foreground rounded-full",
                    // item.type === "prep" && "bg-muted border-border rounded-full",
                    {

                      event: "bg-info border-info-foreground rounded-full",
                      action: "bg-success border-success-foreground rounded-sm",
                      entretien: "bg-warning border-warning-foreground rounded-full",
                      prep: "bg-muted border-border rounded-full",
                    }[item.type],
                    !item.done && "bg-muted/50 border-muted/50"
                  )}
                />
                {/* Connector line */}
                {showConnector && (
                  <div className="absolute left-1/2 top-full h-7 w-px -translate-x-1/2  bg-muted" />
                )}
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
