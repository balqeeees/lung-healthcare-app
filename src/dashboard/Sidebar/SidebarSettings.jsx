import { LogOut } from "lucide-react";

export default function SidebarSettings({ sidebarOpen, onLogout }) {
  return (
    <div className="px-4 mt-2 mb-2">
      <button
        onClick={onLogout}
        className={`flex items-center ${
          sidebarOpen ? "w-full" : "justify-center"
        } text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg transition-colors mb-2`}
      >
        <LogOut size={18} />
        {sidebarOpen && <span className="ml-2">Logout</span>}
      </button>
    </div>
  );
}
