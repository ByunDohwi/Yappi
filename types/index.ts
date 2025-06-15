export interface MealData {
  breakfast: string[]
  lunch: string[]
  dinner: string[]
}

export interface TimetableItem {
  period: number
  subject: string
  teacher: string
  room?: string
  time: string
}

export interface ScheduleEvent {
  title: string
  type: string
  time?: string
  grades: number[]
}

export interface TodayData {
  user: string
  meals: MealData
  timetable: TimetableItem[]
  events: Array<{
    date: string
    title: string
    type: string
    grades: number[]
  }>
}

export interface NavigationItem {
  id: string
  name: string
  icon: any
}

export type DayKey = "monday" | "tuesday" | "wednesday" | "thursday" | "friday"

export interface EventTypeColors {
  시험: "destructive"
  행사: "default"
  휴일: "secondary"
  방학: "outline"
}

export interface GradeColors {
  1: string
  2: string
  3: string
}

// 공통 컴포넌트용 타입들
export interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export interface IconWithLabelProps {
  icon: string
  label: string
  variant?: "outline" | "default" | "secondary"
  className?: string
}

export interface MealItemProps {
  type: "breakfast" | "lunch" | "dinner"
  items: string[]
  icon?: string
}

export interface TimetableRowProps {
  period: number
  subject: string
  teacher?: string
  room?: string
  time: string
  isActive?: boolean
  variant?: "compact" | "full"
}

export interface ScheduleItemProps {
  title: string
  date?: string
  time?: string
  grades: number[]
  type?: string
  variant?: "compact" | "full"
}
