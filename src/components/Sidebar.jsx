import React from "react";
import { SidebarData } from "./SidebarData";
import Sidebaricon from "./Sidebaricon";

function Sidebar() {
  return (
    <div className="Sidebar">
      <Sidebaricon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className={`row ${window.location.pathname === value.link ? "active" : ""}`}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div className="icon">{value.icon}</div>
              <div className="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
