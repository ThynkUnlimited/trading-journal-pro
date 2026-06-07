import { useEffect, useState } from "react"

import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot
} from "firebase/firestore"

import { db } from "../firebase/firebase"
import { useAuth } from "../context/AuthContext"

import MainLayout from "../layouts/MainLayout"

import DashboardHeader from "../components/dashboard/DashboardHeader"
import KPIStatsRow from "../components/dashboard/KPIStatsRow"
import ChartSection from "../components/dashboard/ChartSection"
import AnalyticsSection from "../components/dashboard/AnalyticsSection"
import RecentTradesSection from "../components/dashboard/RecentTradesSection"
import NotesSection from "../components/dashboard/NotesSection"

function Dashboard() {

  const { user } = useAuth()

  const [trades, setTrades] = useState([])

  useEffect(() => {

    if (!user) return

    const q = query(

      collection(db, "trades"),

      where(
        "userId",
        "==",
        user.uid
      ),

      orderBy(
        "createdAt",
        "desc"
      )
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {

        const data = snapshot.docs.map(doc => ({

          id: doc.id,

          ...doc.data()

        }))

        setTrades(data)

      }
    )

    return () => unsubscribe()

  }, [user])

  return (

    <MainLayout>

      <div className="space-y-6">

        <DashboardHeader />

        <KPIStatsRow
          trades={trades}
        />

        <ChartSection
          trades={trades}
        />

        <AnalyticsSection
          trades={trades}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">

            <RecentTradesSection
              trades={trades}
            />

          </div>

          <NotesSection />

        </div>

      </div>

    </MainLayout>

  )
}

export default Dashboard