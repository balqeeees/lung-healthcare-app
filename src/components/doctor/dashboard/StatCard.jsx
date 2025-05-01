// StatCard.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({
  title,
  value,
  description,
  changePercent,
  changeDescription,
  bgColor,
}) {
  return (
    <Card className={`${bgColor} text-white`}>
      <CardContent className="p-6">
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-sm">{title}</p>
            <h2 className="text-3xl font-bold">{value}</h2>
            {description && <p className="text-sm">{description}</p>}
          </div>
          <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
            {changePercent} {changeDescription}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
