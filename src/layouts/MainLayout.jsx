import Topbar from "../components/dashboard/Topbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] overflow-x-hidden">
      <div className="flex flex-col min-h-screen">
        <Topbar />

        <main className="flex-1">
          <div className="px-3 sm:px-6 py-4 sm:py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;