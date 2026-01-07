import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "../Components/DashboardLayout";
import DashboardPage from "../Pages/DashboardPage";
import LeadsPage from "../Pages/LeadsPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
// import ProtectedRoute from "../Components/ProtectedRoute";
import Landing from "../Pages/Landing";
import Demo from "../Pages/Demo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PUBLIC APP */}
      <Route path="/app/*" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="leads" element={<LeadsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
