import MainLayout
from "../layouts/MainLayout"

import TradesTable
from "../components/TradesTable"

function Trades() {

  return (

    <MainLayout>

      <div className="space-y-4">

        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">

            Journal

          </p>

          <h1 className="text-3xl font-bold text-white">

            Trade Journal

          </h1>

        </div>

        <TradesTable />

      </div>

    </MainLayout>
  )
}

export default Trades