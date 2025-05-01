import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen, children }) {
  return (
    <aside
      className={`transition-all duration-300 bg-white shadow-lg border-r border-blue-100 flex flex-col z-20 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div
          className={`transition-all overflow-hidden ${
            sidebarOpen ? "w-40" : "w-0"
          }`}
        >
          <h2 className="font-bold text-lg whitespace-nowrap">Services</h2>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white hover:bg-blue-700 p-1 rounded-md transition-colors"
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      {children}
    </aside>
  );
}
