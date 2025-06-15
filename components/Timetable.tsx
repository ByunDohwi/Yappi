import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SectionHeader from "@/components/common/SectionHeader"
import TimetableRow from "@/components/timetable/TimetableRow"
import type { TimetableItem } from "@/types"

interface TimetableProps {
  timetable: TimetableItem[]
  title?: string
  subtitle?: string
  variant?: "compact" | "full"
  maxItems?: number
}

export default function Timetable({
  timetable,
  title = "오늘의 시간표",
  subtitle,
  variant = "full",
  maxItems = 4,
}: TimetableProps) {
  const currentHour = new Date().getHours()
  const currentPeriod = timetable.find((item) => {
    const startHour = Number.parseInt(item.time.split(":")[0])
    return startHour <= currentHour && currentHour < startHour + 1
  })

  return (
    <Card>
      <CardHeader>
        <SectionHeader title={title} subtitle={subtitle} />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {timetable.slice(0, maxItems).map((item) => (
            <TimetableRow
              key={item.period}
              period={item.period}
              subject={item.subject}
              teacher={item.teacher}
              room={item.room}
              time={item.time}
              isActive={currentPeriod?.period === item.period}
              variant={variant}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
