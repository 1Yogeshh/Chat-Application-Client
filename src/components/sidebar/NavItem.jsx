const NavItem = ({ icon, label, active = false, badge }) => {
    return (
        <div className={`
            flex items-center justify-between cursor-pointer transition
            ${active ? "text-white" : "hover:text-white"}
        `}>
            <div className="flex items-center gap-4">
                {/* Icon hamesha dikhega */}
                <span className="flex-shrink-0">{icon}</span>
                {/* Label sirf md+ pe */}
                <span className="hidden lg2:inline text-sm font-medium">{label}</span>
            </div>

            {/* Badge sirf md+ pe */}
            {badge && (
                <span className="hidden lg2:inline bg-white text-[#1A0B2E] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {badge}
                </span>
            )}
        </div>
    );
};

export default NavItem;