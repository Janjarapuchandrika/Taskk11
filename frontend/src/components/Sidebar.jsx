import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const user =
    JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <div className="sidebar">

      <div className="logo">
        <h2>ERP System</h2>
        <p>{user.role || "Guest"}</p>
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/dashboard">📊 Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/profile">👤 Profile</NavLink>
        </li>

        {user.role === "Admin" && (
          <>
            <li>
              <NavLink to="/admin">🛡️ Admin Panel</NavLink>
            </li>

            <li>
              <NavLink to="/add-user">➕ Add User</NavLink>
            </li>
          </>
        )}

        {(user.role === "Admin" || user.role === "Manager") && (
          <li>
            <NavLink to="/reports">📄 Reports</NavLink>
          </li>
        )}

        {(user.role === "Admin" ||
          user.role === "Manager" ||
          user.role === "Instructor") && (
          <li>
            <NavLink to="/analytics">📈 Analytics</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/settings">⚙️ Settings</NavLink>
        </li>

        {user.role === "Manager" && (
          <li>
            <NavLink to="/manager">📋 Manager Panel</NavLink>
          </li>
        )}

        {user.role === "Instructor" && (
          <li>
            <NavLink to="/instructor">🎓 Instructor Panel</NavLink>
          </li>
        )}

        {user.role === "Student" && (
          <li>
            <NavLink to="/student">📚 Student Panel</NavLink>
          </li>
        )}

      </ul>

    </div>
  );
};

export default Sidebar;