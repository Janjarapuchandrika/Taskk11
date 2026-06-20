import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const handleReset = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (userIndex === -1) {
      alert("Email not found ❌");
      return;
    }

    users[userIndex].password =
      newPassword;

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert(
      "Password Reset Successful ✅"
    );

    navigate("/login");
  };

  return (
    <div style={containerStyle}>
      <form
        onSubmit={handleReset}
        style={cardStyle}
      >
        <h2>Forgot Password 🔑</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f8fafc",
};

const cardStyle = {
  width: "400px",
  background: "#fff",
  padding: "40px",
  borderRadius: "20px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
};