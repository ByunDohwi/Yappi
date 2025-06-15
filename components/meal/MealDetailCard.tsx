import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "@/components/common/SectionHeader"
import type { MealData } from "@/types"

interface MealDetailCardProps {
  date: string
  meals: MealData
}

export default function MealDetailCard({ date, meals }: MealDetailCardProps) {
  return (
    <Card>
      <CardHeader>
        <SectionHeader title={`${date}일 급식`} />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">아침</Badge>
            </div>
            <div className="space-y-2">
              {meals.breakfast.map((item, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default">점심</Badge>
            </div>
            <div className="space-y-2">
              {meals.lunch.map((item, index) => (
                <div key={index} className="bg-green-50 p-2 rounded text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">저녁</Badge>
            </div>
            <div className="space-y-2">
              {meals.dinner.map((item, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
