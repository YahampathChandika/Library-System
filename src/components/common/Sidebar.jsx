import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "../../assets/css/Sidebar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function SidebarComp() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("overview");
  const navigate = useNavigate();
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    navigate(menuItem);
  };

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        width="200px"
        collapsedWidth="70px"
        transitionDuration={500}
        className="sidebar"
      >
        <Menu>
          <center>
            <img src={logo} alt="My Book Shelf" className="sidebar-logo" />
          </center>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "overview" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  home
                </span>
              }
              onClick={() => handleMenuItemClick("overview")}
            >
              Home
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "search" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  search
                </span>
              }
              onClick={() => handleMenuItemClick("search")}
            >
              Search
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "admitted" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  shelves
                </span>
              }
              // onClick={() => handleMenuItemClick("admitted")}
            >
              My Shelf
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "patients" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  volunteer_activism
                </span>
              }
              // onClick={() => handleMenuItemClick("patients")}
            >
              Contribute
            </MenuItem>
          </div>
        </Menu>
        <div className="sidebar-bot">
          <p>About</p>
          <p>Support</p>
          <p>Terms & Conditions</p>
        </div>
      </Sidebar>
    </>
  );
}
export default SidebarComp;
