import React from "react";
import "./style.css";
const SideBar = () => {
  return (
    <div className="sidebar-main d-flex flex-column justify-content-evenly align-items-center">
      <img src="/public/Logo.svg" />
      <div className="menu d-flex flex-column justify-content-between align-items-center">
        <a href="#">
          <img className="pages-img" src="/public/Vector6.svg" />
        </a>
        <a href="#">
          <img className="pages-img" src="/public/Vector5.svg" />
        </a>
        <a href="#">
          <img className="pages-img" src="/public/Vector4.svg" />
        </a>
        <a href="#">
          <img className="pages-img" src="/public/Vector.svg" />
        </a>
        <a href="#">
          <img className="pages-img" src="/public/Vector3.svg" />
        </a>
        <a href="#">
          <img className="pages-img" src="/public/Vector2.svg" />
        </a>
      </div>
      <a href="#">
        <img className="pages-img" src="/public/Vector1.svg" />
      </a>
    </div>
  );
};

export default SideBar;
