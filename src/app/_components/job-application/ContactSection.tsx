"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Contact, ContactPreview } from "./ContactPreview"

export function ContactsSection({ contacts }: { contacts: Contact[] }) {
  const [open, setOpen] = useState(false)

  const firstTwo = contacts.slice(0, 2)
  const rest = contacts.slice(2)

  return (
    <section className="flex flex-col gap-2 border p-2 rounded-xl bg-card">
      {/* Titre */}
      <h3 className="text-sm text-center font-semibold text-foreground">👥 Contacts</h3>

      {/* Contacts visibles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {firstTwo.map((c, i) => (
          <ContactPreview key={i} contact={c} />
        ))}
      </div>

      {/* Extra contacts */}
      {rest.length > 0 && (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {rest.map((c, i) => (
              <ContactPreview key={i + 2} contact={c} />
            ))}
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "mx-auto text-xs font-medium text-muted-foreground hover:text-primary",
                "flex items-center gap-1 transition-all"
              )}
            >
              <span>
                {open
                  ? "Réduire les contacts"
                  : `Voir les ${rest.length} autre${rest.length > 1 ? "s" : ""}`}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  open ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          </CollapsibleTrigger>
        </Collapsible>
      )}
    </section>
  )
}
