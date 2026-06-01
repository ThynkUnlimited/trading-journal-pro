import {

  TrendingUp,
  BarChart3

} from "lucide-react"

function DashboardHeader() {

  const currentDate =
    new Date().toLocaleDateString(
      "en-US",
      {

        weekday: "long",

        month: "long",

        day: "numeric",

        year: "numeric"
      }
    )

  return (

    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">

      {/* LEFT */}

      <div>

        {/* TOP BADGE */}

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">

          <TrendingUp
            size={14}
            className="text-orange-400"
          />

          <span className="text-[11px] uppercase tracking-[0.18em] text-orange-400 font-semibold">

            Trading Journal Pro

          </span>

        </div>

        {/* TITLE */}

        <h1 className="text-3xl font-semibold tracking-tight text-white">

          Performance Dashboard

        </h1>

        {/* SUBTEXT */}

        <p className="text-sm text-zinc-500 mt-2 max-w-2xl leading-relaxed">

          Monitor execution quality, profitability,
          psychology and long-term trading consistency.

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* DATE */}

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 min-w-[220px]">

          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium mb-2">

            Current Session

          </p>

          <h3 className="text-sm font-semibold text-white">

            {currentDate}

          </h3>

        </div>

        {/* STATUS */}

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 min-w-[180px]">

          <div className="flex items-center gap-2 mb-2">

            <BarChart3
              size={14}
              className="text-green-400"
            />

            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium">

              System Status

            </p>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm font-semibold text-green-400">

              Analytics Active

            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DashboardHeader