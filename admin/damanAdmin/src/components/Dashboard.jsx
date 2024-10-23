import React from "react";
import Numbers from "./Numbers"; // Default import, no curly braces

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <h1 className="font-semibold text-white">Dashboard V5</h1>
      {/* Add more content like this */}
      <Numbers />
    </div>
  );
};

export default Dashboard;
