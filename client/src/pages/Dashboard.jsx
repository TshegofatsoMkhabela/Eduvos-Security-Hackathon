import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="h-screen flex bg-[#F3F5F7] px-3 py-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
