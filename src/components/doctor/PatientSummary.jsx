// src/components/doctor/PatientSummary.jsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import { calculateAge } from "@/utils/patientUtils";

export default function PatientSummary({ patient }) {
  if (!patient) return null;

  return (
    <Card className="bg-white mb-6 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-start">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                {patient.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {patient.name}
              </h2>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>
                  {patient.birthdate} ({calculateAge(patient.birthdate)} years)
                </span>
              </div>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Mail size={14} className="mr-1" />
                <span>{patient.email}</span>
              </div>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Phone size={14} className="mr-1" />
                <span>{patient.contact}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="p-3 bg-blue-50 rounded-lg text-center min-w-28">
              <div className="text-xs uppercase text-blue-500 font-medium mb-1">
                Blood Type
              </div>
              <div className="text-lg font-semibold text-blue-700">
                {patient.bloodType}
              </div>
            </div>

            <div className="p-3 bg-pink-50 rounded-lg text-center min-w-28">
              <div className="text-xs uppercase text-pink-400 font-medium mb-1">
                Gender
              </div>
              <div className="text-lg font-semibold text-pink-700">
                {patient.gender}
              </div>
            </div>

          
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
