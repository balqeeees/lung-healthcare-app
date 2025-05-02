import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendar } from "@/hooks/useCalendar";

export default function CalendarView({
  selectedDate,
  setSelectedDate,
  setCurrentView,
}) {
  const { currentMonth, currentYear, generateCalendarDays } = useCalendar();
  const days = generateCalendarDays();

  return (
    <div className="p-6">
      <div className="bg-blue-50 rounded-xl shadow-sm p-4 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-blue-800">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h4>
          <div className="flex space-x-2">
            <button
              aria-label="Previous month"
              className="p-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 text-blue-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next month"
              className="p-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 text-blue-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-blue-700 mb-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="py-1">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            const isSelected =
              selectedDate &&
              day.date &&
              selectedDate.toDateString() === day.date.toDateString();

            return (
              <button
                key={i}
                disabled={day.disabled || !day.day}
                onClick={() => {
                  if (!day.disabled && day.day !== "") {
                    setSelectedDate(day.date);
                    setCurrentView("time");
                  }
                }}
                className={`
                  w-9 h-9 flex items-center justify-center text-sm rounded-full
                  transition
                  ${!day.day ? "cursor-default" : ""}
                  ${day.disabled ? "text-gray-300 cursor-not-allowed" : ""}
                  ${day.isToday && !isSelected ? "bg-blue-600 text-white" : ""}
                  ${
                    !day.isToday && !isSelected && !day.disabled
                      ? "text-blue-800 hover:bg-blue-100"
                      : ""
                  }
                  ${
                    isSelected
                      ? "ring-2 ring-blue-500 bg-blue-500 text-white"
                      : ""
                  }
                `}
              >
                {day.day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-gray-600 leading-snug space-y-1">
        <p>• Weekends are unavailable</p>
        <p>• Appointments available up to 30 days in advance</p>
      </div>
    </div>
  );
}
