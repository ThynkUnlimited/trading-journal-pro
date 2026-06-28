import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {
  CalendarDays,
  Clock3,
  Wallet,
} from "lucide-react";

import { auth } from "../../firebase/firebase";
import TradeModal from "./TradeModal";

function DashboardHeader() {
  const [time, setTime] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [openTradeModal, setOpenTradeModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">

        {/* TOP ROW */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <h1 className="text-xl font-bold text-gray-900">
              Trading Dashboard
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              Monitor performance, review trades and improve discipline.
            </p>

          </div>

          <div className="flex items-center gap-2 flex-wrap">

            {/* DATE */}

            <div className="flex items-center gap-2 h-9 px-3 rounded-lg border border-gray-200 bg-white">

              <CalendarDays
                size={14}
                className="text-gray-400"
              />

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-xs text-gray-700 outline-none bg-transparent"
              />

            </div>

            {/* CLOCK */}

            <div className="flex items-center gap-2 h-9 px-3 rounded-lg bg-gray-50 border border-gray-200">

              <Clock3
                size={14}
                className="text-gray-400"
              />

              <span className="text-xs font-medium text-gray-700">
                {time.toLocaleTimeString()}
              </span>

            </div>

            {/* ACCOUNT */}

            <div className="flex items-center gap-2 h-9 px-3 rounded-lg bg-blue-50 border border-blue-100">

              <Wallet
                size={14}
                className="text-blue-600"
              />

              <span className="text-xs font-medium text-blue-700">
                All Accounts
              </span>

            </div>

          </div>

        </div>

        {/* ACTION BUTTONS */}

        <div className="flex flex-wrap justify-end gap-2 mt-4">

          <button
            className="px-4 h-9 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Export
          </button>

          <button
            onClick={() => setOpenTradeModal(true)}
            className="px-4 h-9 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
          >
            + Add Trade
          </button>

          <button
            onClick={handleLogout}
            className="px-4 h-9 rounded-lg bg-red-500 text-white text-xs font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

      </div>

      <TradeModal
        open={openTradeModal}
        onClose={() => setOpenTradeModal(false)}
      />
    </>
  );
}

export default DashboardHeader;