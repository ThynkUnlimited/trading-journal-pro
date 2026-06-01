import {

  Routes,
  Route,
  Navigate

} from "react-router-dom"

import Dashboard
from "./pages/Dashboard"

import Analytics
from "./pages/Analytics"

import Trades
from "./pages/Trades"

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/journal"
        element={<Trades />}
      />

      <Route
        path="*"
        element={
          <Navigate to="/" />
        }
      />

    </Routes>
  )
}

export default App