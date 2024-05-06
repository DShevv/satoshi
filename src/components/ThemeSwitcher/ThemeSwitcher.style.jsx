import styled from "styled-components";

export const Toggle = styled.div`
  position: absolute;
  border-radius: 40px;
  width: 19px;
  height: 19px;
  background-color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 40px;
  width: 47px;
  height: 25px;
  padding: 3px;
  display: flex;
  align-items: center;

  display: none;

  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    background-color: ${(props) => props.theme.colors.black};
  }

  &.active ${Toggle} {
    background-color: ${(props) => props.theme.colors.white};
    transform: translateX(22px);
  }

  @media (max-width: 1080px) {
    &.desktop {
      display: none;
    }
  }
`;
