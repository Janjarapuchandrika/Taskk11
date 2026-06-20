import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import AddUser from "../pages/AddUser";
import Reports from "../pages/Reports";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

import Admin from "../pages/Admin";
import Student from "../pages/Student";
import Instructor from "../pages/Instructor";
import Manager from "../pages/Manager";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Quick Actions */}
      <Route
        path="/add-user"
        element={
          <ProtectedRoute>
            <AddUser />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Role Based Pages */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["Student"]}>
            <Student />
          </ProtectedRoute>
        }
      />

      <Route
        path="/instructor"
        element={
          <ProtectedRoute allowedRoles={["Instructor"]}>
            <Instructor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager"
        element={
          <ProtectedRoute allowedRoles={["Manager"]}>
            <Manager />
          </ProtectedRoute>
        }
      />

      {/* Invalid Route */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;