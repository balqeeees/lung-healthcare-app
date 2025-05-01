import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Settings,
  LogOut,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import SidebarNavItem from "./SidebarNavItem";
import PatientSearch from "./PatientSearch";
import MiniCalendar from "./MiniCalendar";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  onPatientClick,
}) {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const [patientsVisible, setPatientsVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    setActiveNavItem(navItem);
    if (navItem === "Patients") {
      setPatientsVisible(!patientsVisible);
      setSettingsVisible(false);
    } else if (navItem === "Settings") {
      setSettingsVisible(!settingsVisible);
      setPatientsVisible(false);
    } else {
      setPatientsVisible(false);
      setSettingsVisible(false);
    }
  };

  const handleLogout = () => navigate("/");

  return (
    <aside
      className={`transition-all duration-300 bg-white border-r border-gray-100
    ${sidebarOpen ? "w-64" : "w-16"} flex flex-col z-20 h-full`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-blue-500 text-white">
        <div
          className={`transition-all duration-300 overflow-hidden ${
            sidebarOpen ? "w-40" : "w-0"
          }`}
        >
          <h2 className="font-medium text-lg">Services</h2>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover:bg-blue-600 p-1 rounded-md"
        >
          {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <div className="flex-1 pt-4 px-3">
        <SidebarNavItem
          icon={<Home size={20} />}
          text="Dashboard"
          isActive={activeNavItem === "Dashboard"}
          onClick={() => handleNavClick("Dashboard")}
          sidebarOpen={sidebarOpen}
        />

        <div
          onClick={() => handleNavClick("Patients")}
          className={`flex items-center p-2 mb-2 rounded-md cursor-pointer
            ${
              activeNavItem === "Patients"
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50 text-gray-600"
            }`}
        >
          <div
            className={`${
              activeNavItem === "Patients" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <Users size={20} />
          </div>
          {sidebarOpen && (
            <div className="flex items-center px-2 justify-between flex-1">
              <span className="font-medium">Patients</span>
              {patientsVisible ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
          )}
        </div>

        <SidebarNavItem
          icon={<Settings size={20} />}
          text="Settings"
          isActive={activeNavItem === "Settings"}
          onClick={() => handleNavClick("Settings")}
          sidebarOpen={sidebarOpen}
          showChevron={true}
          isExpanded={settingsVisible}
        />
      </div>

      {patientsVisible && (
        <div className="px-3 mb-2 " style={{ maxHeight: "300px" }}>
          <PatientSearch
            sidebarOpen={sidebarOpen}
            onPatientClick={onPatientClick}
          />
        </div>
      )}

      {settingsVisible && (
        <div className="px-3 mb-4">
          <button
            onClick={handleLogout}
            className={`flex items-center ${
              sidebarOpen ? "w-full" : "justify-center"
            } text-red-500 hover:bg-red-50 p-2 rounded-md`}
          >
            <LogOut size={18} />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </button>
        </div>
      )}
    </aside>
  );
}
