"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Copy, Mail, Phone, StickyNote } from "lucide-react"
import { toast } from "sonner"

export type Contact = {
  name: string
  role?: string
  email?: string
  phone?: string
  notes?: string
}

export function ContactPreview({ contact }: { contact: Contact }) {
  const copy = (label: string, value: string) => {
    navigator.clipboard.writeText(value)
    toast.success(`${label} copié`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="w-full flex items-center justify-between gap-4 rounded-md p-1 text-left transition hover:bg-muted/50 focus-visible:ring-1 focus-visible:ring-ring"
        >
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-foreground font-medium">{contact.name}</span>
            {contact.role && (
              <span className="text-xs italic text-muted-foreground">
                {`(${contact.role})`}
              </span>
            )}
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 text-sm">
        {contact.email && (
          <DropdownMenuItem className="flex justify-between items-center gap-2 group">
            <div className="flex gap-2 items-center">
              <Mail className="h-4 w-4 text-primary" />
              {contact.email}
            </div>
            <Copy
              className="h-4 w-4 opacity-50 group-hover:opacity-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                copy("Email", contact.email!)
              }}
            />
          </DropdownMenuItem>
        )}
        {contact.phone && (
          <DropdownMenuItem className="flex justify-between items-center gap-2 group">
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4 text-primary" />
              {contact.phone}
            </div>
            <Copy
              className="h-4 w-4 opacity-50 group-hover:opacity-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                copy("Téléphone", contact.phone!)
              }}
            />
          </DropdownMenuItem>
        )}
        {contact.notes && (
          <DropdownMenuItem className="flex justify-between items-center gap-2 group">
            <div className="flex gap-2 items-center text-muted-foreground">
              <StickyNote className="h-4 w-4" />
              <span className="line-clamp-2">{contact.notes}</span>
            </div>

          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
