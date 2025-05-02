export default function SectionCard({ title, icon, children }) {
  return (
    <section className="bg-white rounded-lg shadow p-6 border border-sky-100">
      <h2 className="text-center text-lg font-semibold text-sky-800 mb-6 flex justify-center items-center gap-2">
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}
