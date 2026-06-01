function AnalyticsSummary({ trades }) {

  const totalPnL =
    trades.reduce(
      (acc, trade) =>
        acc + Number(trade.pnl || 0),
      0
    )

  const averagePnL =
    trades.length > 0

      ? (
          totalPnL / trades.length
        ).toFixed(2)

      : 0

  const bestTrade =
    trades.length > 0

      ? Math.max(
          ...trades.map(
            trade =>
              Number(trade.pnl || 0)
          )
        )

      : 0

  const worstTrade =
    trades.length > 0

      ? Math.min(
          ...trades.map(
            trade =>
              Number(trade.pnl || 0)
          )
        )

      : 0

  const metrics = [

    {
      label: "Average Trade",
      value: `$${averagePnL}`
    },

    {
      label: "Best Trade",
      value: `$${bestTrade}`
    },

    {
      label: "Worst Trade",
      value: `$${worstTrade}`
    },

    {
      label: "Net Performance",
      value: `$${totalPnL.toFixed(2)}`
    }
  ]

  return (

    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl px-6 py-5">

      <div className="flex flex-wrap items-center gap-8">

        {metrics.map((metric, index) => (

          <div
            key={index}

            className="min-w-[160px]"
          >

            {/* LABEL */}

            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium mb-2">

              {metric.label}

            </p>

            {/* VALUE */}

            <h3
              className={`text-lg font-semibold tracking-tight

              ${
                metric.label === "Worst Trade"

                ? "text-red-400"

                : metric.label === "Best Trade"

                ? "text-green-400"

                : "text-white"
              }`}
            >

              {metric.value}

            </h3>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AnalyticsSummary