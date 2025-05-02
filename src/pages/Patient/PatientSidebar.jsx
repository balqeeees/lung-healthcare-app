import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  AlertCircle,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useRef, useEffect } from "react";
import CalendarView from "./DialogViews/CalendarView";
import TimeView from "./DialogViews/TimeView";
import DetailsView from "./DialogViews/DetailsView";
import { statusColors } from "@/utils/statusUtils";

export default function AppointmentSidebar({
  sidebarOpen,
  setSidebarOpen,
  patient,
  isMobile,
}) {
  const [hoveredAppointment, setHoveredAppointment] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentReason, setAppointmentReason] = useState("");
  const [currentView, setCurrentView] = useState("calendar");
  const [appointments, setAppointments] = useState([]);

  const dialogRef = useRef(null);
  const initialFocusRef = useRef(null);

  useEffect(() => {
    if (patient && patient.appointments) {
      setAppointments(patient.appointments);
    }
  }, [patient]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isDialogOpen) setIsDialogOpen(false);
    };
    const handleClickOutside = (e) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target) &&
        isDialogOpen
      ) {
        setIsDialogOpen(false);
      }
    };
    if (isDialogOpen && initialFocusRef.current) {
      setTimeout(() => {
        initialFocusRef.current.focus();
      }, 0);
    }
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDialogOpen]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
    setCurrentView("calendar");
    setSelectedDate(null);
    setSelectedTime(null);
    setAppointmentReason("");
    document.body.style.overflow = "hidden";
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    document.body.style.overflow = "";
  };

  const handleScheduleAppointment = () => {
    const newAppointment = {
      date: selectedDate.toLocaleDateString("en-US"),
      time: selectedTime,
      day: selectedDate.toLocaleDateString("en-US", { weekday: "long" }),
      status: "Upcoming",
    };

    setAppointments((prev) => [...prev, newAppointment]);
    handleDialogClose();
  };

  if (!patient) return null;

  return (
    <>
      <aside
        className={`transition-all duration-300 bg-white shadow-lg border-r border-blue-100 ${
          sidebarOpen ? "w-full max-w-md" : "w-0 md:w-16"
        } flex flex-col z-30 ${
          isMobile && sidebarOpen ? "absolute h-full" : ""
        } overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <h2
              className={`text-sm font-bold uppercase tracking-wide transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0 md:hidden"
              }`}
            >
              Appointments
            </h2>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-blue-500 p-2 rounded-full hidden md:flex"
          >
            {sidebarOpen ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        </div>

        {sidebarOpen && (
          <>
            <div className="p-4 flex items-center gap-4 border-b">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                <User size={20} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-blue-800">
                  {patient.name || "Patient"}
                </h3>
                <p className="text-xs text-blue-600">
                  {appointments.length} appointment
                  {appointments.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <div className="p-4">
              <button
                className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                onClick={handleDialogOpen}
              >
                <Calendar size={16} />
                <span>Schedule New</span>
              </button>
            </div>
          </>
        )}

        <ScrollArea className="flex-1 p-4">
          {sidebarOpen && (
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-blue-900 uppercase mb-2">
                Appointments
              </h3>
              <div className="space-y-3">
                {appointments.length === 0 ? (
                  <div className="flex flex-col items-center text-gray-400 py-10">
                    <Calendar size={32} className="mb-2 text-blue-300" />
                    <p className="text-sm">No appointments scheduled</p>
                    <button
                      onClick={handleDialogOpen}
                      className="mt-2 text-xs text-blue-500 hover:text-blue-700 underline"
                    >
                      Schedule now
                    </button>
                  </div>
                ) : (
                  appointments.map((appt, i) => {
                    const badgeColor =
                      statusColors[appt.status] || "bg-blue-100 text-blue-800";

                    return (
                      <div
                        key={i}
                        className="bg-white border border-blue-100 rounded-lg p-3 shadow-sm hover:shadow transition"
                        onMouseEnter={() => setHoveredAppointment(i)}
                        onMouseLeave={() => setHoveredAppointment(null)}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-blue-900">
                            {appt.date}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${badgeColor}`}
                          >
                            {appt.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-700">
                          <Clock size={12} />
                          {appt.day} — {appt.time}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </ScrollArea>
      </aside>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            ref={dialogRef}
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="border-b px-6 py-4 flex justify-between items-center bg-white">
              <h3 className="text-base font-semibold text-blue-700">
                {currentView === "calendar" && "Step 1: Choose a Date"}
                {currentView === "time" && "Step 2: Choose a Time"}
                {currentView === "details" && "Step 3: Enter Details"}
              </h3>
              <button
                onClick={handleDialogClose}
                className="p-1 text-blue-600 hover:bg-blue-100 rounded-full"
                ref={initialFocusRef}
              >
                <X size={20} />
              </button>
            </div>

            {currentView === "calendar" && (
              <CalendarView
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setCurrentView={setCurrentView}
              />
            )}
            {currentView === "time" && (
              <TimeView
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                setCurrentView={setCurrentView}
              />
            )}
            {currentView === "details" && (
              <DetailsView
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                appointmentReason={appointmentReason}
                setAppointmentReason={setAppointmentReason}
                onCancel={handleDialogClose}
                onConfirm={handleScheduleAppointment}
              />
            )}

            <div className="bg-gray-50 p-3 text-xs text-center text-gray-500">
              {currentView === "calendar" && "Step 1 of 3: Select a date"}
              {currentView === "time" && "Step 2 of 3: Select a time"}
              {currentView === "details" && "Step 3 of 3: Complete details"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
