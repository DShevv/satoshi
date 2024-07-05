import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 1063px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`;
