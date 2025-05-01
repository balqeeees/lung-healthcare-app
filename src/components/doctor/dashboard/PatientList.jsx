// PatientList.jsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PatientList({
  patients,
  sidebarOpen,
  searchQuery,
  onPatientClick,
}) {
  const patientArray = Object.values(patients);

  const filteredPatients = patientArray.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-2">
      {sidebarOpen && (
        <div className="flex items-center justify-between px-4 mb-2">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            Patients
          </h3>
          <span className="text-xs text-blue-600 font-medium">
            {filteredPatients.length} total
          </span>
        </div>
      )}
      <ul className="space-y-1 px-2">
        {filteredPatients.map((patient) => (
          <li
            key={patient.id}
            onClick={() => onPatientClick(patient)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-all
              ${sidebarOpen ? "justify-start" : "justify-center"}`}
          >
            <div className="relative">
              <Avatar className="h-9 w-9 bg-blue-100 border border-blue-200">
                <AvatarFallback className="text-blue-700 font-medium">
                  {patient.name[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {patient.name}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
