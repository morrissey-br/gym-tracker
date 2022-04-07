import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import DashboardDetails from "./pages/dashboard/details";
import { useModal } from "./hooks/useModal";
import { ModalPortal } from "./components/Modal/ModalPortal";
import { useRequireAuth } from "./hooks/useRequireAuth";

export default () => {
  const modal = useModal();
  const RequireAuth = useRequireAuth();
  return (
    <div className="h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard">
          <Route
            index
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="details"
            element={
              <RequireAuth>
                <DashboardDetails />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      {modal.isOpen && <ModalPortal />}
    </div>
  );
};
