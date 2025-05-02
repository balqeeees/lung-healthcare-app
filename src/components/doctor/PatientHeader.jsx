import { Menu, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export default function PatientHeader({
  patient,
  setSidebarOpen,
  sidebarOpen,
  isMobile,
  onNewReport,
})
{
    const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-gray-200 px-4 py-8 md:px-6 flex items-center justify-between bg-white top-0 z-10 shadow-sm">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`text-gray-600 p-1 rounded hover:bg-gray-100 mr-3 ${
            !isMobile && "md:hidden"
          }`}
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center">
          <h1 className="font-semibold text-gray-800 text-lg truncate max-w-xs md:max-w-md">
            {patient?.name || "Patient Dashboard"}
          </h1>

          {patient && (
            <div className="flex items-center ml-3">
              <Badge className="bg-blue-50 text-blue-600 mr-2">
                Blood: {patient.bloodType}
              </Badge>
            </div>
          )}
        </div>
      </div>

      {patient && (
        <div className="flex gap-2">
          {onNewReport && (
            <Button
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1"
              onClick={onNewReport}
            >
              <Edit size={14} />
              <span className="hidden md:inline">Write Report</span>
            </Button>
          )}
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:text-blue-700"
          >
            <Home size={20} />
          </button>
        </div>
      )}
    </header>
  );
}
