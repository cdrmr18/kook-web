import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
  height: 50px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

export const NavbarLogo = styled(Link)`
  margin: 0 6px;
  width: 25%;
`;

export const NavbarLink = styled(Link)`
  margin: 0 6px;
`;
