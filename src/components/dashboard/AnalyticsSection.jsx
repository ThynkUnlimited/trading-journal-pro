import {
  Target,
  Briefcase,
  CandlestickChart,
  Brain
} from "lucide-react"

function AnalyticsSection() {

  const cards = [

    {
      title: "Win / Loss",
      value: "63%",
      subtitle: "Winning trades",
      icon: Target
    },

    {
      title: "Strategy",
      value: "Breakout",
      subtitle: "Best performing setup",
      icon: Briefcase
    },

    {
      title: "Assets",
      value: "EURUSD",
      subtitle: "Most traded asset",
      icon: CandlestickChart
    },

    {
      title: "Psychology",
      value: "8.4 / 10",
      subtitle: "Discipline score",
      icon: Brain
    }
  ]

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {

        const Icon = card.icon

        return (

          <div
            key={card.title}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-sm font-medium text-gray-500">
                {card.title}
              </h3>

              <Icon
                size={18}
                className="text-gray-400"
              />

            </div>

            <h2 className="text-2xl font-bold text-gray-900">

              {card.value}

            </h2>

            <p className="text-sm text-gray-500 mt-2">

              {card.subtitle}

            </p>

          </div>

        )
      })}

    </div>

  )
}

export default AnalyticsSection