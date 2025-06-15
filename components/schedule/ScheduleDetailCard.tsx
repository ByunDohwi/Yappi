import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import SectionHeader from "@/components/common/SectionHeader"
import ScheduleItem from "@/components/schedule/ScheduleItem"
import type { ScheduleEvent } from "@/types"

interface ScheduleDetailCardProps {
  date: string
  events: ScheduleEvent[] | null
}

export default function ScheduleDetailCard({ date, events }: ScheduleDetailCardProps) {
  return (
    <Card>
      <CardHeader>
        <SectionHeader title={`${date}일 일정`} />
      </CardHeader>
      <CardContent>
        {events ? (
          <div className="space-y-4">
            {events.map((event, index) => (
              <ScheduleItem
                key={index}
                title={event.title}
                time={event.time}
                grades={event.grades}
                type={event.type}
                variant="full"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>날짜를 선택해주세요.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
