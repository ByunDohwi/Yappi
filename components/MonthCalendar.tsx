"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MonthCalendarProps {
  currentDate: Date
  onDateChange: (direction: "prev" | "next") => void
  selectedDate: number | null
  onDateSelect: (date: number) => void
  eventData: any
  eventType?: string
}

export default function MonthCalendar({
  currentDate,
  onDateChange,
  selectedDate,
  onDateSelect,
  eventData,
  eventType = "default",
}: MonthCalendarProps) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{currentDate.toLocaleDateString("ko-KR", { year: "numeric", month: "long" })}</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onDateChange("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => onDateChange("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="p-2 text-center text-xs font-medium text-gray-500 bg-green-50">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const hasEvents = day && eventData[monthKey]?.[String(day)]
            const isSelected = selectedDate === day
            const isToday = day === 18 // 예시로 18일을 오늘로 설정

            return (
              <div key={index} className="aspect-square">
                {day && (
                  <button
                    onClick={() => onDateSelect(day)}
                    className={cn(
                      "w-full h-full p-1 text-sm rounded-lg transition-colors relative flex flex-col items-center justify-center",
                      isSelected && "bg-green-500 text-white",
                      !isSelected && isToday && "bg-green-100 text-green-700 font-bold",
                      !isSelected && !isToday && hasEvents && "bg-green-50 hover:bg-green-100 text-green-700",
                      !isSelected && !isToday && !hasEvents && "hover:bg-gray-100",
                    )}
                  >
                    <span className="font-medium">{day}</span>
                    {hasEvents && (
                      <div className="flex gap-0.5 mt-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full" />
                      </div>
                    )}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
