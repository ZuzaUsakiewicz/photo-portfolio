import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
`;

export const PhotoGridContainer = styled.div`
  display: grid;
  gridtemplatecolumns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px 24px;
`;
