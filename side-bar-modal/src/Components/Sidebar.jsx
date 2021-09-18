import React from "react";
import logo from "../util/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, socials } from "../util/consts";
import { useAppContext } from "../util/context";
import { Link } from "react-router-dom";

const filterList = ["error", "team"];

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={`sidebar ${sidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding Addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.filter((link) => !filterList.includes(link.text))
        .map(link => {
            const {id, url, text, icon} = link;
            return (
                <li key={id}>
                    <Link to={url}>
                        {icon}{text}
                    </Link>
                </li>
            )
        })}
      </ul>
      <ul className="socials">
          {socials.map(each => {
              const {id, url, icon} = each;
              return <li key={id}>
                  <a href={url}>{icon}</a>
              </li>
          })}
      </ul>
    </aside>
  );
};

export default Sidebar;
