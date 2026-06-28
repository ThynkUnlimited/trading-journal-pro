import { useEffect, useState } from "react";

function NotesSection() {
  const [journal, setJournal] = useState({
    date: "",
    marketConditions: "",
    mistakes: "",
    lessonsLearned: "",
    planTomorrow: "",
  });

  useEffect(() => {
    const savedJournal = localStorage.getItem("tradingJournalNotes");

    if (savedJournal) {
      try {
        setJournal(JSON.parse(savedJournal));
      } catch {
        localStorage.removeItem("tradingJournalNotes");

        setJournal({
          date: new Date().toISOString().split("T")[0],
          marketConditions: "",
          mistakes: "",
          lessonsLearned: "",
          planTomorrow: "",
        });
      }
    } else {
      setJournal((prev) => ({
        ...prev,
        date: new Date().toISOString().split("T")[0],
      }));
    }
  }, []);

  const handleChange = (e) => {
    setJournal({
      ...journal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "tradingJournalNotes",
      JSON.stringify(journal)
    );

    alert("Journal saved successfully!");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 h-full flex flex-col">

      {/* HEADER */}

      <div className="mb-4">

        <h2 className="text-xl font-bold text-gray-900">
          Daily Journal
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Reflect honestly after every trading session.
        </p>

      </div>

      {/* FORM */}

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">

        {/* DATE */}

        <div>

          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={journal.date}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm text-black bg-white outline-none focus:border-blue-500"
          />

        </div>

        {/* MARKET */}

        <div>

          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Market Conditions
          </label>

          <textarea
            name="marketConditions"
            value={journal.marketConditions}
            onChange={handleChange}
            placeholder="Market trend, volatility..."
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-black bg-white resize-none outline-none focus:border-blue-500"
          />

        </div>

        {/* MISTAKES */}

        <div>

          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Mistakes
          </label>

          <textarea
            name="mistakes"
            value={journal.mistakes}
            onChange={handleChange}
            placeholder="Execution mistakes..."
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-black bg-white resize-none outline-none focus:border-blue-500"
          />

        </div>

        {/* LESSONS */}

        <div>

          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Lessons Learned
          </label>

          <textarea
            name="lessonsLearned"
            value={journal.lessonsLearned}
            onChange={handleChange}
            placeholder="Key lessons..."
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-black bg-white resize-none outline-none focus:border-blue-500"
          />

        </div>

        {/* PLAN */}

        <div>

          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Plan For Tomorrow
          </label>

          <textarea
            name="planTomorrow"
            value={journal.planTomorrow}
            onChange={handleChange}
            placeholder="Tomorrow's plan..."
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-black bg-white resize-none outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* BUTTON */}

      <div className="pt-4 border-t border-gray-200 mt-4">

        <button
          onClick={handleSave}
          className="w-full h-10 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all"
        >
          Save Journal
        </button>

      </div>

    </div>
  );
}

export default NotesSection;