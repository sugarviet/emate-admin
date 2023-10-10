import { useNavigate } from "react-router-dom";

function useNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return {
    handleLogout,
  };
}

export default useNavbar;