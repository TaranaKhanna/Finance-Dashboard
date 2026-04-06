import Dashboard from "./pages/Dashboard"
import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"

const App = () => {
  return (
    <div className="h-screen">
      <Header />

        <Dashboard />
    </div>
  )
}

export default App