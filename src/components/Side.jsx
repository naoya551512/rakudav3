import React, { useState, useEffect } from "react";
import "./Side.css";
import { SidebarData } from "./SidebarData";

function Side() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem("activeIndex");
    return savedIndex ? JSON.parse(savedIndex) : 0;  
  });

  useEffect(() => {
    if (window.location.pathname === "/"||window.location.pathname === "home") {
      setActiveIndex(0);  
    }
    localStorage.setItem("activeIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);

  return (
    <div className="navigation">
      <ul>
        {SidebarData.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}  
            onClick={() => setActiveIndex(index)}  
          >
            <a href={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Side;
