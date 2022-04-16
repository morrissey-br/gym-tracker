import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Weight from "./pages/weight";
import WeightDetails from "./pages/weight/details";
import { useModal } from "./hooks/useModal";
import { ModalPortal } from "./components/Modal/ModalPortal";
import { useRequireAuth } from "./hooks/useRequireAuth";
import Running from "./pages/running";
import Layout from "./pages/layout";

export default () => {
  const modal = useModal();
  const RequireAuth = useRequireAuth();
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="weight">
            <Route index element={<Weight />} />
            <Route path="details" element={<WeightDetails />} />
          </Route>
          <Route path="running" element={<Running />} />
        </Route>
      </Routes>
      {modal.isOpen && <ModalPortal />}
    </div>
  );
};
