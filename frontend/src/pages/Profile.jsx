import Layout from "../components/Layout";
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return (
    <Layout>
      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-header">
            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <h2>{user?.name}</h2>

            <p>{user?.role}</p>
          </div>

          <div className="profile-details">

            <div className="detail-box">
              <label>Full Name</label>
              <span>{user?.name}</span>
            </div>

            <div className="detail-box">
              <label>Email Address</label>
              <span>{user?.email}</span>
            </div>

            <div className="detail-box">
              <label>Role</label>
              <span>{user?.role}</span>
            </div>

            <div className="detail-box">
              <label>Status</label>
              <span className="active">
                Active
              </span>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Profile;
