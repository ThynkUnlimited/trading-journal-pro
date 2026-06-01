import {
  Search
}
from "lucide-react"

function JournalToolbar({

  search,
  setSearch,

  filterType,
  setFilterType,

  totalTrades

}) {

  return (

    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4">

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

        {/* LEFT */}

        <div className="flex items-center gap-4 flex-wrap">

          {/* SEARCH */}

          <div className="relative">

            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"

              placeholder="Search pair..."

              value={search}

              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }

              className="bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500/40 transition-all w-[240px]"
            />

          </div>

          {/* FILTER */}

          <select

            value={filterType}

            onChange={(e) =>
              setFilterType(
                e.target.value
              )
            }

            className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-300 outline-none focus:border-orange-500/40 transition-all"
          >

            <option value="All">

              All Trades

            </option>

            <option value="Buy">

              Buy Only

            </option>

            <option value="Sell">

              Sell Only

            </option>

          </select>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20">

            <p className="text-[11px] uppercase tracking-[0.18em] text-orange-400 font-semibold mb-1">

              Total Results

            </p>

            <h3 className="text-sm font-semibold text-white">

              {totalTrades} Trades

            </h3>

          </div>

        </div>

      </div>

    </div>
  )
}

export default JournalToolbar