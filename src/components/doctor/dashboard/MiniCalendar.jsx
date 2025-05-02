import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MiniCalendar({
  calendarDays,
  handleDayClick,
  selectedDay,
}) {
  const [currentMonth, setCurrentMonth] = useState(3);
  const [currentYear, setCurrentYear] = useState(2025);

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

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  const calendarGrid = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
        week.push(null);
      } else {
        const currentDay = dayCounter;
        const dayInfo = calendarDays.find((d) => d.day === currentDay) || {
          day: currentDay,
          appointments: 0,
        };
        week.push(dayInfo);
        dayCounter++;
      }
    }
    calendarGrid.push(week);
    if (dayCounter > daysInMonth) break;
  }

  return (
    <div className="bg-white rounded-lg px-3 p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-semibold text-blue-900">
          {months[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarGrid.flatMap((week, weekIndex) =>
          week.map((dayInfo, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`relative aspect-square flex flex-col items-center justify-center p-1 rounded-full 
                ${
                  !dayInfo
                    ? "text-gray-300"
                    : dayInfo.day === selectedDay
                    ? "bg-blue-600 text-white font-bold"
                    : "hover:bg-blue-100 cursor-pointer"
                }`}
              onClick={() => dayInfo && handleDayClick(dayInfo.day)}
            >
              {dayInfo && (
                <>
                  <span className="text-sm">{dayInfo.day}</span>
                  {dayInfo.appointments > 0 && (
                    <div
                      className={`h-1 w-1 rounded-full mt-1 ${
                        dayInfo.day === selectedDay ? "bg-white" : "bg-blue-500"
                      }`}
                    />
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
        <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
        <span>Appointments scheduled</span>
      </div>
    </div>
  );
}
