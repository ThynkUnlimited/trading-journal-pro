import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TradesTable from "../components/TradesTable";

import Analytics from "../components/Analytics";
import Journal from "../components/Journal";
import CalendarView from "../components/CalendarView";
import SettingsPage from "../components/SettingsPage";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "analytics":
        return <Analytics />;

      case "journal":
        return <Journal />;

      case "calendar":
        return <CalendarView />;

      case "settings":
        return <SettingsPage />;

      default:
        return <TradesTable />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#081018] text-white">
      {/* SIDEBAR */}
      <aside className="relative z-50 w-[250px] shrink-0 border-r border-white/10 bg-[#0f172a]">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={handleLogout}
        />
      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="min-w-0 p-4">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}