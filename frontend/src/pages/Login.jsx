import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() ===
          form.email.trim().toLowerCase() &&
        user.password === form.password
    );

    if (foundUser) {
      // Save logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(foundUser)
      );

      // Success message
      alert("Login Successful ✅");

      // Go to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftPanel}>
        <h1 style={headingStyle}>
          RBAC Dashboard
        </h1>

        <p style={descriptionStyle}>
          Securely manage users, permissions,
          analytics and reports through a modern
          role-based management system.
        </p>

        <div style={iconStyle}>🔐</div>
      </div>

      {/* Right Side */}
      <div style={rightPanel}>
        <form
          onSubmit={handleSubmit}
          style={loginCard}
        >
          <h2 style={titleStyle}>
            Welcome Back 👋
          </h2>

          <p style={subtitleStyle}>
            Login to your account
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
  type="submit"
  style={loginButton}
>
  Login
</button>

<div
  style={{
    textAlign: "right",
    marginTop: "12px",
    marginBottom: "15px",
  }}
>
  <Link
    to="/forgot-password"
    style={{
      color: "#2563eb",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px",
    }}
  >
    Forgot Password?
  </Link>
</div>

<p style={registerText}>
  Don't have an account?{" "}
  <Link
    to="/register"
    style={linkStyle}
  >
    Register
  </Link>
</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

/* STYLES */

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
};

const leftPanel = {
  flex: 1,
  background:
    "linear-gradient(135deg,#2563eb,#7c3aed,#06b6d4)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px",
};

const headingStyle = {
  fontSize: "3rem",
  marginBottom: "20px",
};

const descriptionStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  maxWidth: "500px",
};

const iconStyle = {
  fontSize: "90px",
  marginTop: "40px",
};

const rightPanel = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f8fafc",
};

const loginCard = {
  width: "420px",
  background: "#fff",
  padding: "40px",
  borderRadius: "20px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.1)",
};

const titleStyle = {
  textAlign: "center",
  color: "#0f172a",
  marginBottom: "10px",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#64748b",
  marginBottom: "25px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const loginButton = {
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

const registerText = {
  textAlign: "center",
  marginTop: "20px",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "600",
};