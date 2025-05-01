export default function SidebarItem({
  
  label,
  active,
  sidebarOpen,
  onClick,
  children,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all ${
        active ? "bg-blue-100 text-blue-700" : "hover:bg-blue-50 text-gray-600"
      }`}
    >
      <div className="text-blue-600">
        <Icon size={20} />
      </div>
      {sidebarOpen && (
        <div className="flex items-center justify-between flex-1 ml-3">
          <span className="font-medium">{label}</span>
          {children}
        </div>
      )}
    </div>
  );
}
