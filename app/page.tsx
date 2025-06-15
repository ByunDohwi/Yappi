"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils } from "lucide-react"

// 컴포넌트 imports
import Header from "@/components/Header"
import GreetingClock from "@/components/GreetingClock"
import MealCard from "@/components/MealCard"
import Timetable from "@/components/Timetable"
import UpcomingSchedule from "@/components/UpcomingSchedule"
import MonthCalendar from "@/components/MonthCalendar"
import TimetableRow from "@/components/timetable/TimetableRow"
import MealDetailCard from "@/components/meal/MealDetailCard"
import ScheduleDetailCard from "@/components/schedule/ScheduleDetailCard"

// 데이터 imports
import { todayData, timetableData, scheduleData, mealData, dayNames } from "@/data"
import type { DayKey } from "@/types"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [timetableDate, setTimetableDate] = useState(new Date(2025, 4, 1)) // 2025년 5월
  const [scheduleDate, setScheduleDate] = useState(new Date(2025, 4, 1))
  const [mealDate, setMealDate] = useState(new Date(2025, 4, 1))
  const [selectedScheduleDate, setSelectedScheduleDate] = useState<number | null>(18)
  const [selectedMealDate, setSelectedMealDate] = useState<number | null>(18)
  const [selectedDay, setSelectedDay] = useState<DayKey>("monday")

  // Intersection Observer로 현재 섹션 감지
  useEffect(() => {
    const sections = ["home", "timetable", "schedule", "meals"]
    const observers: IntersectionObserver[] = []

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId)
              }
            })
          },
          { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const navigateMonth = (section: "timetable" | "schedule" | "meals", direction: "prev" | "next") => {
    const setters = {
      timetable: setTimetableDate,
      schedule: setScheduleDate,
      meals: setMealDate,
    }

    setters[section]((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const selectedScheduleEvents = selectedScheduleDate
    ? scheduleData[`${scheduleDate.getFullYear()}-${String(scheduleDate.getMonth() + 1).padStart(2, "0")}`]?.[
        String(selectedScheduleDate)
      ]
    : null

  const selectedMealData = selectedMealDate
    ? mealData[`${mealDate.getFullYear()}-${String(mealDate.getMonth() + 1).padStart(2, "0")}`]?.[
        String(selectedMealDate)
      ]
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 홈 섹션 */}
        <section id="home" className="py-16 min-h-screen">
          <GreetingClock userName={todayData.user} />
          <div className="grid gap-6 md:grid-cols-3">
            <UpcomingSchedule events={todayData.events} />
            <Timetable timetable={todayData.timetable} />
            <MealCard meals={todayData.meals} />
          </div>
        </section>

        {/* 시간표 섹션 */}
        <section id="timetable" className="py-16 min-h-screen">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">시간표</h2>
            <p className="text-gray-600">주간 시간표를 확인하세요</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MonthCalendar
                currentDate={timetableDate}
                onDateChange={(direction) => navigateMonth("timetable", direction)}
                selectedDate={null}
                onDateSelect={() => {}}
                eventData={{}}
              />
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>2025년 5월 시간표</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedDay} onValueChange={(value) => setSelectedDay(value as DayKey)}>
                    <TabsList className="grid w-full grid-cols-5 mb-4">
                      {Object.entries(dayNames).map(([key, name]) => (
                        <TabsTrigger key={key} value={key} className="text-xs">
                          {name.slice(0, 1)}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {Object.entries(timetableData).map(([day, schedule]) => (
                      <TabsContent key={day} value={day}>
                        <div className="space-y-2">
                          {schedule.slice(0, 4).map((item) => (
                            <TimetableRow
                              key={item.period}
                              period={item.period}
                              subject={item.subject}
                              teacher={item.teacher}
                              room={item.room}
                              time={item.time}
                              variant="compact"
                            />
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 학사일정 섹션 */}
        <section id="schedule" className="py-16 min-h-screen">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">학사일정</h2>
            <p className="text-gray-600">월간 학사일정을 확인하세요</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MonthCalendar
                currentDate={scheduleDate}
                onDateChange={(direction) => navigateMonth("schedule", direction)}
                selectedDate={selectedScheduleDate}
                onDateSelect={setSelectedScheduleDate}
                eventData={scheduleData}
                eventType="schedule"
              />
            </div>

            <div>
              <ScheduleDetailCard date={selectedScheduleDate?.toString() || ""} events={selectedScheduleEvents} />
            </div>
          </div>
        </section>

        {/* 급식 섹션 */}
        <section id="meals" className="py-16 min-h-screen">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">급식</h2>
            <p className="text-gray-600">월간 급식 메뉴를 확인하세요</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MonthCalendar
                currentDate={mealDate}
                onDateChange={(direction) => navigateMonth("meals", direction)}
                selectedDate={selectedMealDate}
                onDateSelect={setSelectedMealDate}
                eventData={mealData}
                eventType="meals"
              />
            </div>

            <div>
              {selectedMealData ? (
                <MealDetailCard date={selectedMealDate?.toString() || ""} meals={selectedMealData} />
              ) : (
                <Card>
                  <CardContent className="text-center py-8 text-gray-500">
                    <Utensils className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>날짜를 선택해주세요.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
