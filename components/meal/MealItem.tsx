import IconWithLabel from "@/components/common/IconWithLabel"
import type { MealItemProps } from "@/types"

const mealConfig = {
  breakfast: {
    label: "아침",
    icon: "/icons/sunrise.svg",
    variant: "outline" as const,
  },
  lunch: {
    label: "점심",
    icon: "/icons/sun.svg",
    variant: "default" as const,
  },
  dinner: {
    label: "저녁",
    icon: "/icons/moon.svg",
    variant: "secondary" as const,
  },
}

export default function MealItem({ type, items, icon }: MealItemProps) {
  const config = mealConfig[type]

  return (
    <div className="flex items-start gap-3">
      <img src={icon || config.icon || "/placeholder.svg"} alt={config.label} className="w-6 h-6 mt-1" />
      <div className="flex-1">
        <IconWithLabel icon={icon || config.icon} label={config.label} variant={config.variant} className="mb-2" />
        <div className="text-sm text-gray-600">{items.join(", ")}</div>
      </div>
    </div>
  )
}
