import {
  Search,
  Bell,
  ChevronDown
} from "lucide-react"

import {
  Link,
  useLocation
} from "react-router-dom"

function Topbar() {

  const location = useLocation()

  return (

    <header className="h-[72px] bg-white border-b border-gray-200">

      <div className="h-full px-6 flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-10">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              T
            </div>

            <span className="font-semibold text-gray-900">
              TradeJournal
            </span>

          </div>

          {/* NAVIGATION */}

          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/dashboard"
              className={`h-[72px] flex items-center border-b-2 transition-all ${
                location.pathname === "/dashboard"
                  ? "text-blue-600 border-blue-600 font-medium"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/reports"
              className={`h-[72px] flex items-center border-b-2 transition-all ${
                location.pathname === "/reports"
                  ? "text-blue-600 border-blue-600 font-medium"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              Reports
            </Link>

            <Link
              to="/settings"
              className={`h-[72px] flex items-center border-b-2 transition-all ${
                location.pathname === "/settings"
                  ? "text-blue-600 border-blue-600 font-medium"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              Settings
            </Link>

          </nav>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* SEARCH */}

          <div className="hidden xl:flex items-center gap-3 h-11 w-[300px] px-4 bg-white border border-gray-200 rounded-xl">

            <Search
              size={16}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search trades..."
              className="flex-1 outline-none bg-transparent text-sm"
            />

          </div>

          {/* NOTIFICATIONS */}

          <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">

            <Bell size={18} />

          </button>

          {/* PROFILE */}

          <button className="flex items-center gap-3 px-3 h-11 border border-gray-200 rounded-xl bg-white">

            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
              TJ
            </div>

            <span className="text-sm text-gray-900">
              Account
            </span>

            <ChevronDown
              size={16}
              className="text-gray-500"
            />

          </button>

        </div>

      </div>

    </header>

  )
}

export default Topbar