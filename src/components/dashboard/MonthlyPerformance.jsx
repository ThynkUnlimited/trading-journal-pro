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
    "Dec"
  ]

  const monthlyTotals = {}

  months.forEach((month) => {
    monthlyTotals[month] = 0
  })

  trades.forEach((trade) => {

    const date = trade.createdAt?.toDate?.()

    if (!date) return

    const month = date.toLocaleString(
      "en-US",
      { month: "short" }
    )

    const pnl = Number(
      String(trade.pnl || 0)
        .replace("$", "")
        .replace(",", "")
    )

    monthlyTotals[month] += pnl
  })

  const totalPnL = Object.values(monthlyTotals)
    .reduce((sum, value) => sum + value, 0)

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-4 h-full">

      {/* HEADER */}

      <div className="mb-4">

        <h3 className="text-[14px] font-semibold text-gray-900">
          Monthly Performance
        </h3>

        <p className="text-[11px] text-gray-500 mt-1">
          Balance sheet overview
        </p>

      </div>

      {/* TOP MONTH LABELS */}

      <div className="grid grid-cols-12 gap-1 mb-2">

        {months.map((month) => (

          <div
            key={month}
            className="text-center text-[10px] font-semibold text-gray-500"
          >
            {month}
          </div>

        ))}

      </div>

      {/* PERFORMANCE BOXES */}

      <div className="grid grid-cols-12 gap-1">

        {months.map((month) => {

          const value = monthlyTotals[month]

          let bgColor = "bg-gray-100"

          if (value > 0) {
            bgColor = "bg-green-500"
          }

          if (value < 0) {
            bgColor = "bg-red-500"
          }

          return (

            <div
              key={month}
              className={`h-10 rounded-md flex items-center justify-center text-[10px] font-semibold text-white ${bgColor}`}
            >

              {value !== 0
                ? `$${Math.abs(value).toFixed(0)}`
                : "-"
              }

            </div>

          )
        })}

      </div>

      {/* TOTAL PNL */}

      <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between">

        <span className="text-[11px] font-semibold text-gray-600">
          Total Accumulated P&L
        </span>

        <span
          className={`text-[12px] font-bold ${
            totalPnL >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          ${totalPnL.toFixed(2)}
        </span>

      </div>

    </div>

  )
}

export default MonthlyPerformance