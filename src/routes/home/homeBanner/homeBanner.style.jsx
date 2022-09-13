import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1603356887214-0441954124ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-position: center;
  padding: 150px 0;
`;

export const BannerMain = styled.div`
  margin: 0 60px;
`;

export const BannerHeader = styled.h1`
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 32px;
  font-weight: bold;
`;

export const BannerContent = styled.p`
  font-size: 20px;
  color: white;
  opacity: 0.7;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;
