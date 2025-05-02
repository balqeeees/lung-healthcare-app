import { Field, ErrorMessage } from "formik";

export function renderField(name, placeholder, type = "text", className = "") {
  return (
    <div className={`flex flex-col ${className}`}>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 hover:border-sky-400 transition"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}

export function renderSelect(name, placeholder, options) {
  return (
    <div className="flex flex-col">
      <Field
        as="select"
        name={name}
        className="p-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 hover:border-sky-400 transition"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt[0].toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}

export function SubmitButton({ isSubmitting, label }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-48 bg-sky-600 text-white py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-500 disabled:opacity-50"
    >
      {isSubmitting ? "Submitting..." : label}
    </button>
  );
}
