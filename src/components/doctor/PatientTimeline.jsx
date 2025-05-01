// src/components/doctor/PatientTimeline.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock } from "lucide-react";

export default function PatientTimeline({ reports }) {
  if (!reports || reports.length === 0) {
    return (
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Activity size={18} className="mr-2 text-blue-600" />
            Patient Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
            No history available for this patient
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Activity size={18} className="mr-2 text-blue-600" />
          Patient Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div key={report.id} className="relative pl-6 pb-4">
              <div className="absolute left-0 top-1 h-full">
                <div className="absolute left-1.5 top-1.5 w-2 h-2 rounded-full bg-blue-600"></div>
                {index !== reports.length - 1 && (
                  <div className="absolute left-2 top-3 w-0.5 h-full bg-gray-200"></div>
                )}
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900">
                  {report.date}
                </span>
                <h3 className="font-medium text-gray-800">{report.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {report.content.substring(0, 100)}...
                </p>
                <div className="mt-1 text-xs text-gray-500">
                  By {report.doctorName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
