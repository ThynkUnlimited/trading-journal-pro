import { CalendarDays, Trophy } from "lucide-react";

function MonthlyPerformance({ trades = [] }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyTotals = {};

  months.forEach((m) => {
    monthlyTotals[m] = 0;
  });

  trades.forEach((trade) => {
    const date = trade.createdAt?.toDate?.();

    if (!date) return;

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const pnl = Number(
      String(trade.pnl || 0)
        .replace("$", "")
        .replace(",", "")
    );

    monthlyTotals[month] += pnl;
  });

  const totalPnL = Object.values(monthlyTotals).reduce(
    (sum, value) => sum + value,
    0
  );

  const bestMonth =
    Object.entries(monthlyTotals).sort((a, b) => b[1] - a[1])[0] || [];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 h-[360px] flex flex-col">
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Monthly Performance
          </h3>

          <p className="text-xs text-gray-500">
            Trading results by month
          </p>
        </div>

        <CalendarDays
          size={18}
          className="text-blue-600"
        />
      </div>

      {/* Months */}

      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {months.map((month) => {
          const value = monthlyTotals[month];

          return (
            <div
              key={month}
              className="flex items-center justify-between border-b border-gray-100 pb-2"
            >
              <span className="font-medium text-gray-700">
                {month}
              </span>

              <span
                className={`font-semibold ${
                  value > 0
                    ? "text-green-600"
                    : value < 0
                    ? "text-red-600"
                    : "text-gray-400"
                }`}
              >
                {value === 0
                  ? "-"
                  : `${value > 0 ? "+" : ""}$${value.toFixed(2)}`}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}

      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">
            Total P&L
          </p>

          <p
            className={`font-bold ${
              totalPnL >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            ${totalPnL.toFixed(2)}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500 flex items-center justify-end gap-1">
            <Trophy size={14} />
            Best Month
          </p>

          <p className="font-semibold text-blue-600">
            {bestMonth[0]} ({bestMonth[1] > 0 ? "+" : ""}$
            {Number(bestMonth[1] || 0).toFixed(2)})
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyPerformance;