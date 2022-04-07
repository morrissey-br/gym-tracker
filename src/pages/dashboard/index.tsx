import { FaChevronCircleLeft } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { useCore } from "../../hooks/useCore";

export default () => {
  const { auth } = useCore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.logout();
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="flex justify-between p-3">
        <button onClick={handleNavigateBack}>
          <FaChevronCircleLeft />
        </button>
        <button onClick={handleLogout}>Sair</button>
      </header>
      <Outlet />
    </>
  );
};
