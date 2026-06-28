import EquityChart from "../EquityChart";
import MonthlyPerformance from "./MonthlyPerformance";

function ChartSection({ trades = [] }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[30%_70%] gap-4">
      {/* Equity Curve */}

      <div className="bg-white border border-gray-200 rounded-xl p-4 h-[360px] flex flex-col">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-gray-900">
            Equity Curve
          </h3>

          <p className="text-xs text-gray-500">
            Account growth over time
          </p>
        </div>

        <div className="flex-1">
          <EquityChart trades={trades} />
        </div>
      </div>

      {/* Monthly Performance */}

      <MonthlyPerformance trades={trades} />
    </div>
  );
}

export default ChartSection;