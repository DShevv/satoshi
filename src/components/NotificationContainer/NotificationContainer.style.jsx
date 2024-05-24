import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  top: 132px;
  right: 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  z-index: 1000;
  width: calc(100% - 10px);

  max-width: 367px;
  transition: all 0.2s ease;

  @media (max-width: 1080px) {
    top: 84px;
    right: 15px;
    width: calc(100% - 30px);
  }
`;
