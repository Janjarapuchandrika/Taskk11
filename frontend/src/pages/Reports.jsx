import { useState } from "react";

const Reports = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [search, setSearch] = useState("");

  const [editingUser, setEditingUser] =
    useState(null);

  const deleteUser = (id) => {
    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  const saveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id
        ? editingUser
        : user
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("User Updated Successfully ✅");

    setEditingUser(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>📄 User Management</h1>

      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <button
                  onClick={() =>
                    setEditingUser(user)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteUser(user.id)
                  }
                  style={{
                    marginLeft: "10px",
                    background: "red",
                    color: "#fff",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h2>✏️ Edit User</h2>

          <input
            type="text"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                name: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            type="email"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                email: e.target.value,
              })
            }
          />

          <br /><br />

          <select
            value={editingUser.role}
            onChange={(e) =>
              setEditingUser({
                ...editingUser,
                role: e.target.value,
              })
            }
          >
            <option>Student</option>
            <option>Instructor</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>

          <br /><br />

          <button onClick={saveUser}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Reports;