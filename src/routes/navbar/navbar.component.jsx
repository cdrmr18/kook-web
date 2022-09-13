import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  NavbarContainer,
  NavLinksContainer,
  NavbarLink,
  NavbarLogo,
} from "./navbar.style";

const NavBar = () => {
  return (
    <Fragment>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo />
        </NavbarLogo>
        <NavLinksContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/recipes">Recipes</NavbarLink>
          <NavbarLink to="/chefs">Chefs</NavbarLink>
          <NavbarLink to="/bookings">Bookings</NavbarLink>
          <NavbarLink to="/dashboard">Dashboard</NavbarLink>
          <NavbarLink to="sign-in">Sign in</NavbarLink>
          <NavbarLink to="sign-out">Sign out</NavbarLink>
        </NavLinksContainer>
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
