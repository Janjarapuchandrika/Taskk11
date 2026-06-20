const Analytics = () => {

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
    <div style={{ padding: "30px" }}>

      <h1>📊 Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <div className="card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>{students}</h2>
          <p>Students</p>
        </div>

        <div className="card">
          <h2>{instructors}</h2>
          <p>Instructors</p>
        </div>

        <div className="card">
          <h2>{managers}</h2>
          <p>Managers</p>
        </div>

        <div className="card">
          <h2>{admins}</h2>
          <p>Admins</p>
        </div>

      </div>

    </div>
  );
};

export default Analytics;