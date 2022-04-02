import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { useModal } from "./hooks/useModal";
import { ModalPortal } from "./components/Modal/ModalPortal";
import { useRequireAuth } from "./hooks/useRequireAuth";

export default () => {
  const modal = useModal();
  const RequireAuth = useRequireAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
      {modal.isOpen && <ModalPortal />}
    </>
  );
};
