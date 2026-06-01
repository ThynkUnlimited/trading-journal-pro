import { useState }
from "react"

function RiskCalculator() {

  const [entry, setEntry] =
    useState("")

  const [stopLoss, setStopLoss] =
    useState("")

  const [takeProfit, setTakeProfit] =
    useState("")

  const risk =

    Math.abs(
      entry - stopLoss
    )

  const reward =

    Math.abs(
      takeProfit - entry
    )

  const ratio =

    risk > 0

      ? (reward / risk)
          .toFixed(2)

      : 0

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">

        Risk / Reward Calculator

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="number"
          placeholder="Entry Price"
          value={entry}
          onChange={(e) =>
            setEntry(e.target.value)
          }
          className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
        />

        <input
          type="number"
          placeholder="Stop Loss"
          value={stopLoss}
          onChange={(e) =>
            setStopLoss(e.target.value)
          }
          className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
        />

        <input
          type="number"
          placeholder="Take Profit"
          value={takeProfit}
          onChange={(e) =>
            setTakeProfit(e.target.value)
          }
          className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="bg-zinc-950 rounded-xl p-4">

          <p className="text-zinc-500 text-sm">

            Risk

          </p>

          <h3 className="text-2xl font-bold text-red-500 mt-2">

            {risk || 0}

          </h3>

        </div>

        <div className="bg-zinc-950 rounded-xl p-4">

          <p className="text-zinc-500 text-sm">

            Reward

          </p>

          <h3 className="text-2xl font-bold text-green-500 mt-2">

            {reward || 0}

          </h3>

        </div>

        <div className="bg-zinc-950 rounded-xl p-4">

          <p className="text-zinc-500 text-sm">

            R:R Ratio

          </p>

          <h3 className="text-2xl font-bold text-orange-500 mt-2">

            1 : {ratio}

          </h3>

        </div>

      </div>

    </div>
  )
}

export default RiskCalculator