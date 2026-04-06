import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
    const navigate = useNavigate();

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      
      <div className="bg-slate-800 p-6 rounded-xl w-full max-w-sm space-y-4 text-center">
        
        <h2 className="text-xl font-bold">Demo Login</h2>
        <p className="text-sm text-gray-400">
          Select a user to continue
        </p>

        <div className="space-y-3">
          <button
            onClick={() =>
              handleLogin({ email: "a@gmail.com", name: "User A" })
            }
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg"
          >
            Login as User A
          </button>

          <button
            onClick={() =>
              handleLogin({ email: "b@gmail.com", name: "User B" })
            }
            className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg"
          >
            Login as User B
          </button>

          <button
            onClick={() =>
              handleLogin({ email: "c@gmail.com", name: "User C" })
            }
            className="w-full bg-purple-500 hover:bg-purple-600 py-2 rounded-lg"
          >
            Login as User C
          </button>

        </div>

      </div>
    </div>
  );
}