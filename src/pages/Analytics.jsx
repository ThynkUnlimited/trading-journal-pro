import MainLayout
from "../layouts/MainLayout"

function Analytics() {

  return (

    <MainLayout>

      <div className="space-y-4">

        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">

            Analytics

          </p>

          <h1 className="text-3xl font-bold text-white">

            Performance Analytics

          </h1>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

          <p className="text-zinc-400">

            Advanced analytics dashboard coming next.

          </p>

        </div>

      </div>

    </MainLayout>
  )
}

export default Analytics