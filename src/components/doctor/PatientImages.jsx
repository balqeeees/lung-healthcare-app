// src/components/doctor/PatientImages.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function PatientImages({ patient }) {
  const hasImages = patient?.images && patient.images.length > 0;

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Medical Images</CardTitle>
      </CardHeader>
      <CardContent>
        {hasImages ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patient.images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={image.url}
                  alt={image.label}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-3">
                  <div className="font-medium">{image.label}</div>
                  <div className="text-sm text-gray-500">{image.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 border border-gray-100">
            No images available
          </div>
        )}
      </CardContent>
    </Card>
  );
}
