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
            ${selectedDay === day.day ? "bg-blue-600 text-white" : ""}
          `}
        >
          {day.day}
        </div>
      ))}
    </div>
  );
};

export default MiniCalendar;
