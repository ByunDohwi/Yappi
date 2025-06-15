import { gradeColors } from "@/data"
import { cn } from "@/lib/utils"
import type { ScheduleItemProps } from "@/types"

export default function ScheduleItem({ title, date, time, grades, type, variant = "full" }: ScheduleItemProps) {
  return (
    <div className={cn("p-3 bg-gray-50 rounded-lg", variant === "compact" && "p-2")}>
      <div className="flex items-center justify-between mb-2">
        <span className={cn("font-medium", variant === "compact" && "text-sm")}>{title}</span>
        <div className="flex items-center gap-2">
          {time && variant === "full" && <span className="text-sm text-gray-500">{time}</span>}
          {date && <span className={cn("text-gray-500", variant === "compact" ? "text-xs" : "text-sm")}>{date}</span>}
        </div>
      </div>
      {grades && grades.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {grades.map((grade) => (
            <span
              key={grade}
              className={cn(
                "px-2 py-1 rounded-full border",
                gradeColors[grade as keyof typeof gradeColors],
                variant === "compact" ? "text-xs px-1.5 py-0.5" : "text-xs",
              )}
            >
              {grade}학년
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
