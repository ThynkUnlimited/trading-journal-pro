import {

  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid

} from "recharts"

function MonthlyPerformanceChart({

  trades

}) {

  const monthlyData = {}

  trades.forEach((trade) => {

    const date =
      trade.createdAt?.seconds

        ? new Date(
            trade.createdAt.seconds * 1000
          )

        : new Date()

    const month =
      date.toLocaleString(
        "default",
        {
          month: "short"
        }
      )

    if (!monthlyData[month]) {

      monthlyData[month] = 0
    }

    monthlyData[month] +=
      Number(trade.pnl || 0)
  })

  const chartData =
    Object.entries(monthlyData)
      .map(([month, pnl]) => ({

        month,
        pnl
      }))

  return (

    <ResponsiveContainer
      width="100%"
      height="100%"
    >

      <BarChart

        data={chartData}

        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0
        }}
      >

        {/* GRID */}

        <CartesianGrid

          strokeDasharray="3 3"

          stroke="#27272a"

          vertical={false}
        />

        {/* X */}

        <XAxis

          dataKey="month"

          tick={{
            fill: "#71717a",
            fontSize: 11
          }}

          tickLine={false}

          axisLine={false}
        />

        {/* Y */}

        <YAxis

          tick={{
            fill: "#71717a",
            fontSize: 11
          }}

          tickLine={false}

          axisLine={false}
        />

        {/* TOOLTIP */}

        <Tooltip

          contentStyle={{

            background:
              "#09090b",

            border:
              "1px solid #27272a",

            borderRadius:
              "14px",

            fontSize:
              "12px",

            color:
              "#fff"
          }}
        />

        {/* BARS */}

        <Bar

          dataKey="pnl"

          radius={[8, 8, 0, 0]}

          fill="#6366f1"
        />

      </BarChart>

    </ResponsiveContainer>
  )
}

export default MonthlyPerformanceChart