import TradeRow from "./TradeRow"
import EmptyTrades from "./EmptyTrades"

function TradesDataTable({

  trades

}) {

  return (

    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden">

      {/* TABLE HEADER */}

      <div className="grid grid-cols-10 gap-4 px-8 py-5 border-b border-zinc-800 text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">

        <div>

          Pair

        </div>

        <div>

          Type

        </div>

        <div>

          Entry

        </div>

        <div>

          Exit

        </div>

        <div>

          Lot

        </div>

        <div>

          PnL

        </div>

        <div>

          Strategy

        </div>

        <div>

          Confidence

        </div>

        <div className="col-span-2">

          Notes / Actions

        </div>

      </div>

      {/* EMPTY STATE */}

      {trades.length === 0 ? (

        <EmptyTrades />

      ) : (

        <div className="divide-y divide-zinc-800">

          {trades.map((trade) => (

            <TradeRow
              key={trade.id}
              trade={trade}
            />

          ))}

        </div>

      )}

    </div>
  )
}

export default TradesDataTable