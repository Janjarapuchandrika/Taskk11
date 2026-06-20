import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
const navigate = useNavigate();

const [user, setUser] = useState({
name: "",
email: "",
password: "",
role: "Student",
});

const [generatedOtp, setGeneratedOtp] = useState("");
const [enteredOtp, setEnteredOtp] = useState("");
const [otpVerified, setOtpVerified] = useState(false);

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value,
});
};

const sendOtp = () => {
if (!user.email) {
alert("Please enter email first");
return;
}


const otp = Math.floor(
  100000 + Math.random() * 900000
).toString();

setGeneratedOtp(otp);

alert(`Demo OTP: ${otp}`);


};

const verifyOtp = () => {
if (enteredOtp === generatedOtp) {
setOtpVerified(true);
alert("OTP Verified Successfully");
} else {
alert("Invalid OTP");
}
};

const handleRegister = (e) => {
e.preventDefault();


if (!otpVerified) {
  alert("Please verify OTP first");
  return;
}

const users =
  JSON.parse(localStorage.getItem("users")) || [];

const emailExists = users.find(
  (u) =>
    u.email.toLowerCase() ===
    user.email.toLowerCase()
);

if (emailExists) {
  alert("Email already registered");
  return;
}

users.push({
  ...user,
  id: Date.now(),
});

localStorage.setItem(
  "users",
  JSON.stringify(users)
);

alert("Registration Successful");

navigate("/login");


};

return ( <div className="register-container">


  <div className="left-section">
    <h1>RBAC Dashboard</h1>

    <p>
      Manage users, records, reports,
      analytics and permissions with a
      professional role-based dashboard.
    </p>

    <div className="rocket">
      🚀
    </div>
  </div>

  <div className="right-section">

    <form
      className="register-card"
      onSubmit={handleRegister}
    >

      <h2>Create Account</h2>

      <p className="subtitle">
        Register to continue
      </p>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={user.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={user.email}
        onChange={handleChange}
        required
      />

      <button
        type="button"
        className="otp-btn"
        onClick={sendOtp}
      >
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOtp}
        onChange={(e) =>
          setEnteredOtp(e.target.value)
        }
      />

      <button
        type="button"
        className="verify-btn"
        onClick={verifyOtp}
      >
        Verify OTP
      </button>

      {otpVerified && (
        <p className="success">
          ✅ OTP Verified
        </p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />

      <select
        name="role"
        value={user.role}
        onChange={handleChange}
      >
        <option>Student</option>
        <option>Instructor</option>
        <option>Manager</option>
        <option>Admin</option>
      </select>

      <button
        type="submit"
        className="register-btn"
      >
        Create Account
      </button>

      <p className="login-link">
        Already have an account?
        <Link to="/login">
          Login
        </Link>
      </p>

    </form>

  </div>

</div>


);
}
