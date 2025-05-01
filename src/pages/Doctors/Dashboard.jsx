import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PATIENTS } from "@/data/patients";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  Home,
  Users,
  Settings,
  LogOut,
  ChevronUp,
  ChevronDown,
} from "lucide-react";



const VISITS = [
  { name: "Samia Ali", time: "Sunday, 2:00PM - 5:00PM" },
  { name: "Samia Ali", time: "Monday, 2:00PM - 5:00PM" },
  { name: "Samia Ali", time: "Tuesday, 2:00PM - 5:00PM" },
  { name: "Samia Ali", time: "Wednesday, 2:00PM - 5:00PM" },
  { name: "Samia Ali", time: "Thursday, 2:00PM - 5:00PM" },
  { name: "Samia Ali", time: "Friday, 2:00PM - 5:00PM" },
];

const CALENDAR_DAYS = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  appointments: Math.floor(Math.random() * 5),
}));

const getDayName = (dayNumber) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(2025, 3, dayNumber);
  return days[date.getDay()];
};

const PatientList = ({
  patients,
  sidebarOpen,
  searchQuery,
  onPatientClick,
}) => {

const patientArray = Object.values(PATIENTS); // Convert the object to an array


const filteredPatients = patientArray.filter((patient) =>
  patient.name.toLowerCase().includes(searchQuery.toLowerCase())
);

console.log(filteredPatients);

console.log(filteredPatients);

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
            onClick={() => onPatientClick(patient)} // This triggers the navigation
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
};

const MiniCalendar = ({ calendarDays, handleDayClick, selectedDay }) => {
  return (
    <div className="mt-2 grid grid-cols-7 gap-1 text-center text-blue-800 text-xs">
      {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
        <div key={d} className="font-bold">
          {d}
        </div>
      ))}
      {calendarDays.slice(0, 28).map((day) => (
        <div
          key={day.day}
          onClick={() => handleDayClick(day.day)}
          className={`rounded-full w-6 h-6 flex items-center justify-center cursor-pointer transition-colors
            ${day.appointments > 0 ? "hover:bg-blue-200" : "hover:bg-gray-100"}
            ${day.appointments > 0 ? "font-medium" : "text-gray-500"}
            ${
              selectedDay === day.day
                ? "bg-blue-600 text-white"
                : day.appointments > 0
                ? "bg-blue-100"
                : ""
            }
          `}
        >
          {day.day}
        </div>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const [patientsVisible, setPatientsVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const visitsRef = useRef(null);
  const patientListScrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) setSidebarOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const handleLogout = () => navigate("/");
console.log(PATIENTS); 

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
const handlePatientClick = (patient) => {
  navigate(`/doctor/patient/${patient.id}`); 

  
};
  return (
    <div className="flex h-screen overflow-hidden bg-blue-50">
      <aside
        className={`transition-all duration-300 bg-white shadow-lg border-r border-blue-100
          ${sidebarOpen ? "w-64" : "w-16"} flex flex-col z-20`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div
            className={`transition-all duration-300 overflow-hidden ${
              sidebarOpen ? "w-40" : "w-0"
            }`}
          >
            <h2 className="font-bold text-lg whitespace-nowrap">Services</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-blue-700 p-1 rounded-md transition-colors"
          >
            {sidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>

        <div className="mt-6 px-2">
          <div
            onClick={() => handleNavClick("Dashboard")}
            className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
              ${
                activeNavItem === "Dashboard"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-50 text-gray-600"
              }`}
          >
            <div className="text-blue-600">
              <Home size={20} />
            </div>
            {sidebarOpen && <span className="ml-3 font-medium">Dashboard</span>}
          </div>

          <div
            onClick={() => handleNavClick("Patients")}
            className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
              ${
                activeNavItem === "Patients"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-50 text-gray-600"
              }`}
          >
            <div className="text-blue-600">
              <Users size={20} />
            </div>
            {sidebarOpen && (
              <div className="flex items-center justify-between flex-1">
                <span className="font-medium">Patients</span>
                {patientsVisible ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>
            )}
          </div>

          <div
            onClick={() => handleNavClick("Settings")}
            className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
              ${
                activeNavItem === "Settings"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-50 text-gray-600"
              }`}
          >
            <div className="text-blue-600">
              <Settings size={20} />
            </div>
            {sidebarOpen && (
              <div className="flex items-center justify-between flex-1">
                <span className="ml-3 font-medium">Settings</span>
                {settingsVisible ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>
            )}
          </div>
        </div>

        {settingsVisible && (
          <div className="px-4 mt-2 mb-2">
            <button
              onClick={handleLogout}
              className={`flex items-center ${
                sidebarOpen ? "w-full" : "justify-center"
              } text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg transition-colors mb-2`}
            >
              <LogOut size={18} />
              {sidebarOpen && <span className="ml-2">Logout</span>}
            </button>
          </div>
        )}

        {patientsVisible && (
          <div className="px-2 mt-2 mb-2" ref={patientListScrollRef}>
            {sidebarOpen && (
              <div className="px-2 mb-3">
                <div className="relative">
                  <input
                    type="text"
                    value={sidebarSearchQuery}
                    onChange={(e) => setSidebarSearchQuery(e.target.value)}
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
                searchQuery={sidebarSearchQuery}
                onPatientClick={handlePatientClick}
              />
            </ScrollArea>
          </div>
        )}
      </aside>

      <main className="flex-1 flex flex-col overflow-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            {(!sidebarOpen || window.innerWidth < 768) && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="mr-4 text-blue-500 hover:text-blue-700"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-2xl font-bold text-blue-900">
              Good Day Dr Ahmad
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-blue-500 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-sm">You Have</p>
                  <h2 className="text-3xl font-bold">22</h2>
                  <p className="text-sm">appointments this week</p>
                </div>
                <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
                  +15% vs last week
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-700 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-sm">Cancelled</p>
                  <h2 className="text-3xl font-bold">4</h2>
                  <p className="text-sm">appointments</p>
                </div>
                <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
                  -10% vs last week
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-sm">New Issue Images</p>
                  <h2 className="text-3xl font-bold">18</h2>
                </div>
                <div className="text-xs bg-blue-800 px-2 py-1 rounded-full h-fit">
                  +32% vs last week
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div ref={visitsRef}>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            {selectedDay ? `Visits for Day ${selectedDay}` : "Upcoming Visits"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {VISITS.filter((visit) => {
              if (!selectedDay) return true;
              return visit.time
                .toLowerCase()
                .includes(getDayName(selectedDay).toLowerCase());
            }).map((visit, idx) => (
              <Card key={idx} className="border border-blue-200">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-12 w-12 mx-auto mb-2 bg-blue-200">
                    <AvatarFallback className="text-blue-800">
                      {visit.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-blue-900">{visit.name}</h3>
                  <p className="text-blue-600 text-sm">{visit.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
