import {
  LayoutDashboard,
  BarChart3,
  BookOpen,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics",
    key: "analytics",
    icon: BarChart3,
  },
  {
    label: "Journal",
    key: "journal",
    icon: BookOpen,
  },
  {
    label: "Calendar",
    key: "calendar",
    icon: CalendarDays,
  },
  {
    label: "Settings",
    key: "settings",
    icon: Settings,
  },
];

export default function Sidebar({
  activeTab,
  setActiveTab,
  onLogout,
}) {
  return (
    <div className="flex h-full flex-col text-white">
      {/* TOP */}
      <div className="border-b border-white/10 px-5 py-5">
        <h1 className="text-lg font-semibold tracking-wide">
          TradeFlow
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Trading Journal
        </p>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = activeTab === item.key;

            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#1e293b] text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    active
                      ? "text-cyan-400"
                      : "text-slate-500"
                  }
                />

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LOGOUT */}
      <div className="border-t border-white/10 p-3">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={18} />

          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}