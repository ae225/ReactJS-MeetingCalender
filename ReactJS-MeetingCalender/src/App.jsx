import React from "react";
import Navbar from "./components/shared/Navbar";
import Aside from "./components/shared/Aside";
import Footer from "./components/shared/Footer";
import MeetingCalendar from "./components/meeting/MeetingCalendar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div className="app-container d-flex flex-column" style={{ height: "100vh" }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Aside />
        <main style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <MeetingCalendar />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
