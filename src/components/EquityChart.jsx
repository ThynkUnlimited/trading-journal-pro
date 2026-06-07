import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts"

function EquityChart({ trades = [] }) {

  const sortedTrades = [...trades].reverse()

  let runningBalance = 0

  const chartData = sortedTrades.map((trade, index) => {

    const pnl = Number(
      String(trade.pnl || 0)
        .replace("$", "")
        .replace(",", "")
    )

    runningBalance += pnl

    return {

      trade: index + 1,

      equity: runningBalance

    }

  })

  return (

    <div className="w-full overflow-hidden">

      <AreaChart
        width={380}
        height={300}
        data={chartData}
      >

        <defs>

          <linearGradient
            id="equity"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >

            <stop
              offset="5%"
              stopColor="#2563eb"
              stopOpacity={0.35}
            />

            <stop
              offset="95%"
              stopColor="#2563eb"
              stopOpacity={0}
            />

          </linearGradient>

        </defs>

        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey="trade"
          tick={{ fontSize: 10 }}
          stroke="#6b7280"
        />

        <YAxis
          tick={{ fontSize: 10 }}
          stroke="#6b7280"
        />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="equity"
          stroke="#2563eb"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#equity)"
        />

      </AreaChart>

    </div>

  )

}

export default EquityChart