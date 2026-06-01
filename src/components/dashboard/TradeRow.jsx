import TradeActions from "../TradeActions"

function TradeRow({ trade }) {

  const pnl =
    Number(trade.pnl || 0)

  const confidence =
    Number(trade.confidence || 5)

  return (

    <div className="grid grid-cols-10 gap-4 px-6 py-4 items-center border-b border-zinc-800/70 hover:bg-zinc-800/20 transition-all duration-200">

      {/* PAIR */}

      <div className="flex flex-col">

        <span className="text-sm font-semibold text-white tracking-wide">

          {trade.pair}

        </span>

        <span className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wider">

          {trade.type} Position

        </span>

      </div>

      {/* TYPE */}

      <div>

        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border

          ${
            trade.type === "Buy"

            ? "bg-green-500/10 text-green-400 border-green-500/20"

            : "bg-red-500/10 text-red-400 border-red-500/20"
          }`}
        >

          {trade.type}

        </span>

      </div>

      {/* ENTRY */}

      <div className="text-sm text-zinc-300 font-medium">

        {trade.entry}

      </div>

      {/* EXIT */}

      <div className="text-sm text-zinc-300 font-medium">

        {trade.exit}

      </div>

      {/* LOT */}

      <div className="text-sm text-zinc-300 font-medium">

        {trade.lotSize}

      </div>

      {/* PNL */}

      <div
        className={`text-base font-semibold tracking-tight

        ${
          pnl > 0

          ? "text-green-400"

          : pnl < 0

          ? "text-red-400"

          : "text-zinc-300"
        }`}
      >

        ${pnl.toFixed(2)}

      </div>

      {/* STRATEGY */}

      <div>

        <span className="bg-zinc-800/80 text-zinc-300 px-2.5 py-1 rounded-lg text-[11px] border border-zinc-700">

          {trade.strategy || "No Strategy"}

        </span>

      </div>

      {/* CONFIDENCE */}

      <div className="flex items-center gap-2">

        <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="bg-orange-500 h-full rounded-full"

            style={{
              width: `${confidence * 10}%`
            }}
          />

        </div>

        <span className="text-[11px] text-orange-400 font-semibold">

          {confidence}/10

        </span>

      </div>

      {/* NOTES */}

      <div>

        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">

          {trade.notes || "No notes"}

        </p>

      </div>

      {/* ACTIONS */}

      <div className="flex justify-end">

        <TradeActions
          trade={trade}
        />

      </div>

    </div>
  )
}

export default TradeRow