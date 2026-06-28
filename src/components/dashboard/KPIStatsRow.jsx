import {
  TrendingUp,
  Target,
  BarChart3,
  Activity,
  Trophy,
  CircleX,
} from "lucide-react";

function KPIStatsRow({ trades = [] }) {
  const totalTrades = trades.length;

  const winningTrades = trades.filter(
    (trade) => Number(trade.pnl) > 0
  ).length;

  const losingTrades = trades.filter(
    (trade) => Number(trade.pnl) < 0
  ).length;

  const netPnL = trades.reduce(
    (sum, trade) => sum + Number(trade.pnl || 0),
    0
  );

  const avgPnL =
    totalTrades > 0 ? netPnL / totalTrades : 0;

  const winRate =
    totalTrades > 0
      ? ((winningTrades / totalTrades) * 100).toFixed(1)
      : 0;

  const metrics = [
    {
      title: "Net P&L",
      value: `$${netPnL.toFixed(2)}`,
      icon: TrendingUp,
      color:
        netPnL >= 0
          ? "text-green-600"
          : "text-red-600",
    },

    {
      title: "Win Rate",
      value: `${winRate}%`,
      icon: Target,
      color: "text-blue-600",
    },

    {
      title: "Trades",
      value: totalTrades,
      icon: BarChart3,
      color: "text-indigo-600",
    },

    {
      title: "Avg P&L",
      value: `$${avgPnL.toFixed(2)}`,
      icon: Activity,
      color:
        avgPnL >= 0
          ? "text-green-600"
          : "text-red-600",
    },

    {
      title: "Winners",
      value: winningTrades,
      icon: Trophy,
      color: "text-emerald-600",
    },

    {
      title: "Losers",
      value: losingTrades,
      icon: CircleX,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">
                {metric.title}
              </span>

              <Icon
                size={16}
                className={metric.color}
              />
            </div>

            <h2
              className={`mt-3 text-2xl font-bold ${metric.color}`}
            >
              {metric.value}
            </h2>

            <p className="mt-1 text-[11px] text-gray-400">
              Updated automatically
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default KPIStatsRow;