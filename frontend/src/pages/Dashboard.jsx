import Layout from "../components/Layout";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const students = users.filter(
    (u) => u.role === "Student"
  ).length;

  const instructors = users.filter(
    (u) => u.role === "Instructor"
  ).length;

  const managers = users.filter(
    (u) => u.role === "Manager"
  ).length;

  const admins = users.filter(
    (u) => u.role === "Admin"
  ).length;

  return (
    <Layout>
      <div className="dashboard">

        {/* Header */}

        <div className="dashboard-header">

          <div>
            <h1>
              Welcome, {user?.name || "User"} 👋
            </h1>

            <p>
              Role : {user?.role}
            </p>

            <p>
              Email : {user?.email}
            </p>
          </div>

          <div className="profile-badge">
            {user?.name?.charAt(0)}
          </div>

        </div>

        {/* Statistics Cards */}

        <div className="cards">

          <div className="card blue">
            <h2>{users.length}</h2>
            <p>Total Users</p>
          </div>

          <div className="card green">
            <h2>{students}</h2>
            <p>Students</p>
          </div>

          <div className="card orange">
            <h2>{instructors}</h2>
            <p>Instructors</p>
          </div>

          <div className="card red">
            <h2>{admins}</h2>
            <p>Admins</p>
          </div>

          <div className="card purple">
            <h2>{managers}</h2>
            <p>Managers</p>
          </div>

        </div>

        {/* Dashboard Grid */}

        <div className="dashboard-grid">

          <div className="activity-box">

            <h3>Recent Activity</h3>

            <ul>
              <li>✅ User Logged In</li>
              <li>✅ Registration System Active</li>
              <li>✅ Role Permissions Verified</li>
              <li>✅ Dashboard Running Successfully</li>
            </ul>

          </div>

          <div className="activity-box">

            <h3>Role Summary</h3>

            <ul>
              <li>👨‍🎓 Students : {students}</li>
              <li>👨‍🏫 Instructors : {instructors}</li>
              <li>👨‍💼 Managers : {managers}</li>
              <li>🛡️ Admins : {admins}</li>
            </ul>

          </div>

        </div>

        {/* User Information */}

        <div className="activity-box">

          <h3>My Account</h3>

          <ul>
            <li>
              Name : {user?.name}
            </li>

            <li>
              Email : {user?.email}
            </li>

            <li>
              Role : {user?.role}
            </li>

            <li>
              Status : Active ✅
            </li>
          </ul>

        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;