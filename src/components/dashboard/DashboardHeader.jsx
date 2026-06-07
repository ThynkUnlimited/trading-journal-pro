import { useEffect, useState } from "react"

import { signOut } from "firebase/auth"

import {
  CalendarDays,
  Clock3
} from "lucide-react"

import { auth } from "../../firebase/firebase"

import TradeModal from "./TradeModal"

function DashboardHeader() {

  const [time, setTime] = useState(new Date())

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  )

  const [openTradeModal, setOpenTradeModal] = useState(false)

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date())

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  const handleLogout = async () => {

    try {

      await signOut(auth)

    } catch (error) {

      console.error(error)

    }
  }

  const currentTime = time.toLocaleTimeString()

  return (

    <>

      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

          {/* LEFT */}

          <div>

            <h1 className="text-[22px] font-bold text-gray-900">

              Trading Dashboard

            </h1>

            <p className="text-[13px] text-gray-500 mt-1">

              Monitor your trading performance and analytics

            </p>

          </div>

          {/* CENTER */}

          <div className="flex flex-wrap items-center gap-4">

            {/* CALENDAR */}

            <div className="flex items-center gap-2 h-10 px-3 rounded-xl border border-gray-200 bg-white">

              <CalendarDays
                size={15}
                className="text-gray-500"
              />

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-[12px] text-gray-700 outline-none cursor-pointer bg-white w-[140px]"
              />

            </div>

            {/* CLOCK */}

            <div className="flex items-center gap-2 px-4 h-10 rounded-xl border border-gray-200 bg-gray-50">

              <Clock3
                size={15}
                className="text-gray-500"
              />

              <span className="text-[12px] font-medium text-gray-700">

                {currentTime}

              </span>

            </div>

            {/* FILTER */}

            <select
              className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-[12px] text-gray-700 outline-none"
            >

              <option>All Accounts</option>

              <option>Forex</option>

              <option>Crypto</option>

              <option>Indices</option>

            </select>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <button
              className="px-4 h-10 rounded-xl border border-gray-200 bg-white text-[12px] font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              Export
            </button>

            <button
              onClick={() => setOpenTradeModal(true)}
              className="px-4 h-10 rounded-xl bg-blue-600 text-white text-[12px] font-semibold hover:bg-blue-700 transition-all"
            >
              Add Trade
            </button>

            <button
              onClick={handleLogout}
              className="px-4 h-10 rounded-xl bg-red-500 text-white text-[12px] font-semibold hover:bg-red-600 transition-all"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

      <TradeModal
        open={openTradeModal}
        onClose={() => setOpenTradeModal(false)}
      />

    </>

  )
}

export default DashboardHeader