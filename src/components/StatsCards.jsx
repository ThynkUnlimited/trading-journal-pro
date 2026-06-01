import {

  motion

} from "framer-motion"

import {

  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign

} from "lucide-react"

function StatsCards({

  trades

}) {

  const totalTrades =
    trades.length

  const winningTrades =
    trades.filter(
      trade => trade.pnl > 0
    )

  const losingTrades =
    trades.filter(
      trade => trade.pnl < 0
    )

  const totalPnL =
    trades.reduce(

      (acc, trade) =>

        acc +
        Number(trade.pnl || 0),

      0
    )

  const winRate =
    totalTrades > 0

      ? (
          winningTrades.length /
          totalTrades
        ) * 100

      : 0

  const stats = [

    {

      title:
        "Total Trades",

      value:
        totalTrades,

      subtitle:
        "Executed positions",

      icon:
        <Activity size={18} />,

      glow:
        "from-indigo-500/20 to-indigo-500/0"
    },

    {

      title:
        "Net PnL",

      value:
        `$${totalPnL.toFixed(2)}`,

      subtitle:
        totalPnL >= 0

          ? "Profitable"

          : "Drawdown",

      icon:
        totalPnL >= 0

          ? <TrendingUp size={18} />

          : <TrendingDown size={18} />,

      glow:
        totalPnL >= 0

          ? "from-emerald-500/20 to-emerald-500/0"

          : "from-red-500/20 to-red-500/0"
    },

    {

      title:
        "Win Rate",

      value:
        `${winRate.toFixed(1)}%`,

      subtitle:
        `${winningTrades.length} wins`,

      icon:
        <TrendingUp size={18} />,

      glow:
        "from-blue-500/20 to-blue-500/0"
    },

    {

      title:
        "Losses",

      value:
        losingTrades.length,

      subtitle:
        "Risk exposure",

      icon:
        <DollarSign size={18} />,

      glow:
        "from-orange-500/20 to-orange-500/0"
    }
  ]

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      {stats.map((card, index) => (

        <motion.div

          key={card.title}

          initial={{
            opacity: 0,
            y: 18
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.35,
            delay: index * 0.08
          }}

          whileHover={{
            y: -4
          }}

          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
        >

          {/* GLOW */}

          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.glow}`}
          />

          {/* CONTENT */}

          <div className="relative z-10">

            {/* TOP */}

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">

                  {card.title}

                </p>

              </div>

              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">

                {card.icon}

              </div>

            </div>

            {/* VALUE */}

            <h2
              className={`text-3xl font-semibold tracking-tight mb-1

              ${
                card.title === "Net PnL"

                ? totalPnL >= 0

                  ? "text-emerald-400"

                  : "text-red-400"

                : "text-white"
              }`}
            >

              {card.value}

            </h2>

            {/* SUBTITLE */}

            <p className="text-xs text-zinc-500">

              {card.subtitle}

            </p>

          </div>

        </motion.div>
      ))}

    </div>
  )
}

export default StatsCards