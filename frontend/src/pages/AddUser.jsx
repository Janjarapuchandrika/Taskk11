import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) =>
        u.email.toLowerCase() ===
        user.email.toLowerCase()
    );

    if (existingUser) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      ...user,
      id: Date.now(),
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("User Added Successfully ✅");

    navigate("/dashboard");
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>

        <h1 style={titleStyle}>
          ➕ Add New User
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Student</option>
            <option>Instructor</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>

          <button
            type="submit"
            style={buttonStyle}
          >
            Save User
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddUser;

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f1f5f9",
};

const cardStyle = {
  width: "500px",
  background: "#fff",
  padding: "35px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#0f172a",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};