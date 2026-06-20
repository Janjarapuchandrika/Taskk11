import { useState } from "react";

const Settings = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const [name, setName] = useState(
    currentUser?.name || ""
  );

  const [email, setEmail] = useState(
    currentUser?.email || ""
  );

  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const updateProfile = () => {
    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((user) =>
      user.id === currentUser.id
        ? { ...user, name, email }
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        ...currentUser,
        name,
        email,
      })
    );

    alert("Profile Updated Successfully ✅");
  };

  const changePassword = () => {
    if (
      oldPassword !== currentUser.password
    ) {
      alert("Old Password Incorrect ❌");
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            password: newPassword,
          }
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        ...currentUser,
        password: newPassword,
      })
    );

    alert("Password Changed Successfully 🔐");

    setOldPassword("");
    setNewPassword("");
  };

  return (
    <div style={pageStyle}>

      <h1 style={titleStyle}>
        ⚙️ Account Settings
      </h1>

      {/* Profile Section */}

      <div style={cardStyle}>
        <h2>👤 Profile Information</h2>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
          style={inputStyle}
        />

        <button
          onClick={updateProfile}
          style={primaryButton}
        >
          Update Profile
        </button>
      </div>

      {/* Account Info */}

      <div style={cardStyle}>
        <h2>📋 Account Information</h2>

        <p>
          <strong>Role:</strong>{" "}
          {currentUser?.role}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {currentUser?.email}
        </p>

        <p>
          <strong>User ID:</strong>{" "}
          {currentUser?.id}
        </p>
      </div>

      {/* Password Section */}

      <div style={cardStyle}>
        <h2>🔐 Change Password</h2>

        <input
          type="password"
          placeholder="Current Password"
          value={oldPassword}
          onChange={(e) =>
            setOldPassword(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={changePassword}
          style={dangerButton}
        >
          Change Password
        </button>
      </div>

    </div>
  );
};

export default Settings;

const pageStyle = {
  padding: "30px",
  background: "#f8fafc",
  minHeight: "100vh",
};

const titleStyle = {
  marginBottom: "25px",
  color: "#0f172a",
};

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  marginBottom: "25px",
  boxShadow:
    "0 5px 15px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const primaryButton = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const dangerButton = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};