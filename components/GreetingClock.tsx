"use client"

import { useState, useEffect } from "react"

interface GreetingClockProps {
  userName: string
}

export default function GreetingClock({ userName }: GreetingClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getGreeting = () => {
    const hour = time.getHours()
    if (hour < 12) return "좋은 아침이에요!"
    if (hour < 18) return "좋은 오후에요!"
    return "좋은 저녁이에요!"
  }

  const getTimeIcon = () => {
    const hour = time.getHours()

    // 오전 5시-11시 59분: 해돋이
    if (hour >= 5 && hour < 12) {
      return "/icons/sunrise-gray.svg"
    }
    // 오전 12시-오후 5시 59분: 태양
    else if (hour >= 12 && hour < 18) {
      return "/icons/sun-gray.svg"
    }
    // 오후 6시-오전 4시 59분: 달
    else {
      return "/icons/moon-gray.svg"
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
      <div className="flex items-center justify-between">
        <div className="text-left flex-1">
          <h1 className="text-2xl font-medium text-gray-800 mb-1">
            안녕하세요, <span className="font-bold text-green-600">{userName}</span>님!
          </h1>
          <p className="text-gray-600">{getGreeting()}</p>
        </div>

        <div className="text-center flex-1">
          <div
            className="text-7xl font-bold font-mono mb-2"
            style={{
              background: "linear-gradient(90deg, #019CED 0%, #56B17C 50%, #C1D920 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {time.toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </div>
          <div className="text-sm text-gray-400">
            {time.toLocaleDateString("ko-KR", {
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <div
            className="relative"
            style={{
              width: "180px",
              height: "180px",
              aspectRatio: "1/1",
              flexShrink: 0,
            }}
          >
            <img
              src={getTimeIcon() || "/placeholder.svg"}
              alt="시간대 아이콘"
              className="w-full h-full"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(92%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(92%) contrast(88%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
