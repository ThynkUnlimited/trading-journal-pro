import Calendar from "react-calendar"

import "react-calendar/dist/Calendar.css"

function TradingCalendar({

  trades

}) {

  const tradeDates =
    trades.map((trade) => {

      if (
        trade.createdAt?.seconds
      ) {

        return new Date(
          trade.createdAt.seconds * 1000
        ).toDateString()
      }

      return null
    })

  function tileClassName({

    date,
    view

  }) {

    if (view === "month") {

      const formatted =
        date.toDateString()

      if (
        tradeDates.includes(
          formatted
        )
      ) {

        return "activeTrade"
      }
    }

    return null
  }

  return (

    <div className="trading-calendar">

      <Calendar

        tileClassName={
          tileClassName
        }

        prev2Label={null}
        next2Label={null}

      />

    </div>
  )
}

export default TradingCalendar