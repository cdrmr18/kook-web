import styled from "styled-components";
import { Link } from "@chakra-ui/react";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

export const NavbarLink = styled(Link)`
  margin: 0 6px;
`;
