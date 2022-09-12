import React from "react";
import {
  BannerContainer,
  BannerHeader,
  BannerContent,
  BannerMain,
} from "./homeBanner.style";

const HomeBanner = () => {
  return (
    <BannerContainer>
      <BannerMain>
        <BannerHeader className="header">Kook</BannerHeader>
        <BannerContent className="subheader">
          What are you inspired to create today?
        </BannerContent>
        <div className="search">
          <form action="">
            <input type="search" placeholder="Search recipes" />
            <button>Search</button>
          </form>
        </div>
      </BannerMain>
    </BannerContainer>
  );
};

export default HomeBanner;
