import EquityChart from "../EquityChart"
import MonthlyPerformance from "./MonthlyPerformance"

function ChartSection({ trades = [] }) {

  return (

    <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6 items-start">

      {/* EQUITY CURVE */}

      <div className="bg-white border border-gray-200 rounded-2xl p-5 w-full overflow-hidden">

        <div className="mb-4">

          <h3 className="text-[14px] font-bold text-gray-900">
            Equity Curve
          </h3>

          <p className="text-[11px] text-gray-500 mt-1">
            Accumulated account growth
          </p>

        </div>

        <div className="w-full h-[320px] min-w-0">

          <EquityChart trades={trades} />

        </div>

      </div>

      {/* MONTHLY PERFORMANCE */}

      <MonthlyPerformance trades={trades} />

    </div>

  )

}

export default ChartSection