import { useEffect, useState } from "react";

import {
  Search,
  Bell,
  ChevronDown,
  Wallet,
  TrendingUp,
  Trophy,
  Flame,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";

import {
  getNetPnL,
  getWinRate,
  getTodaysPnL,
  getCurrentWinStreak,
} from "../../utils/tradeAnalytics";

function Topbar() {
  const location = useLocation();
  const { user } = useAuth();

  const [trades, setTrades] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "trades"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTrades(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [user]);

  const balance = getNetPnL(trades);
  const todayPnL = getTodaysPnL(trades);
  const winRate = getWinRate(trades);
  const streak = getCurrentWinStreak(trades);

  return (
    <header className="bg-white border-b border-gray-200">

      {/* TOP HEADER */}

      <div className="h-[68px] px-3 sm:px-6 flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-5 lg:gap-10">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              T
            </div>

            <span className="hidden sm:block text-lg font-bold text-gray-900">
              TradeJournal
            </span>

          </div>

          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/dashboard"
              className={`h-[68px] flex items-center border-b-2 transition ${
                location.pathname === "/dashboard"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/reports"
              className={`h-[68px] flex items-center border-b-2 transition ${
                location.pathname === "/reports"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Reports
            </Link>

            <Link
              to="/journal"
              className={`h-[68px] flex items-center border-b-2 transition ${
                location.pathname === "/journal"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Journal
            </Link>

            <Link
              to="/settings"
              className={`h-[68px] flex items-center border-b-2 transition ${
                location.pathname === "/settings"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Settings
            </Link>

          </nav>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <div className="hidden xl:flex items-center gap-3 h-10 w-[280px] px-4 border border-gray-200 rounded-xl">

            <Search
              size={15}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search trades..."
              className="flex-1 bg-transparent outline-none text-sm"
            />

          </div>

          <button className="relative w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50">

            <Bell
              size={18}
              className="text-gray-600"
            />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          <button className="flex items-center gap-3 h-10 px-3 rounded-xl border border-gray-200">

            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
              TJ
            </div>

            <span className="hidden sm:block text-sm font-medium text-gray-800">
              Account
            </span>

            <ChevronDown
              size={15}
              className="text-gray-500"
            />

          </button>

        </div>

      </div>

      {/* LIVE STATS */}

      <div className="border-t border-gray-100 bg-gray-50">

        <div className="px-3 sm:px-6 h-11 flex items-center gap-8 overflow-x-auto whitespace-nowrap text-sm">

          <div className="flex items-center gap-2">

            <Wallet
              size={15}
              className="text-blue-600"
            />

            <span className="text-gray-500">
              Balance
            </span>

            <span
              className={`font-bold ${
                balance >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ${balance.toFixed(2)}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <TrendingUp
              size={15}
              className="text-green-600"
            />

            <span className="text-gray-500">
              Today
            </span>

            <span
              className={`font-bold ${
                todayPnL >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ${todayPnL.toFixed(2)}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Trophy
              size={15}
              className="text-yellow-500"
            />

            <span className="text-gray-500">
              Win Rate
            </span>

            <span className="font-bold text-gray-900">
              {winRate.toFixed(1)}%
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Flame
              size={15}
              className="text-orange-500"
            />

            <span className="text-gray-500">
              Streak
            </span>

            <span className="font-bold text-gray-900">
              {streak}
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;