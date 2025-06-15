import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SectionHeader from "@/components/common/SectionHeader"
import MealItem from "@/components/meal/MealItem"
import type { MealData } from "@/types"

interface MealCardProps {
  meals: MealData
  title?: string
  subtitle?: string
}

export default function MealCard({ meals, title = "오늘의 급식", subtitle }: MealCardProps) {
  return (
    <Card>
      <CardHeader>
        <SectionHeader title={title} subtitle={subtitle} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <MealItem type="breakfast" items={meals.breakfast} />
          <MealItem type="lunch" items={meals.lunch} />
          <MealItem type="dinner" items={meals.dinner} />
        </div>
      </CardContent>
    </Card>
  )
}
