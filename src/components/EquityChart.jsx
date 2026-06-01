import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", equity: 1000 },
  { day: "Tue", equity: 1200 },
  { day: "Wed", equity: 1100 },
  { day: "Thu", equity: 1500 },
  { day: "Fri", equity: 1700 },
];

export default function EquityChart() {
  return (
    <div className="w-full h-[320px] min-w-0 bg-[#111827] rounded-xl p-4">
      <ResponsiveContainer width="700" height="300">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="equity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

          <XAxis
            dataKey="day"
            stroke="#9ca3af"
          />

          <YAxis
            stroke="#9ca3af"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="equity"
            stroke="#22c55e"
            fillOpacity={1}
            fill="url(#equity)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}