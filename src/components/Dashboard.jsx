import MainLayout from "../layouts/MainLayout"

import DashboardHeader from "../components/dashboard/DashboardHeader"
import KPIStatsRow from "../components/dashboard/KPIStatsRow"
import ChartSection from "../components/dashboard/ChartSection"
import AnalyticsSection from "../components/dashboard/AnalyticsSection"
import RecentTradesSection from "../components/dashboard/RecentTradesSection"
import NotesSection from "../components/dashboard/NotesSection"

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-4">

        <DashboardHeader />

        <KPIStatsRow />

        <ChartSection />

        <AnalyticsSection />

        <RecentTradesSection />

        <NotesSection />

      </div>
    </MainLayout>
  )
}

export default Dashboard