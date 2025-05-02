export default function TimeView({
  selectedDate,
  selectedTime,
  setSelectedTime,
  setCurrentView,
}) {
  const getAvailableTimes = () => [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ];

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="p-6">
      <div className="mb-3">
        <p className="text-sm text-blue-700">
          Selected date:{" "}
          <span className="font-medium">{formatDate(selectedDate)}</span>
        </p>
        <button
          onClick={() => setCurrentView("calendar")}
          className="text-xs text-blue-600 hover:text-blue-800 underline mt-1"
        >
          Change date
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {getAvailableTimes().map((time) => (
          <button
            key={time}
            onClick={() => {
              setSelectedTime(time);
              setCurrentView("details");
            }}
            className={`py-2 px-3 rounded-md border text-sm font-medium transition 
              ${
                selectedTime === time
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white border-gray-200 text-blue-800 hover:border-blue-400 hover:bg-blue-50"
              }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
