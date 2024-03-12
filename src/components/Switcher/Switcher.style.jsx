import styled from "styled-components";

export const Toggle = styled.div`
  position: absolute;
  border-radius: 40px;
  width: 19px;
  height: 19px;
  background-color: ${(props) => props.theme.colors.white};
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

  background-color: ${(props) => props.theme.colors.redLight};
  cursor: pointer;
  transition: all 0.2s ease;

  &.active ${Toggle} {
    transform: translateX(22px);
  }
`;
