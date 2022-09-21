import styled from "styled-components";

export const RecipesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
export const RecipesTitle = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 30px;
`;
