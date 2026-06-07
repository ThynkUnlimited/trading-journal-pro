function RecentTradesSection({ trades = [] }) {

  const recentTrades = trades.slice(0, 10)

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      {/* HEADER */}

      <div className="mb-5">

        <h3 className="text-[14px] font-bold text-gray-900">
          Recent Trades
        </h3>

        <p className="text-[11px] text-gray-500 mt-1">
          Latest trading activity
        </p>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-gray-200">

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                Date
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 min-w-[110px] whitespace-nowrap">
                Symbol
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 min-w-[120px] whitespace-nowrap">
                Setup
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                Entry
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                Exit
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                P&L
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                R:R
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                Duration
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 whitespace-nowrap">
                Status
              </th>

              <th className="py-3 px-4 text-left text-[12px] font-bold text-gray-700 min-w-[220px]">
                Notes
              </th>

            </tr>

          </thead>

          <tbody>

            {recentTrades.length === 0 ? (

              <tr>

                <td
                  colSpan="10"
                  className="py-8 text-center text-[12px] text-gray-400"
                >
                  No trades recorded
                </td>

              </tr>

            ) : (

              recentTrades.map((trade) => {

                const pnl = Number(
                  String(trade.pnl || 0)
                    .replace("$", "")
                    .replace(",", "")
                )

                return (

                  <tr
                    key={trade.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >

                    {/* DATE */}

                    <td className="py-3 px-4 text-[12px] text-gray-800 whitespace-nowrap">

                      {trade.createdAt?.toDate?.()
                        ?.toLocaleDateString?.() || "-"}

                    </td>

                    {/* SYMBOL */}

                    <td className="py-3 px-4 text-[12px] font-semibold text-black whitespace-nowrap">

                      {trade.symbol || trade.pair || "-"}

                    </td>

                    {/* SETUP */}

                    <td className="py-3 px-4 text-[12px] text-black whitespace-nowrap">

                      {trade.setup || "-"}

                    </td>

                    {/* ENTRY */}

                    <td className="py-3 px-4 text-[12px] text-black whitespace-nowrap">

                      {trade.entry || "-"}

                    </td>

                    {/* EXIT */}

                    <td className="py-3 px-4 text-[12px] text-black whitespace-nowrap">

                      {trade.exit || "-"}

                    </td>

                    {/* PNL */}

                    <td
                      className={`py-3 px-4 text-[12px] font-semibold whitespace-nowrap ${
                        pnl >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >

                      {trade.pnl || "-"}

                    </td>

                    {/* RR */}

                    <td className="py-3 px-4 text-[12px] text-black whitespace-nowrap">

                      {trade.rr || "-"}

                    </td>

                    {/* DURATION */}

                    <td className="py-3 px-4 text-[12px] text-black whitespace-nowrap">

                      {trade.duration || "-"}

                    </td>

                    {/* STATUS */}

                    <td className="py-3 px-4 whitespace-nowrap">

                      <span
                        className={`px-2 py-1 rounded-full text-[11px] font-semibold ${
                          pnl >= 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >

                        {pnl >= 0
                          ? "Win"
                          : "Loss"}

                      </span>

                    </td>

                    {/* NOTES */}

                    <td className="py-3 px-4 text-[12px] text-gray-700">

                      {trade.notes || "-"}

                    </td>

                  </tr>

                )
              })

            )}

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default RecentTradesSection