import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function PatientSidebar({
  sidebarOpen,
  setSidebarOpen,
  patients,
  selectedPatientId,
  isMobile,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPatients = Object.values(patients).filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      className={`transition-all duration-300 bg-white shadow-sm ${
        sidebarOpen ? "w-64" : "w-0 md:w-16"
      } flex flex-col z-20 ${isMobile && sidebarOpen ? "absolute h-full" : ""}`}
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-blue-50">
        <h2
          className={`text-sm font-semibold text-blue-700 uppercase tracking-wider truncate transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 md:hidden"
          }`}
        >
          Patient Directory
        </h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-blue-600 hover:bg-blue-100 p-1 rounded-md transition-colors hidden md:block"
        >
          {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {sidebarOpen && (
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-200 pl-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      <ScrollArea className="flex-1">
        <div className={`p-2 ${!sidebarOpen ? "hidden md:block" : ""}`}>
          {filteredPatients.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                navigate(`/doctor/patient/${p.id}`);
                if (isMobile) setSidebarOpen(false);
              }}
              className={`w-full text-left py-3 px-3 rounded-lg transition-colors flex items-center ${
                Number(selectedPatientId) === p.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100 text-gray-600"
              } ${!sidebarOpen ? "justify-center md:px-2" : ""}`}
              title={p.name}
            >
              <Avatar className={`w-8 h-8 ${sidebarOpen ? "mr-3" : ""}`}>
                <AvatarFallback
                  className={`${
                    selectedPatientId === p.id
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {p.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div
                className={`transition-opacity duration-200 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 hidden md:hidden"
                }`}
              >
                <div className="text-sm font-medium">{p.name}</div>
                <div className="text-xs text-gray-500">ID: {p.id}</div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
