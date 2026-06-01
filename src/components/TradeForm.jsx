import { useState } from "react"

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore"

import {
  db
} from "../firebase/firebase"

import { useAuth }
from "../context/AuthContext"

function TradeForm() {

  const { user } = useAuth()

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({

      pair: "",

      type: "Buy",

      entry: "",

      exit: "",

      lotSize: "",

      pnl: "",

      strategy: "",

      notes: "",

      confidence: "5"
    })

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    })
  }

  async function handleSubmit(e) {

    e.preventDefault()

    try {

      setLoading(true)

      await addDoc(
        collection(db, "trades"),
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
            Number(formData.confidence),

          userId:
            user.uid,

          createdAt:
            serverTimestamp()
        }
      )

      setFormData({

        pair: "",

        type: "Buy",

        entry: "",

        exit: "",

        lotSize: "",

        pnl: "",

        strategy: "",

        notes: "",

        confidence: "5"
      })

      alert(
        "Trade Added Successfully 🚀"
      )

    } catch (error) {

      console.log(error)

      alert(
        "Error adding trade"
      )
    }

    setLoading(false)
  }

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Add Trade

      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          type="text"
          name="pair"
          placeholder="Pair"
          value={formData.pair}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
        >

          <option>Buy</option>

          <option>Sell</option>

        </select>

        <input
          type="number"
          name="entry"
          placeholder="Entry Price"
          value={formData.entry}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
          required
        />

        <input
          type="number"
          name="exit"
          placeholder="Exit Price"
          value={formData.exit}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
          required
        />

        <input
          type="number"
          name="lotSize"
          placeholder="Lot Size"
          value={formData.lotSize}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
          required
        />

        <input
          type="number"
          name="pnl"
          placeholder="Profit / Loss"
          value={formData.pnl}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="strategy"
          placeholder="Strategy"
          value={formData.strategy}
          onChange={handleChange}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 md:col-span-2"
        />

        <textarea
          name="notes"
          placeholder="Trade Notes / Psychology / Lessons"

          value={formData.notes}

          onChange={handleChange}

          rows={5}

          className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 md:col-span-2 resize-none"
        />

        <div className="md:col-span-2">

          <label className="block mb-2 text-sm text-zinc-400">

            Confidence Level

          </label>

          <select
            name="confidence"

            value={formData.confidence}

            onChange={handleChange}

            className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 w-full"
          >

            <option value="1">1 - Very Low</option>
            <option value="2">2 - Low</option>
            <option value="3">3 - Weak</option>
            <option value="4">4 - Average</option>
            <option value="5">5 - Neutral</option>
            <option value="6">6 - Good</option>
            <option value="7">7 - Strong</option>
            <option value="8">8 - High</option>
            <option value="9">9 - Very High</option>
            <option value="10">10 - Perfect Setup</option>

          </select>

        </div>

        <button
          type="submit"

          disabled={loading}

          className="bg-orange-500 hover:bg-orange-600 transition-all rounded-xl p-3 font-bold md:col-span-2"
        >

          {loading
            ? "Adding Trade..."
            : "Add Trade"}

        </button>

      </form>

    </div>
  )
}

export default TradeForm