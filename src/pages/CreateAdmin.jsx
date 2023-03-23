import React from "react";
import './CreateAdmin.css'
import Create from "../components/Create";
import Sidebar from "../components/Sidebar";

const CreateAdmin = () => {
  return (
    <div className="create">
      <Sidebar />
      <Create/>
    </div>
  );
};

export default CreateAdmin;
