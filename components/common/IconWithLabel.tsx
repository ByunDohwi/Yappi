import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { IconWithLabelProps } from "@/types"

export default function IconWithLabel({ icon, label, variant = "outline", className }: IconWithLabelProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src={icon || "/placeholder.svg"} alt={label} className="w-5 h-5" />
      <Badge variant={variant}>{label}</Badge>
    </div>
  )
}
