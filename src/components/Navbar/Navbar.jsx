import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navData = [
    { path: "/", headerTitle: "Home" },
    { path: "/construction", headerTitle: "Construction Model" },
    { path: "/image", headerTitle: "View 360 Images" },
    { path: "/about", headerTitle: "About" },
  ];
  return (
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        {navData.map((item) => {
          return (
            <li class="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.headerTitle}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
