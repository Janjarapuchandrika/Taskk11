import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;