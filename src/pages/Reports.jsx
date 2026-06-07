import { useEffect, useState } from "react"

import {
  collection,
  query,
  where,
  onSnapshot
} from "firebase/firestore"

import { saveAs } from "file-saver"

import { db } from "../firebase/firebase"
import { useAuth } from "../context/AuthContext"

import MainLayout from "../layouts/MainLayout"

function Reports() {

  const { user } = useAuth()

  const [trades, setTrades] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    if (!user) return

    const q = query(
      collection(db, "trades"),
      where("userId", "==", user.uid)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setTrades(data)

    })

    return () => unsubscribe()

  }, [user])

  const filteredTrades = trades.filter((trade) => {

    const symbol = trade.symbol || ""
    const setup = trade.setup || ""

    return (
      symbol.toLowerCase().includes(search.toLowerCase()) ||
      setup.toLowerCase().includes(search.toLowerCase())
    )

  })

  const exportCSV = () => {

    const headers = [

      "Date",
      "Symbol",
      "Setup",
      "Entry",
      "Exit",
      "PnL",
      "RR",
      "Duration",
      "Status",
      "Notes"

    ]

    const rows = filteredTrades.map((trade) => [

      trade.date,
      trade.symbol,
      trade.setup,
      trade.entry,
      trade.exit,
      trade.pnl,
      trade.rr,
      trade.duration,
      trade.status,
      trade.notes

    ])

    const csvContent = [

      headers.join(","),

      ...rows.map((row) => row.join(","))

    ].join("\n")

    const blob = new Blob(

      [csvContent],

      {
        type: "text/csv;charset=utf-8;"
      }

    )

    saveAs(

      blob,

      `Trade_Report_${new Date()
        .toISOString()
        .slice(0, 10)}.csv`

    )

  }

  return (

    <MainLayout>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 overflow-hidden">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

          <h1 className="text-[22px] font-bold text-gray-900">

            Trade Reports

          </h1>

          <div className="flex flex-col md:flex-row gap-3">

            <input
              type="text"
              placeholder="Search symbol or setup..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[300px] h-11 px-4 border border-gray-300 rounded-xl text-[12px] outline-none"
            />

            <button
              onClick={exportCSV}
              className="px-5 h-11 rounded-xl bg-green-600 text-white text-[12px] font-semibold hover:bg-green-700"
            >
              Export CSV
            </button>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full text-[12px]">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left font-bold text-gray-800">
                  Date
                </th>

                <th className="p-3 text-left font-bold text-gray-800 min-w-[140px]">
                  Symbol
                </th>

                <th className="p-3 text-left font-bold text-gray-800 min-w-[180px]">
                  Setup
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  Entry
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  Exit
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  P&L
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  R:R
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  Duration
                </th>

                <th className="p-3 text-left font-bold text-gray-800">
                  Status
                </th>

                <th className="p-3 text-left font-bold text-gray-800 min-w-[220px]">
                  Notes
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredTrades.length === 0 ? (

                <tr>

                  <td
                    colSpan="10"
                    className="p-8 text-center text-gray-500"
                  >

                    No trades found

                  </td>

                </tr>

              ) : (

                filteredTrades.map((trade) => (

                  <tr
                    key={trade.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3 text-gray-800">
                      {trade.date}
                    </td>

                    <td className="p-3 font-semibold text-black">
                      {trade.symbol}
                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.setup}
                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.entry}
                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.exit}
                    </td>

                    <td
                      className={`p-3 font-semibold ${
                        Number(trade.pnl) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {trade.pnl}
                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.rr}
                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.duration}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                          trade.status === "Win"
                            ? "bg-green-100 text-green-700"
                            : trade.status === "Loss"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {trade.status}
                      </span>

                    </td>

                    <td className="p-3 text-gray-800">
                      {trade.notes}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>

  )
}

export default Reports