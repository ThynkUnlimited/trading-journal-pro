import {

  LayoutDashboard,
  BarChart3,
  CalendarDays,
  NotebookPen,
  Settings,
  LogOut

} from "lucide-react"

function Sidebar() {

  const menuItems = [

    {
      title: "Dashboard",
      icon: LayoutDashboard,
      active: true
    },

    {
      title: "Analytics",
      icon: BarChart3
    },

    {
      title: "Journal",
      icon: NotebookPen
    },

    {
      title: "Calendar",
      icon: CalendarDays
    },

    {
      title: "Settings",
      icon: Settings
    }
  ]

  return (

    <aside className="w-[250px] bg-zinc-950 border-r border-zinc-900 min-h-screen flex flex-col justify-between">

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div className="px-6 py-6 border-b border-zinc-900">

          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-2">

            <div className="w-2 h-2 rounded-full bg-indigo-400" />

            <span className="text-xs tracking-[0.24em] uppercase text-indigo-300 font-semibold">

              Trading Journal Pro

            </span>

          </div>

        </div>

        {/* MENU */}

        <div className="p-4 space-y-2">

          {menuItems.map((item) => {

            const Icon =
              item.icon

            return (

              <button

                key={item.title}

                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium

                ${
                  item.active

                    ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"

                    : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
                }`}
              >

                <Icon size={18} />

                {item.title}

              </button>
            )
          })}

        </div>

      </div>

      {/* BOTTOM */}

      <div className="p-4 border-t border-zinc-900">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-all">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  )
}

export default Sidebar