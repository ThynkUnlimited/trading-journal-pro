import Sidebar
from "../components/dashboard/Sidebar"

import Topbar
from "../components/dashboard/Topbar"

function MainLayout({

  children

}) {

  return (

    <div className="min-h-screen bg-black text-white flex overflow-hidden">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}

        <Topbar />

        {/* CONTENT */}

        <main className="flex-1 overflow-y-auto">

          <div className="max-w-[1600px] mx-auto p-6">

            {children}

          </div>

        </main>

      </div>

    </div>
  )
}

export default MainLayout