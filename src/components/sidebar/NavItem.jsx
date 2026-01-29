const NavItem = ({ icon, label, active = false, badge }) => {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer transition ${
        active ? "text-white" : "hover:text-white"
      }`}
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && (
        <span className="bg-white text-[#1A0B2E] text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

export default NavItem;
