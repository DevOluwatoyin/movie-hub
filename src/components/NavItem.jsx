import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ items, onClick }) => {
  const location = useLocation();

  // Check if the current path matches the NavItem path
  const isActive = location.pathname === items.path;

  return (
    <li
      className={`hover:underline  underline-offset-4 transition-all ${
        isActive
          ? "text-red-500 underline hover:text-heart-color-hover"
          : "hover:text-heart-color-hover"
      }`}
    >
      <Link className="lg:text-xl" to={items.path} onClick={onClick}>
        {items.name}
      </Link>
    </li>
  );
};

export default NavItem;
