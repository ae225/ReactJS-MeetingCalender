import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div
      className="app-container"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Navbar />

      <div
        className="sidebar-container"
        style={{ display: "flex", flexGrow: 1 }}
      >
        <Sidebar style={{ height: "100vh" }} />

        <div className="main-content" style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
