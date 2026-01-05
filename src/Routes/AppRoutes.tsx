import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "../Components/DashboardLayout";
import DashboardPage from "../Pages/DashboardPage";
import LeadsPage from "../Pages/LeadsPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProtectedRoute from "../Components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected App */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="leads" element={<LeadsPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default AppRoutes;
