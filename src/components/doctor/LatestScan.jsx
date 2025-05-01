import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function LatestScan({ patient }) {
  const hasImages = patient?.images && patient.images.length > 0;
  const latestImage = hasImages ? patient.images[0] : null;

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <FileText size={18} className="mr-2 text-blue-600" />
          Latest Scan
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {latestImage ? (
          <>
            <img
              src={latestImage.url}
              alt={latestImage.label || "Patient Image"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="font-medium text-gray-800">
                {latestImage.label}
              </div>
              <div className="text-sm text-gray-500">{latestImage.date}</div>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400">
            No images available
          </div>
        )}
      </CardContent>
    </Card>
  );
}
