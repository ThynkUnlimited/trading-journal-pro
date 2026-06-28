function RecentTradesSection({ trades = [] }) {
  const recentTrades = trades.slice(0, 10)

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">

        <div>

          <h3 className="text-sm font-semibold text-gray-900">
            Recent Trades
          </h3>

          <p className="text-xs text-gray-500">
            Latest trading activity
          </p>

        </div>

        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">

          {recentTrades.length} Trades

        </span>

      </div>

      {/* TABLE */}

      <div className="overflow-auto max-h-[520px] rounded-lg border border-gray-100">

        {recentTrades.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-20">

            <div className="text-5xl mb-3">
              📈
            </div>

            <h3 className="text-lg font-semibold text-gray-700">

              No Trades Yet

            </h3>

            <p className="text-sm text-gray-500 mt-2">

              Your latest trades will appear here.

            </p>

          </div>

        ) : (

          <table className="min-w-full text-xs">

            <thead className="sticky top-0 bg-gray-50 z-10">

              <tr className="border-b border-gray-200">

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Date
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Symbol
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Setup
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Entry
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Exit
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  P&L
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  R:R
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Duration
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600">
                  Status
                </th>

                <th className="py-2.5 px-4 text-left font-semibold text-gray-600 min-w-[220px]">
                  Notes
                </th>

              </tr>

            </thead>

            <tbody>

              {recentTrades.map((trade) => {

                const pnl = Number(
                  String(trade.pnl || 0)
                    .replace("$", "")
                    .replace(",", "")
                )

                return (

                  <tr
                    key={trade.id}
                    className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                  >

                    {/* DATE */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-700">

                      {trade.createdAt?.toDate?.()
                        ?.toLocaleDateString() || "-"}

                    </td>

                    {/* SYMBOL */}

                    <td className="py-2.5 px-4 whitespace-nowrap font-semibold text-gray-900">

                      {trade.symbol || trade.pair || "-"}

                    </td>

                    {/* SETUP */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-900 font-medium">

                      {trade.setup || "-"}

                    </td>

                    {/* ENTRY */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-900">

                      {trade.entry || "-"}

                    </td>

                    {/* EXIT */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-900">

                      {trade.exit || "-"}

                    </td>

                    {/* PNL */}

                    <td
                      className={`py-2.5 px-4 font-bold whitespace-nowrap ${
                        pnl >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >

                      {trade.pnl || "-"}

                    </td>

                    {/* RR */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-900">

                      {trade.rr || "-"}

                    </td>

                    {/* DURATION */}

                    <td className="py-2.5 px-4 whitespace-nowrap text-gray-900">

                      {trade.duration || "-"}

                    </td>

                    {/* STATUS */}

                    <td className="py-2.5 px-4">

                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${
                          pnl >= 0
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-red-50 border-red-200 text-red-700"
                        }`}
                      >

                        {pnl >= 0 ? "Win" : "Loss"}

                      </span>

                    </td>

                    {/* NOTES */}

                    <td
                      className="py-2.5 px-4 max-w-xs truncate text-gray-800"
                      title={trade.notes}
                    >

                      {trade.notes || "-"}

                    </td>

                  </tr>

                )

              })}

            </tbody>

          </table>

        )}

      </div>

    </div>

  )

}

export default RecentTradesSection