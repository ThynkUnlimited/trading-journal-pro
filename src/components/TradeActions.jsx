import {
  useState
}
from "react"

import {
  doc,
  deleteDoc,
  updateDoc
}
from "firebase/firestore"

import {
  db
}
from "../firebase/firebase"

function TradeActions({ trade }) {

  const [loading, setLoading] =
    useState(false)

  const [editing, setEditing] =
    useState(false)

  const [formData, setFormData] =
    useState({

      pair:
        trade.pair || "",

      type:
        trade.type || "Buy",

      entry:
        trade.entry || "",

      exit:
        trade.exit || "",

      lotSize:
        trade.lotSize || "",

      pnl:
        trade.pnl || "",

      strategy:
        trade.strategy || "",

      notes:
        trade.notes || "",

      confidence:
        trade.confidence || 5
    })

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    })
  }

  async function handleDelete() {

    const confirmDelete =
      window.confirm(
        "Delete this trade permanently?"
      )

    if (!confirmDelete) return

    try {

      setLoading(true)

      await deleteDoc(
        doc(
          db,
          "trades",
          trade.id
        )
      )

    } catch (error) {

      console.log(error)

      alert(
        "Error deleting trade"
      )
    }

    setLoading(false)
  }

  async function handleUpdate() {

    try {

      setLoading(true)

      await updateDoc(

        doc(
          db,
          "trades",
          trade.id
        ),

        {

          ...formData,

          entry:
            Number(formData.entry),

          exit:
            Number(formData.exit),

          lotSize:
            Number(formData.lotSize),

          pnl:
            Number(formData.pnl),

          confidence:
            Number(formData.confidence)
        }
      )

      setEditing(false)

    } catch (error) {

      console.log(error)

      alert(
        "Error updating trade"
      )
    }

    setLoading(false)
  }

  return (

    <>

      {/* ACTION BUTTONS */}

      <div className="flex items-center gap-3">

        <button
          onClick={() =>
            setEditing(true)
          }

          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-xl text-sm font-bold transition-all"
        >

          Edit

        </button>

        <button
          onClick={handleDelete}

          disabled={loading}

          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-xl text-sm font-bold transition-all"
        >

          {loading
            ? "Deleting..."
            : "Delete"}

        </button>

      </div>

      {/* EDIT MODAL */}

      {editing && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-white">

                Edit Trade

              </h2>

              <button
                onClick={() =>
                  setEditing(false)
                }

                className="text-zinc-400 hover:text-white text-2xl"
              >

                ✕

              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                name="pair"
                placeholder="Pair"

                value={formData.pair}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              />

              <select
                name="type"

                value={formData.type}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              >

                <option>

                  Buy

                </option>

                <option>

                  Sell

                </option>

              </select>

              <input
                type="number"
                name="entry"
                placeholder="Entry"

                value={formData.entry}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              />

              <input
                type="number"
                name="exit"
                placeholder="Exit"

                value={formData.exit}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              />

              <input
                type="number"
                name="lotSize"
                placeholder="Lot Size"

                value={formData.lotSize}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              />

              <input
                type="number"
                name="pnl"
                placeholder="PnL"

                value={formData.pnl}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white"
              />

              <input
                type="text"
                name="strategy"
                placeholder="Strategy"

                value={formData.strategy}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white md:col-span-2"
              />

              <textarea
                name="notes"
                rows={5}
                placeholder="Notes"

                value={formData.notes}

                onChange={handleChange}

                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white md:col-span-2 resize-none"
              />

              <div className="md:col-span-2">

                <label className="text-zinc-400 text-sm mb-2 block">

                  Confidence

                </label>

                <input
                  type="range"
                  min="1"
                  max="10"
                  name="confidence"

                  value={formData.confidence}

                  onChange={handleChange}

                  className="w-full"
                />

                <div className="text-orange-400 font-bold mt-2">

                  {formData.confidence}/10

                </div>

              </div>

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() =>
                  setEditing(false)
                }

                className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl font-bold text-white"
              >

                Cancel

              </button>

              <button
                onClick={handleUpdate}

                disabled={loading}

                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-bold text-white"
              >

                {loading
                  ? "Saving..."
                  : "Save Changes"}

              </button>

            </div>

          </div>

        </div>
      )}

    </>
  )
}

export default TradeActions