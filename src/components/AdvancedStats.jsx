function AdvancedStats({

  trades

}) {

  const totalTrades =
    trades.length

  const wins =
    trades.filter(
      t => t.pnl > 0
    )

  const losses =
    trades.filter(
      t => t.pnl < 0
    )

  const grossProfit =
    wins.reduce(
      (acc, t) =>
        acc + Number(t.pnl),
      0
    )

  const grossLoss =
    losses.reduce(
      (acc, t) =>
        acc + Math.abs(Number(t.pnl)),
      0
    )

  const winRate =
    totalTrades > 0

      ? (
          wins.length /
          totalTrades
        ) * 100

      : 0

  const profitFactor =
    grossLoss > 0

      ? (
          grossProfit /
          grossLoss
        ).toFixed(2)

      : "0"

  const averageTrade =
    totalTrades > 0

      ? (
          trades.reduce(
            (acc, t) =>
              acc + Number(t.pnl),
            0
          ) / totalTrades
        ).toFixed(2)

      : "0"

  const stats = [

    {

      label:
        "Profit Factor",

      value:
        profitFactor
    },

    {

      label:
        "Average Trade",

      value:
        `$${averageTrade}`
    },

    {

      label:
        "Gross Profit",

      value:
        `$${grossProfit.toFixed(2)}`
    },

    {

      label:
        "Gross Loss",

      value:
        `$${grossLoss.toFixed(2)}`
    },

    {

      label:
        "Win Rate",

      value:
        `${winRate.toFixed(1)}%`
    }
  ]

  return (

    <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">

      {stats.map((item) => (

        <div
          key={item.label}

          className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4"
        >

          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">

            {item.label}

          </p>

          <h2 className="text-xl font-semibold text-white">

            {item.value}

          </h2>

        </div>
      ))}

    </div>
  )
}

export default AdvancedStats