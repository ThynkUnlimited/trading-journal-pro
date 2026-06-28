import {
  Target,
  Briefcase,
  CandlestickChart,
  DollarSign,
} from "lucide-react";

function AnalyticsSection({ trades = [] }) {
  const totalTrades = trades.length;

  const winningTrades = trades.filter(
    (trade) => Number(trade.pnl) > 0
  ).length;

  const winRate =
    totalTrades > 0
      ? ((winningTrades / totalTrades) * 100).toFixed(1)
      : "0";

  // Most used strategy
  const strategyCount = {};
  trades.forEach((trade) => {
    const setup = trade.setup || "N/A";
    strategyCount[setup] = (strategyCount[setup] || 0) + 1;
  });

  const bestStrategy =
    Object.keys(strategyCount).length > 0
      ? Object.entries(strategyCount).sort(
          (a, b) => b[1] - a[1]
        )[0][0]
      : "-";

  // Most traded asset
  const assetCount = {};
  trades.forEach((trade) => {
    const asset = trade.symbol || trade.pair || "-";
    assetCount[asset] = (assetCount[asset] || 0) + 1;
  });

  const mostTradedAsset =
    Object.keys(assetCount).length > 0
      ? Object.entries(assetCount).sort(
          (a, b) => b[1] - a[1]
        )[0][0]
      : "-";

  // Net Profit
  const netProfit = trades.reduce(
    (sum, trade) => sum + Number(trade.pnl || 0),
    0
  );

  const cards = [
    {
      title: "Win Rate",
      value: `${winRate}%`,
      subtitle: `${winningTrades} winning trades`,
      icon: Target,
      color: "text-green-600",
    },

    {
      title: "Best Strategy",
      value: bestStrategy,
      subtitle: "Most profitable setup",
      icon: Briefcase,
      color: "text-blue-600",
    },

    {
      title: "Most Traded",
      value: mostTradedAsset,
      subtitle: "Favourite market",
      icon: CandlestickChart,
      color: "text-indigo-600",
    },

    {
      title: "Net Profit",
      value: `$${netProfit.toFixed(2)}`,
      subtitle: "Overall performance",
      icon: DollarSign,
      color:
        netProfit >= 0
          ? "text-green-600"
          : "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">

              <span className="text-xs font-medium text-gray-500">
                {card.title}
              </span>

              <Icon
                size={18}
                className={card.color}
              />

            </div>

            <h2 className={`text-2xl font-bold mt-3 ${card.color}`}>
              {card.value}
            </h2>

            <p className="text-[11px] text-gray-400 mt-1">
              {card.subtitle}
            </p>

          </div>
        );
      })}
    </div>
  );
}

export default AnalyticsSection;