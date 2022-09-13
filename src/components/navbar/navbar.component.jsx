import React from "react";
import { Link } from "@chakra-ui/react";
import { NavbarContainer, NavLinksContainer, NavbarLink } from "./navbar.style";

const NavBar = () => {
  return (
    <NavbarContainer>
      <h2>Kook</h2>
      <NavLinksContainer>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>Recipes</NavbarLink>
        <NavbarLink>Chefs</NavbarLink>
        <NavbarLink>Bookings</NavbarLink>
        <NavbarLink>Dashboard</NavbarLink>
        <NavbarLink>Cart</NavbarLink>
        <NavbarLink>Sign in</NavbarLink>
        <NavbarLink>Sign out</NavbarLink>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default NavBar;
