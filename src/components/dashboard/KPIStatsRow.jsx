import {
  TrendingUp,
  Target,
  BarChart3,
  Activity,
  Trophy,
  CircleX
} from "lucide-react"

function KPIStatsRow({ trades = [] }) {

  const totalTrades = trades.length

  const winningTrades = trades.filter(
    trade => Number(trade.pnl) > 0
  ).length

  const losingTrades = trades.filter(
    trade => Number(trade.pnl) < 0
  ).length

  const netPnL = trades.reduce(
    (sum, trade) => sum + Number(trade.pnl || 0),
    0
  )

  const avgPnL =
    totalTrades > 0
      ? netPnL / totalTrades
      : 0

  const winRate =
    totalTrades > 0
      ? ((winningTrades / totalTrades) * 100).toFixed(1)
      : 0

  const metrics = [

    {
      title: "Net P&L",
      value: `$${netPnL.toFixed(2)}`,
      icon: TrendingUp
    },

    {
      title: "Win Rate",
      value: `${winRate}%`,
      icon: Target
    },

    {
      title: "Trades",
      value: totalTrades,
      icon: BarChart3
    },

    {
      title: "Avg P&L",
      value: `$${avgPnL.toFixed(2)}`,
      icon: Activity
    },

    {
      title: "Winners",
      value: winningTrades,
      icon: Trophy
    },

    {
      title: "Losers",
      value: losingTrades,
      icon: CircleX
    }
  ]

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-5">

      {metrics.map((metric) => {

        const Icon = metric.icon

        return (

          <div
            key={metric.title}
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
          >

            <div className="flex items-center justify-between">

              <p className="text-sm text-gray-500">
                {metric.title}
              </p>

              <Icon
                size={18}
                className="text-gray-400"
              />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-4">

              {metric.value}

            </h3>

          </div>

        )
      })}

    </div>

  )
}

export default KPIStatsRow