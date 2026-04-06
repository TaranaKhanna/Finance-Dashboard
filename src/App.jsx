import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-900 text-white">
        
        {user && <Header user={user} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}

        <Routes>
          <Route
            path="/"
            element={!user ? <Login setUser={setUser} /> : <Navigate to="/dashboard" />}
          />

          <Route
            path="/dashboard"
            element={user ? <Dashboard setUser={setUser} isOpen={isSidebarOpen} /> : <Navigate to="/" />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;