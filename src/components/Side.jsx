import React, { useState, useEffect } from "react";
import "./Side.css";
import { SidebarData } from "./SidebarData";

function Side() {
  // 初期状態をlocalStorageから取得する
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem("activeIndex");
    return savedIndex ? JSON.parse(savedIndex) : 0;  // localStorageから取得、なければ0に設定
  });

  // activeIndexが変更されたときにlocalStorageに保存
  useEffect(() => {
    localStorage.setItem("activeIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);

  return (
    <div className="navigation">
      <ul>
        {SidebarData.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}  // activeが正しく付けられているか
            onClick={() => setActiveIndex(index)}  // クリックでactiveIndexが更新される
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
