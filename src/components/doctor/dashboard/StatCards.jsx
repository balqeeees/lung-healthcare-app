import { Card, CardContent } from "@/components/ui/card";
import StatCard from "./StatCard";

export default function StatCards() {
  const stats = [
    {
      title: "You Have",
      value: "22",
      description: "appointments this week",
      changePercent: "+15%",
      changeDescription: "vs last week",
      bgColor: "bg-blue-500",
    },
    {
      title: "Cancelled",
      value: "4",
      description: "appointments",
      changePercent: "-10%",
      changeDescription: "vs last week",
      bgColor: "bg-blue-700",
    },
    {
      title: "New Tissue  Images",
      value: "18",
      description: "",
      changePercent: "+32%",
      changeDescription: "vs last week",
      bgColor: "bg-blue-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          changePercent={stat.changePercent}
          changeDescription={stat.changeDescription}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
}
