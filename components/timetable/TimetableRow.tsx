import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { TimetableRowProps } from "@/types"

export default function TimetableRow({
  period,
  subject,
  teacher,
  room,
  time,
  isActive = false,
  variant = "full",
}: TimetableRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg transition-colors",
        isActive ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50",
        variant === "compact" && "p-2",
      )}
    >
      <div className="flex items-center gap-3">
        <Badge variant={isActive ? "default" : "outline"} className={variant === "compact" ? "text-xs" : ""}>
          {period}교시
        </Badge>
        <div>
          <div className={cn("font-medium", variant === "compact" && "text-sm")}>{subject}</div>
          {teacher && (
            <div className={cn("text-gray-600", variant === "compact" ? "text-xs" : "text-sm")}>
              {teacher}
              {room && variant === "full" && ` • ${room}`}
            </div>
          )}
        </div>
      </div>
      <div className={cn("text-gray-500", variant === "compact" ? "text-xs" : "text-sm")}>{time}</div>
    </div>
  )
}
