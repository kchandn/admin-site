import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => navigate("/employeelist")}
      >
        Show Employee Details
      </button>
      <button type="button" className="btn btn-primary" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
