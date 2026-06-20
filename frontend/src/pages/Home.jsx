import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* NAVBAR */}
      <div className="navbar">

        <h2 className="logo">My ERP System</h2>

        <div className="nav-right">

          <Link to="/login">
            <button className="btn login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="btn register-btn">Register</button>
          </Link>

        </div>

      </div>

      {/* HERO SECTION */}
      <div className="hero">

        <h1>Welcome to Role-Based System 🚀</h1>

        <p>
          Admin • Manager • Instructor • Student
        </p>

        <div className="hero-buttons">

          <Link to="/login">
            <button className="hero-btn primary">Get Started</button>
          </Link>

          <Link to="/register">
            <button className="hero-btn secondary">Create Account</button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;