import Topbar from "../components/dashboard/Topbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col">

      {/* TOP NAVIGATION */}
      <Topbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <div className="max-w-[1700px] mx-auto px-3 sm:px-5 lg:px-6 py-4">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 mt-4">

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 py-4">

          {/* TOP ROW */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-700">
                TradeJournal Pro
              </span>
              . All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-600">
                  System Online
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-600">
                  Cloud Sync Ready
                </span>
              </div>

              <div className="text-gray-600">
                Version 1.0.0
              </div>

            </div>

          </div>

          {/* AUDIT NOTICE */}
          <div className="mt-4 pt-3 border-t border-gray-100">

            <p className="text-[11px] text-center text-gray-500 leading-5">

              <span className="font-semibold text-gray-700">
                Audit Trail Policy:
              </span>{" "}
              All trade and journal records are maintained as part of a
              permanent audit trail. Entries are <strong>never deleted</strong>.
              If an incorrect trade or journal entry is recorded, a corresponding
              adjustment entry must be posted to preserve historical accuracy,
              accountability, and disciplined record keeping.

            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default MainLayout;