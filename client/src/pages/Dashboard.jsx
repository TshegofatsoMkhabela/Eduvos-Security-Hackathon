import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.firstName}</h2>}
    </div>
  );
};

export default Dashboard;
