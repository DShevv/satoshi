import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 87px;
  margin-bottom: 160px;
  width: 100%;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 28px 73px 64px 66px;
`;

export const CabinetHeader = styled.div`
  position: relative;
  display: flex;
  gap: 68px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(236, 236, 236, 0.1);

  &::after {
    position: absolute;
    width: 154px;
    height: 2px;
    content: "";
    left: 0;
    bottom: -1px;
    background-color: ${(props) => props.theme.colors.red};
    transition: all 0.2s ease-in;
  }

  &.active::after {
    transform: translateX(calc(100% + 64px));
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 10px;
  width: 154px;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;

  &.active {
    color: ${(props) => props.theme.colors.white};
  }
`;
