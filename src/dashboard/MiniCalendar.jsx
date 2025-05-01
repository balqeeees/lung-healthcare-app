const MiniCalendar = ({ calendarDays, handleDayClick, selectedDay }) => {
  return (
    <div className="mt-2 grid grid-cols-7 gap-1 text-center text-blue-800 text-xs">
      {/* Weekday initials */}
      {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
        <div key={d} className="font-semibold pb-1 text-gray-500">
          {d}
        </div>
      ))}

      {/* Day numbers */}
      {calendarDays.slice(0, 28).map((day) => {
        const isSelected = selectedDay === day.day;
        const hasAppointments = day.appointments > 0;

        return (
          <div
            key={day.day}
            role="button"
            tabIndex={0}
            onClick={() => handleDayClick(day.day)}
            className={`
              rounded-full aspect-square w-6 flex items-center justify-center text-xs cursor-pointer
              transition-colors duration-200
              ${isSelected ? "bg-blue-600 text-white font-semibold" : ""}
              ${
                !isSelected && hasAppointments
                  ? "hover:bg-blue-100 text-blue-700 font-medium"
                  : ""
              }
              ${
                !isSelected && !hasAppointments
                  ? "text-gray-400 hover:bg-gray-100"
                  : ""
              }
            `}
          >
            {day.day}
          </div>
        );
      })}
    </div>
  );
};

export default MiniCalendar;
