export const VISITS = [
  { name: "Samia Ali", time: "Sunday, 2:00PM - 5:00PM", status: "Confirmed" },
  { name: "John Doe", time: "Monday, 2:00PM - 5:00PM", status: "Pending" },
  {
    name: "Sarah Smith",
    time: "Tuesday, 2:00PM - 5:00PM",
  },
  {
    name: "Michael Johnson",
    time: "Wednesday, 2:00PM - 5:00PM",
    status: "Cancelled",
  },
  {
    name: "Emma Wilson",
    time: "Thursday, 2:00PM - 5:00PM",
  },
  { name: "Robert Brown", time: "Friday, 2:00PM - 5:00PM", status: "Pending" },
];

export const CALENDAR_DAYS = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  appointments: Math.floor(Math.random() * 5),
}));

export const getDayName = (dayNumber) => {
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
