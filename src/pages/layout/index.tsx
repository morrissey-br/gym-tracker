import { FaChevronLeft } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
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
          <nav className="flex gap-2">
            <button onClick={handleNavigateBack}>
              <FaChevronLeft />
            </button>
            <NavLink to="/weight">Medidas</NavLink>
            <NavLink to="/running">Corrida</NavLink>
          </nav>

          <button onClick={handleLogout}>Sair</button>
        </header>
        <main className="flex-1 overflow-auto py-4">
          <Outlet />
        </main>
      </div>
    </RequireAuth>
  );
};
