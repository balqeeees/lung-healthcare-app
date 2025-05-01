import { Card, CardContent } from "@/components/ui/card";

const DashboardCards = ({ appointments, cancelled, issueImages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card className="bg-blue-500 text-white">
        <CardContent className="p-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm">You Have</p>
              <h2 className="text-3xl font-bold">{appointments}</h2>
              <p className="text-sm">appointments this week</p>
            </div>
            <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
              +15% vs last week
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm">Cancelled</p>
              <h2 className="text-3xl font-bold">{cancelled}</h2>
              <p className="text-sm">appointments</p>
            </div>
            <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
              -10% vs last week
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-900 text-white">
        <CardContent className="p-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm">New Issue Images</p>
              <h2 className="text-3xl font-bold">{issueImages}</h2>
            </div>
            <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
              +32% vs last week
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCards;
