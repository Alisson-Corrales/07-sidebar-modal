import React from "react";
import { useAppContext } from "../util/context";
import { FaBars } from "react-icons/fa";

const SideBarButton = () => {
  const { openSidebar } = useAppContext();
  return (
    <button className="sidebar-toggle navbar" onClick={openSidebar}>
      <FaBars />
    </button>
  );
};

export default SideBarButton;
