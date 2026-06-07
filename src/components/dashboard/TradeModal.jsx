import { useState } from "react"

import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore"

import { db } from "../../firebase/firebase"

import { useAuth } from "../../context/AuthContext"

function TradeModal({ open, onClose }) {

  const { user } = useAuth()

  const [formData, setFormData] = useState({

    date: "",
    symbol: "",
    setup: "",
    entry: "",
    exit: "",
    pnl: "",
    rr: "",
    duration: "",
    status: "Win",
    notes: ""

  })

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await addDoc(

        collection(db, "trades"),

        {

          ...formData,

          userId: user.uid,

          createdAt: serverTimestamp()

        }

      )

      alert("Trade saved successfully!")

      setFormData({

        date: "",
        symbol: "",
        setup: "",
        entry: "",
        exit: "",
        pnl: "",
        rr: "",
        duration: "",
        status: "Win",
        notes: ""

      })

      onClose()

    } catch (error) {

      console.error(error)

      alert(error.message)

    }

  }

  if (!open) return null

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-5xl rounded-2xl p-6">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-[18px] font-bold text-gray-900">

            Add New Trade

          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
          >
            ×
          </button>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* ROW 1 */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Symbol
              </label>

              <input
                type="text"
                name="symbol"
                placeholder="EURUSD"
                value={formData.symbol}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Setup
              </label>

              <input
                type="text"
                name="setup"
                placeholder="Breakout"
                value={formData.setup}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Entry
              </label>

              <input
                type="number"
                name="entry"
                placeholder="1.2450"
                value={formData.entry}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Exit
              </label>

              <input
                type="number"
                name="exit"
                placeholder="1.2550"
                value={formData.exit}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

          </div>

          {/* ROW 2 */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                P&L
              </label>

              <input
                type="text"
                name="pnl"
                placeholder="+250"
                value={formData.pnl}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                R:R
              </label>

              <input
                type="text"
                name="rr"
                placeholder="1:3"
                value={formData.rr}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Duration
              </label>

              <input
                type="text"
                name="duration"
                placeholder="2H"
                value={formData.duration}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              />

            </div>

            <div>

              <label className="text-[12px] font-bold text-gray-700 block mb-1">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full h-11 border border-gray-200 rounded-xl px-3 text-[13px]"
              >

                <option>Win</option>
                <option>Loss</option>
                <option>Breakeven</option>

              </select>

            </div>

          </div>

          {/* NOTES */}

          <div>

            <label className="text-[12px] font-bold text-gray-700 block mb-1">
              Notes
            </label>

            <textarea
              name="notes"
              rows="4"
              placeholder="Trade execution notes..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl p-3 text-[13px]"
            />

          </div>

          {/* BUTTONS */}

          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="px-5 h-11 rounded-xl border border-gray-200 text-[13px] font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 h-11 rounded-xl bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700"
            >
              Save Trade
            </button>

          </div>

        </form>

      </div>

    </div>

  )
}

export default TradeModal