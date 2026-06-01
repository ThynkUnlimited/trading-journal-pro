import { useState }
from "react"

import {
  doc,
  updateDoc
}
from "firebase/firestore"

import {
  db
}
from "../firebase/firebase"

function EditTradeModal({

  trade,

  onClose
}) {

  const [loading, setLoading] =
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

  async function handleUpdate(e) {

    e.preventDefault()

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

      alert(
        "Trade updated successfully 🚀"
      )

      onClose()

    } catch (error) {

      console.log(error)

      alert(
        "Error updating trade"
      )
    }

    setLoading(false)
  }

  return (

    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-3xl p-8 max-h-[90vh] overflow-y-auto">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">

              Edit Trade

            </h2>

            <p className="text-zinc-400 mt-2">

              Update your trading data

            </p>

          </div>

          <button
            onClick={onClose}

            className="text-zinc-400 hover:text-white text-2xl"
          >

            ✕

          </button>

        </div>

        <form
          onSubmit={handleUpdate}

          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

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
            rows={5}

            name="notes"

            placeholder="Trade notes"

            value={formData.notes}

            onChange={handleChange}

            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white resize-none md:col-span-2"
          />

          <div className="md:col-span-2">

            <label className="block mb-2 text-zinc-400 text-sm">

              Confidence

            </label>

            <select
              name="confidence"

              value={formData.confidence}

              onChange={handleChange}

              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white w-full"
            >

              {[1,2,3,4,5,6,7,8,9,10]
                .map(num => (

                <option
                  key={num}
                  value={num}
                >

                  {num}/10

                </option>
              ))}

            </select>

          </div>

          <button
            type="submit"

            disabled={loading}

            className="bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl p-4 font-bold text-white md:col-span-2"
          >

            {loading
              ? "Updating..."
              : "Update Trade"}

          </button>

        </form>

      </div>

    </div>
  )
}

export default EditTradeModal