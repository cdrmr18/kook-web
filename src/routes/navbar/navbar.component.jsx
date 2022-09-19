import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cartIcon/cartIcon.component";
import CartDropdown from "../../components/cartDropdown/cartDropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
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
  const { showCart } = useContext(CartContext);

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
