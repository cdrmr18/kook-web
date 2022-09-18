import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebaseUtils";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  NavbarContainer,
  NavLinksContainer,
  NavbarLink,
  NavbarLogo,
} from "./navbar.style";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span onClick={signOutUser}>Sign out</span>
          ) : (
            <NavbarLink to="sign-in">Sign in</NavbarLink>
          )}
        </NavLinksContainer>
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
