import React, { Fragment } from "react";
import TopCard from "../topCard/topCard.component";

import { TopContainer, TopHeader, ButtonContainer } from "./topList.style";

const TopList = ({ title, data }) => {
  return (
    <Fragment>
      <TopHeader>Top {title}</TopHeader>
      <TopContainer>
        {data.map((data) => (
          <TopCard key={data.id} data={data} />
        ))}
      </TopContainer>
      <ButtonContainer>
        <button>All {title}</button>
      </ButtonContainer>
    </Fragment>
  );
};

export default TopList;
