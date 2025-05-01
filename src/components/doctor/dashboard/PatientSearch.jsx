import { useState, useRef } from "react";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PATIENTS } from "@/data/patients";
import PatientList from "./PatientList";

export default function PatientSearch({ sidebarOpen, onPatientClick }) {
  const [searchQuery, setSearchQuery] = useState("");
  const patientListScrollRef = useRef(null);

  return (
    <div className="px-2 mt-2 mb-2" ref={patientListScrollRef}>
      {sidebarOpen && (
        <div className="px-2 mb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patient..."
              className="pl-8 p-2 w-full text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <Search
              size={16}
              className="absolute left-2 top-2.5 text-gray-400"
            />
          </div>
        </div>
      )}

      <ScrollArea className="max-h-60 overflow-y-auto">
        <PatientList
          patients={PATIENTS}
          sidebarOpen={sidebarOpen}
          searchQuery={searchQuery}
          onPatientClick={onPatientClick}
        />
      </ScrollArea>
    </div>
  );
}
