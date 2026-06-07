import { useEffect, useState } from "react"

function NotesSection() {

  const [journal, setJournal] = useState({

    date: "",

    marketConditions: "",

    mistakes: "",

    lessonsLearned: "",

    planTomorrow: ""

  })

  useEffect(() => {

    const savedJournal = localStorage.getItem(
      "tradingJournalNotes"
    )

    if (savedJournal) {

      try {

        setJournal(
          JSON.parse(savedJournal)
        )

      } catch {

        localStorage.removeItem(
          "tradingJournalNotes"
        )

        setJournal({

          date: new Date()
            .toISOString()
            .split("T")[0],

          marketConditions: "",

          mistakes: "",

          lessonsLearned: "",

          planTomorrow: ""

        })

      }

    } else {

      setJournal((prev) => ({

        ...prev,

        date: new Date()
          .toISOString()
          .split("T")[0]

      }))

    }

  }, [])

  const handleChange = (e) => {

    setJournal({

      ...journal,

      [e.target.name]: e.target.value

    })

  }

  const handleSave = () => {

    localStorage.setItem(

      "tradingJournalNotes",

      JSON.stringify(journal)

    )

    alert("Journal saved successfully!")

  }

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">

      <h2 className="text-lg font-semibold text-gray-900 mb-2">

        Journal Notes

      </h2>

      <p className="text-sm text-gray-500 mb-6">

        Daily trading reflections and improvements.

      </p>

      <div className="space-y-5">

        {/* DATE */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Date

          </label>

          <input

            type="date"

            name="date"

            value={journal.date}

            onChange={handleChange}

            className="
              w-full
              h-11
              px-4
              border
              border-gray-300
              rounded-xl
              bg-white
              text-black
              outline-none
              focus:border-blue-500
            "

          />

        </div>

        {/* MARKET CONDITIONS */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Market Conditions

          </label>

          <textarea

            name="marketConditions"

            value={journal.marketConditions}

            onChange={handleChange}

            placeholder="Describe today's market conditions..."

            className="
              w-full
              h-24
              p-4
              border
              border-gray-300
              rounded-xl
              bg-white
              text-black
              placeholder:text-gray-400
              resize-none
              outline-none
              focus:border-blue-500
            "

          />

        </div>

        {/* MISTAKES */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Mistakes

          </label>

          <textarea

            name="mistakes"

            value={journal.mistakes}

            onChange={handleChange}

            placeholder="What mistakes did you make today?"

            className="
              w-full
              h-24
              p-4
              border
              border-gray-300
              rounded-xl
              bg-white
              text-black
              placeholder:text-gray-400
              resize-none
              outline-none
              focus:border-blue-500
            "

          />

        </div>

        {/* LESSONS LEARNED */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Lessons Learned

          </label>

          <textarea

            name="lessonsLearned"

            value={journal.lessonsLearned}

            onChange={handleChange}

            placeholder="What did today's session teach you?"

            className="
              w-full
              h-24
              p-4
              border
              border-gray-300
              rounded-xl
              bg-white
              text-black
              placeholder:text-gray-400
              resize-none
              outline-none
              focus:border-blue-500
            "

          />

        </div>

        {/* PLAN FOR TOMORROW */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Plan For Tomorrow

          </label>

          <textarea

            name="planTomorrow"

            value={journal.planTomorrow}

            onChange={handleChange}

            placeholder="How will you improve tomorrow?"

            className="
              w-full
              h-24
              p-4
              border
              border-gray-300
              rounded-xl
              bg-white
              text-black
              placeholder:text-gray-400
              resize-none
              outline-none
              focus:border-blue-500
            "

          />

        </div>

        <div className="flex justify-end">

          <button

            onClick={handleSave}

            className="
              px-5
              h-11
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              font-semibold
              hover:bg-blue-700
            "

          >

            Save Notes

          </button>

        </div>

      </div>

    </div>

  )

}

export default NotesSection