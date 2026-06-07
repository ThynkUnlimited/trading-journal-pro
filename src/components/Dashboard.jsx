import MainLayout from "../layouts/MainLayout"

import DashboardHeader from "../components/dashboard/DashboardHeader"
import KPIStatsRow from "../components/dashboard/KPIStatsRow"

function Dashboard() {

  return (

    <MainLayout>

      <div className="space-y-6">

        <DashboardHeader />

        <KPIStatsRow />

      </div>

    </MainLayout>

  )
}

export default Dashboard