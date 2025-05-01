import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function VisitsGrid({ visits, selectedDay, getDayName }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-900 mb-4">
        {selectedDay ? `Visits for Day ${selectedDay}` : "Upcoming Visits"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visits
          .filter((visit) => {
            if (!selectedDay) return true;
            return visit.time
              .toLowerCase()
              .includes(getDayName(selectedDay).toLowerCase());
          })
          .map((visit, idx) => (
            <Card key={idx} className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <Avatar className="h-12 w-12 mx-auto mb-2 bg-blue-200">
                  <AvatarFallback className="text-blue-800">
                    {visit.name[0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-blue-900">{visit.name}</h3>
                <p className="text-blue-600 text-sm">{visit.time}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
