import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/doctor/dashboard/Sidebar";
import StatCards from "@/components/doctor/dashboard/StatCards";
import VisitList from "@/components/doctor/dashboard/VisitList";
import { ArrowLeft } from "lucide-react";
import { Home } from "lucide-react";


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) setSidebarOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePatientClick = (patient) => {
    navigate(`/doctor/patient/${patient.id}`);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-blue-50">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onPatientClick={handlePatientClick}
      />

      <main className="flex-1 flex flex-col overflow-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {(!sidebarOpen || window.innerWidth < 768) && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Menu size={20} />
              </button>
            )}

            <h1 className="text-xl font-bold text-blue-500">
              Good Day Dr Ahmad
            </h1>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:text-blue-700"
          >
            <Home size={20} />
          </button>
        </div>

        <StatCards />

        <VisitList selectedDay={selectedDay} handleDayClick={handleDayClick} />
      </main>
    </div>
  );
}
