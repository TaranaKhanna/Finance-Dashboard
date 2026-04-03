import Dashboard from "./pages/Dashboard"
import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"

const App = () => {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App