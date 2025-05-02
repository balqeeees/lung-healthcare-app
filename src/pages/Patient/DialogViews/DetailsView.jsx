import { Check } from "lucide-react";

export default function DetailsView({
  selectedDate,
  selectedTime,
  appointmentReason,
  setAppointmentReason,
  onCancel,
  onConfirm,
}) {
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="p-6">
      <p className="text-sm text-blue-700 mb-3">
        Appointment on{" "}
        <span className="font-medium">{formatDate(selectedDate)}</span> at{" "}
        <span className="font-medium">{selectedTime}</span>
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Reason for appointment
      </label>
      <textarea
        value={appointmentReason}
        onChange={(e) => setAppointmentReason(e.target.value)}
        rows={3}
        placeholder="Describe the reason for your visit"
        className="w-full p-2 text-sm border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <div className="flex justify-end items-center gap-3 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={!appointmentReason.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check size={16} />
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
