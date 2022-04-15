import { FaChevronLeft } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { useCore } from "../../hooks/useCore";
import { useRequireAuth } from "../../hooks/useRequireAuth";

export default () => {
  const { auth } = useCore();
  const RequireAuth = useRequireAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.logout();
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <RequireAuth>
      <div className="h-full flex flex-col">
        <header className="h-12 w-full flex justify-between p-3">
          <button onClick={handleNavigateBack}>
            <FaChevronLeft />
          </button>
          <button onClick={handleLogout}>Sair</button>
        </header>
        <main className="flex-1 overflow-auto pb-4">
          <Outlet />
        </main>
      </div>
    </RequireAuth>
  );
};
