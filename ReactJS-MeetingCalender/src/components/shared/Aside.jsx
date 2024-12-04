import React, { useState } from "react";

const Aside = () => {
  const [activeLink, setActiveLink] = useState("Schedule Meeting"); 

  const links = [
    "Schedule Meeting",
    "Manage Meetings",
    "Users & Permissions",
    "Notifications",
    "Analytics",
    "Settings",
  ];

  return (
    <aside
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <h4 className="text-center mb-4">Dashboard</h4>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li
            key={link}
            className={`nav-item mb-2`}
            onClick={() => setActiveLink(link)}
          >
            <a
              href="#"
              className={`nav-link ${
                activeLink === link ? "active" : ""
              } text-white`}
              style={{
                background: activeLink === link ? "#007bff" : "transparent",
                padding: "10px 15px",
                borderRadius: "5px",
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
