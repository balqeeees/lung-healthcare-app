export const useCalendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", disabled: true });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isPast = date < now;
      const isWeekend = date.getDay() === 5 || date.getDay() === 6;

      days.push({
        day: i,
        date,
        disabled: isPast || isWeekend,
        isToday: i === today.getDate() && !isPast,
      });
    }

    return days;
  };

  return {
    currentMonth,
    currentYear,
    generateCalendarDays,
  };
};
