import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = ({items, onClick}) => {
  return (
    <li className="hover:underline hover:text-heart-color-hover">
      <Link className="lg:text-xl" to={items.path} onClick={onClick}>
        {items.name}
      </Link>
    </li>
  );
}

export default NavItem