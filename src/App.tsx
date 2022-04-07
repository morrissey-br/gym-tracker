import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import WeightMeasurement from "./pages/dashboard/weight-measurement";
import WeightMeasurementDetails from "./pages/dashboard/weight-measurement/details";
import { useModal } from "./hooks/useModal";
import { ModalPortal } from "./components/Modal/ModalPortal";
import { useRequireAuth } from "./hooks/useRequireAuth";
import Dashboard from "./pages/dashboard";

export default () => {
  const modal = useModal();
  const RequireAuth = useRequireAuth();
  return (
    <div className="h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<WeightMeasurement />} />
          <Route
            path="weight-measurement-details"
            element={<WeightMeasurementDetails />}
          />
        </Route>
      </Routes>
      {modal.isOpen && <ModalPortal />}
    </div>
  );
};
