import { Toolbar } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Toolbar />
      {children}
    </>
  );
};

export default MainLayout;
