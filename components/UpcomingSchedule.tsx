import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SectionHeader from "@/components/common/SectionHeader"
import ScheduleItem from "@/components/schedule/ScheduleItem"

interface ScheduleEvent {
  date: string
  title: string
  type: string
  grades: number[]
}

interface UpcomingScheduleProps {
  events: ScheduleEvent[]
  title?: string
  subtitle?: string
  variant?: "compact" | "full"
}

export default function UpcomingSchedule({
  events,
  title = "오늘의 학사일정",
  subtitle,
  variant = "full",
}: UpcomingScheduleProps) {
  return (
    <Card>
      <CardHeader>
        <SectionHeader title={title} subtitle={subtitle} />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {events.map((event, index) => (
            <ScheduleItem
              key={index}
              title={event.title}
              date={event.date}
              grades={event.grades}
              type={event.type}
              variant={variant}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
