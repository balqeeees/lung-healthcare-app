import { ScrollArea } from "@/components/ui/scroll-area";
import PatientList from "../PatientList";

const SidebarPatients = ({
  sidebarOpen,
  patients,
  searchQuery,
  onPatientClick,
  setSidebarSearchQuery,
}) => {
  return (
    <div className="px-2 mt-2 mb-2">
      {sidebarOpen && (
        <div className="px-2 mb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSidebarSearchQuery(e.target.value)}
              placeholder="Search patient..."
              className="pl-8 p-2 w-full text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
      )}

      <ScrollArea className="max-h-60 overflow-y-auto">
        <PatientList
          patients={patients}
          sidebarOpen={sidebarOpen}
          searchQuery={searchQuery}
          onPatientClick={onPatientClick}
        />
      </ScrollArea>
    </div>
  );
};

export default SidebarPatients;
