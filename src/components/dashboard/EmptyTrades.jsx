function EmptyTrades() {

  return (

    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">

      {/* ICON */}

      <div className="w-28 h-28 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-8">

        <span className="text-5xl">

          📈

        </span>

      </div>

      {/* TITLE */}

      <h2 className="text-4xl font-bold text-white tracking-tight mb-4">

        No Trades Yet

      </h2>

      {/* DESCRIPTION */}

      <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">

        Start logging your trades to analyze performance,
        improve discipline, track psychology and build
        long-term consistency as a trader.

      </p>

      {/* SOFT DECORATION */}

      <div className="mt-10 flex items-center gap-3">

        <div className="w-2 h-2 rounded-full bg-orange-500/50" />

        <div className="w-2 h-2 rounded-full bg-orange-500/30" />

        <div className="w-2 h-2 rounded-full bg-orange-500/10" />

      </div>

    </div>
  )
}

export default EmptyTrades