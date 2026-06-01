import {

  useEffect,
  useState

} from "react"

import {

  collection,
  query,
  where,
  onSnapshot,
  orderBy

} from "firebase/firestore"

import {

  db

} from "../firebase/firebase"

import {

  useAuth

} from "../context/AuthContext"

import StatsCards from "./StatsCards"
import AdvancedStats from "./AdvancedStats"
import EquityChart from "./EquityChart"
import AnalyticsChart from "./AnalyticsChart"
import TradingCalendar from "./TradingCalendar"
import TradeActions from "./TradeActions"

function TradesTable() {

  const { user } =
    useAuth()

  const [trades, setTrades] =
    useState([])

  useEffect(() => {

    if (!user) return

    const q = query(

      collection(db, "trades"),

      where(
        "userId",
        "==",
        user.uid
      ),

      orderBy(
        "createdAt",
        "desc"
      )
    )

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const data =
          snapshot.docs.map(doc => ({

            id: doc.id,

            ...doc.data()
          }))

        setTrades(data)
      })

    return () => unsubscribe()

  }, [user])

  return (

    <div className="space-y-5 w-full min-w-0">

      {/* TOP STATS */}

      <StatsCards
        trades={trades}
      />

      {/* ADVANCED STATS */}

      <AdvancedStats
        trades={trades}
      />

      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 min-w-0">

        <div className="min-w-0">

          <EquityChart
            trades={trades}
          />

        </div>

        <div className="min-w-0">

          <AnalyticsChart
            trades={trades}
          />

        </div>

      </div>

      {/* CALENDAR */}

      <TradingCalendar
        trades={trades}
      />

      {/* TABLE */}

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">

        {/* HEADER */}

        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">

          <div>

            <h2 className="text-sm font-semibold text-white">

              Recent Trades

            </h2>

            <p className="text-xs text-zinc-500 mt-1">

              Trading history and execution journal

            </p>

          </div>

          <div className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">

            {trades.length} Trades

          </div>

        </div>

        {/* EMPTY */}

        {trades.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-24 text-center">

            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">

              <span className="text-3xl">

                📈

              </span>

            </div>

            <h2 className="text-xl font-semibold text-white mb-2">

              No Trades Yet

            </h2>

            <p className="text-sm text-zinc-500 max-w-md">

              Start logging your trades to build analytics,
              performance tracking and execution history.

            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              {/* HEAD */}

              <thead className="bg-zinc-900/60">

                <tr className="text-zinc-500 border-b border-zinc-800">

                  <th className="text-left px-5 py-4 font-medium">

                    Pair

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Type

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Entry

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Exit

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Lot

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    PnL

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Strategy

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Confidence

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Notes

                  </th>

                  <th className="text-left px-5 py-4 font-medium">

                    Actions

                  </th>

                </tr>

              </thead>

              {/* BODY */}

              <tbody>

                {trades.map((trade) => (

                  <tr
                    key={trade.id}

                    className="border-b border-zinc-900 hover:bg-zinc-900/40 transition-all"
                  >

                    <td className="px-5 py-5 font-semibold text-white whitespace-nowrap">

                      {trade.pair}

                    </td>

                    <td className="px-5 py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold

                        ${
                          trade.type === "Buy"

                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"

                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >

                        {trade.type}

                      </span>

                    </td>

                    <td className="px-5 py-5 text-zinc-400">

                      {trade.entry}

                    </td>

                    <td className="px-5 py-5 text-zinc-400">

                      {trade.exit}

                    </td>

                    <td className="px-5 py-5 text-zinc-400">

                      {trade.lotSize}

                    </td>

                    <td
                      className={`px-5 py-5 font-semibold

                      ${
                        trade.pnl > 0

                          ? "text-emerald-400"

                          : "text-red-400"
                      }`}
                    >

                      ${trade.pnl}

                    </td>

                    <td className="px-5 py-5 text-zinc-400 whitespace-nowrap">

                      {trade.strategy || "—"}

                    </td>

                    <td className="px-5 py-5">

                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-semibold">

                        {trade.confidence || 5}/10

                      </span>

                    </td>

                    <td className="px-5 py-5 max-w-xs">

                      <p className="text-xs text-zinc-500 line-clamp-2">

                        {trade.notes || "No notes"}

                      </p>

                    </td>

                    <td className="px-5 py-5">

                      <TradeActions
                        trade={trade}
                      />

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  )
}

export default TradesTable