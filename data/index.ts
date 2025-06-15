import type { TodayData, DayKey, TimetableItem, EventTypeColors, GradeColors } from "@/types"

export const todayData: TodayData = {
  user: "홍길동",
  meals: {
    breakfast: ["흰쌀밥", "된장찌개", "제육볶음", "시금치나물"],
    lunch: ["현미밥", "김치찌개", "닭갈비", "콩나물무침"],
    dinner: ["흰쌀밥", "미역국", "고등어구이", "브로콜리무침"],
  },
  timetable: [
    { period: 1, subject: "국어", teacher: "김선생님", time: "09:00-09:50" },
    { period: 2, subject: "수학", teacher: "이선생님", time: "10:00-10:50" },
    { period: 3, subject: "영어", teacher: "박선생님", time: "11:00-11:50" },
    { period: 4, subject: "과학", teacher: "최선생님", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", time: "12:50-13:40" },
    { period: 6, subject: "사회", teacher: "정선생님", time: "13:40-14:30" },
  ],
  events: [
    { date: "12/18", title: "기말고사", type: "시험", grades: [1, 2, 3] },
    { date: "12/20", title: "겨울방학식", type: "행사", grades: [1, 2, 3] },
    { date: "12/25", title: "성탄절", type: "휴일", grades: [] },
  ],
}

export const timetableData: Record<DayKey, TimetableItem[]> = {
  monday: [
    { period: 1, subject: "국어", teacher: "김선생님", room: "3-1", time: "09:00-09:50" },
    { period: 2, subject: "수학", teacher: "이선생님", room: "3-1", time: "10:00-10:50" },
    { period: 3, subject: "영어", teacher: "박선생님", room: "3-1", time: "11:00-11:50" },
    { period: 4, subject: "과학", teacher: "최선생님", room: "과학실", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", room: "", time: "12:50-13:40" },
    { period: 6, subject: "사회", teacher: "정선생님", room: "3-1", time: "13:40-14:30" },
  ],
  tuesday: [
    { period: 1, subject: "수학", teacher: "이선생님", room: "3-1", time: "09:00-09:50" },
    { period: 2, subject: "국어", teacher: "김선생님", room: "3-1", time: "10:00-10:50" },
    { period: 3, subject: "과학", teacher: "최선생님", room: "과학실", time: "11:00-11:50" },
    { period: 4, subject: "영어", teacher: "박선생님", room: "3-1", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", room: "", time: "12:50-13:40" },
    { period: 6, subject: "음악", teacher: "송선생님", room: "음악실", time: "13:40-14:30" },
  ],
  wednesday: [
    { period: 1, subject: "영어", teacher: "박선생님", room: "3-1", time: "09:00-09:50" },
    { period: 2, subject: "과학", teacher: "최선생님", room: "과학실", time: "10:00-10:50" },
    { period: 3, subject: "수학", teacher: "이선생님", room: "3-1", time: "11:00-11:50" },
    { period: 4, subject: "사회", teacher: "정선생님", room: "3-1", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", room: "", time: "12:50-13:40" },
    { period: 6, subject: "국어", teacher: "김선생님", room: "3-1", time: "13:40-14:30" },
  ],
  thursday: [
    { period: 1, subject: "사회", teacher: "정선생님", room: "3-1", time: "09:00-09:50" },
    { period: 2, subject: "체육", teacher: "한선생님", room: "체육관", time: "10:00-10:50" },
    { period: 3, subject: "국어", teacher: "김선생님", room: "3-1", time: "11:00-11:50" },
    { period: 4, subject: "수학", teacher: "이선생님", room: "3-1", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", room: "", time: "12:50-13:40" },
    { period: 6, subject: "영어", teacher: "박선생님", room: "3-1", time: "13:40-14:30" },
  ],
  friday: [
    { period: 1, subject: "과학", teacher: "최선생님", room: "과학실", time: "09:00-09:50" },
    { period: 2, subject: "영어", teacher: "박선생님", room: "3-1", time: "10:00-10:50" },
    { period: 3, subject: "사회", teacher: "정선생님", room: "3-1", time: "11:00-11:50" },
    { period: 4, subject: "국어", teacher: "김선생님", room: "3-1", time: "12:00-12:50" },
    { period: 5, subject: "점심시간", teacher: "", room: "", time: "12:50-13:40" },
    { period: 6, subject: "수학", teacher: "이선생님", room: "3-1", time: "13:40-14:30" },
  ],
}

export const scheduleData = {
  "2025-05": {
    "18": [{ title: "기말고사", type: "시험", time: "09:00", grades: [1, 2, 3] }],
    "20": [{ title: "겨울방학식", type: "행사", time: "10:00", grades: [1, 2, 3] }],
    "21": [{ title: "국외현장체험학습", type: "행사", time: "", grades: [2] }],
    "22": [{ title: "의무귀가", type: "행사", time: "", grades: [1, 2, 3] }],
    "25": [{ title: "성탄절", type: "휴일", time: "", grades: [] }],
  },
}

export const mealData = {
  "2025-05": {
    "18": {
      breakfast: ["흰쌀밥", "된장찌개", "제육볶음", "시금치나물", "김치"],
      lunch: ["현미밥", "김치찌개", "닭갈비", "콩나물무침", "깍두기"],
      dinner: ["흰쌀밥", "미역국", "고등어구이", "브로콜리무침", "김치"],
    },
  },
}

export const dayNames: Record<DayKey, string> = {
  monday: "월요일",
  tuesday: "화요일",
  wednesday: "수요일",
  thursday: "목요일",
  friday: "금요일",
}

export const eventTypeColors: EventTypeColors = {
  시험: "destructive",
  행사: "default",
  휴일: "secondary",
  방학: "outline",
} as const

export const gradeColors: GradeColors = {
  1: "bg-blue-100 text-blue-700 border-blue-200",
  2: "bg-green-100 text-green-700 border-green-200",
  3: "bg-yellow-100 text-yellow-700 border-yellow-200",
} as const
