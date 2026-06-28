import MainLayout from "../layouts/MainLayout";
import NotesSection from "../components/dashboard/NotesSection";

function Journal() {
  return (
    <MainLayout>

      <div className="space-y-6">

        {/* HEADER */}

        <div className="bg-white rounded-2xl border border-gray-200 p-5">

          <h1 className="text-2xl font-bold text-gray-900">
            Trading Journal
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Record your daily trading psychology, mistakes, lessons and plans.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid xl:grid-cols-[420px_1fr] gap-6">

          {/* JOURNAL FORM */}

          <NotesSection />

          {/* HISTORY */}

          <div className="bg-white rounded-2xl border border-gray-200 p-5">

            <h2 className="text-lg font-semibold text-gray-900">
              Previous Journal Entries
            </h2>

            <p className="text-sm text-gray-500 mb-5">
              Every journal you save will appear here.
            </p>

            <div className="border rounded-xl p-10 text-center text-gray-400">

              Journal history coming in the next step...

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Journal;