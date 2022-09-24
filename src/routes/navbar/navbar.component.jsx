import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cartIcon/cartIcon.component";
import CartDropdown from "../../components/cartDropdown/cartDropdown.component";

import { signOutUser } from "../../utils/firebase/firebaseUtils";
import { getCurrentUser } from "../../store/user/userSelector";
import { getToggleCart } from "../../store/cart/cartSelector";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  NavbarContainer,
  NavLinksContainer,
  NavbarLink,
  NavbarLogo,
} from "./navbar.style";

const NavBar = () => {
  const { currentUser } = useSelector(getCurrentUser);
  const { showCart } = useSelector(getToggleCart);

  return (
    <Fragment>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo />
        </NavbarLogo>
        <NavLinksContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/recipes">Recipes</NavbarLink>
          {currentUser ? (
            <span onClick={signOutUser}>Sign out</span>
          ) : (
            <NavbarLink to="sign-in">Sign in</NavbarLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {showCart && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
