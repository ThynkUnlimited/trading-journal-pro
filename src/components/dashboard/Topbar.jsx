import {

  Bell,
  Search,
  ChevronDown

} from "lucide-react"

function Topbar() {

  const today =
    new Date().toLocaleDateString(
      "en-US",
      {

        weekday: "long",

        month: "short",

        day: "numeric"
      }
    )

  return (

    <div className="h-[78px] border-b border-zinc-900 bg-black/70 backdrop-blur-xl sticky top-0 z-50">

      <div className="h-full px-6 flex items-center justify-between">

        {/* LEFT */}

        <div>

          <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 mb-1">

            Trading Journal Pro

          </p>

          <h1 className="text-lg font-semibold text-white">

            Welcome back Trader 👋

          </h1>

        </div>

        {/* CENTER */}

        <div className="hidden lg:flex items-center">

          <div className="w-[360px] h-[44px] rounded-2xl bg-zinc-950 border border-zinc-800 px-4 flex items-center gap-3">

            <Search
              size={16}
              className="text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search trades..."

              className="bg-transparent outline-none border-none text-sm text-white placeholder:text-zinc-600 w-full"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* DATE */}

          <div className="hidden md:block text-right">

            <p className="text-xs text-zinc-500">

              Today

            </p>

            <p className="text-sm text-white font-medium">

              {today}

            </p>

          </div>

          {/* NOTIFICATION */}

          <button className="w-11 h-11 rounded-2xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all flex items-center justify-center text-zinc-400 hover:text-white relative">

            <Bell size={18} />

            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-400" />

          </button>

          {/* PROFILE */}

          <button className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-2xl px-3 py-2 hover:bg-zinc-900 transition-all">

            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-semibold">

              T

            </div>

            <div className="hidden md:block text-left">

              <p className="text-sm font-medium text-white">

                Trader

              </p>

              <p className="text-xs text-zinc-500">

                Premium Plan

              </p>

            </div>

            <ChevronDown
              size={16}
              className="text-zinc-500"
            />

          </button>

        </div>

      </div>

    </div>
  )
}

export default Topbar