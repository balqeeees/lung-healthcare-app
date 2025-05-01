import { ChevronUp, ChevronDown } from "lucide-react";

export default function SidebarNavItem({ 
  icon, 
  text, 
  isActive, 
  onClick, 
  sidebarOpen,
  showChevron = false,
  isExpanded = false
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
        ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "hover:bg-blue-50 text-gray-600"
        }`}
    >
      <div className="text-blue-400">
        {icon}
      </div>
      {sidebarOpen && (
        <div className="flex items-center justify-between flex-1">
          <span className="ml-2 font-medium">{text}</span>
          {showChevron && (
            isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
          )}
        </div>
      )}
    </div>
  );
}

