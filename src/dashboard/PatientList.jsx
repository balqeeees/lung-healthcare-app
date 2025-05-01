import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PatientList({
  patients,
  sidebarOpen,
  searchQuery,
  onPatientClick,
}) {
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="space-y-1">
      {filteredPatients.map((patient) => (
        <li
          key={patient.id}
          onClick={() => onPatientClick(patient)}
          className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer"
        >
          <Avatar className="h-9 w-9 bg-blue-100">
            <AvatarFallback className="text-blue-700">
              {patient.name[0]}
            </AvatarFallback>
          </Avatar>
          {sidebarOpen && (
            <span className="ml-3 text-sm font-medium text-gray-800 truncate">
              {patient.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
