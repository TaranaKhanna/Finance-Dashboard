import { useRole } from "../../context/RoleContext";

export default function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
      <span className="text-sm text-gray-400">Role:</span>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-slate-700 px-3 py-1 rounded-lg text-sm"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}