import MainLayout
from "../layouts/MainLayout"

import TradeForm
from "../components/TradeForm"

import TradesTable
from "../components/TradesTable"

function Dashboard() {

  return (

    <MainLayout>

      <div className="space-y-6">

        <TradeForm />

        <TradesTable />

      </div>

    </MainLayout>
  )
}

export default Dashboard