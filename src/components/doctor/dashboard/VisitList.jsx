import { useRef, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import MiniCalendar from "./MiniCalendar";
import { VISITS } from "@/data/constants";

// Constants
const MONTH = 3; // April
const CALENDAR_DAYS = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  appointments: Math.floor(Math.random() * 5),
}));

// Helpers
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
  const date = new Date(2025, MONTH, dayNumber);
  return days[date.getDay()];
};

const getMonthName = ()=> {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[MONTH];
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function VisitList({ selectedDay, handleDayClick }) {
  const visitsRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVisits = useMemo(() => {
    return VISITS.filter((visit) => {
      const matchesSelectedDay =
        !selectedDay ||
        visit.time
          .toLowerCase()
          .includes(getDayName(selectedDay).toLowerCase());

      const matchesSearchTerm =
        !searchTerm ||
        visit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visit.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visit.status.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSelectedDay && matchesSearchTerm;
    });
  }, [selectedDay, searchTerm]);

  return (
    <div
      ref={visitsRef}
      className="bg-white rounded-2xl p-6 border border-gray-100"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">
          {selectedDay
            ? `Visits for ${getDayName(
                selectedDay
              )}, ${getMonthName()} ${selectedDay}`
            : "Upcoming Visits"}
        </h2>
        <div className="w-full md:w-64">
          <MiniCalendar
            calendarDays={CALENDAR_DAYS}
            handleDayClick={handleDayClick}
            selectedDay={selectedDay}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Search visits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Visit Cards */}
      {filteredVisits.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          No visits found for your selection
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVisits.map((visit, idx) => (
            <Card
              key={idx}
              className="hover:shadow-md border border-gray-100 transition-shadow"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar className="h-12 w-12 bg-blue-100">
                    <AvatarFallback className="text-blue-700 font-medium">
                      {getInitials(visit.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-blue-900">{visit.name}</h3>
                </div>
                <div className="bg-blue-50 px-3 py-2 rounded-md text-sm text-blue-800 font-medium">
                  {visit.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
