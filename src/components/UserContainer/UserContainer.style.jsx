import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UserModal = styled.div`
  position: absolute;
  display: ${(props) => (props.active ? "block" : "none")};
  bottom: -5px;
  left: -10px;
  transform: translateY(100%);
  border-radius: 15px;
  width: 262px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 26px 24px 26px 24px;
  cursor: default;
  box-shadow: 0px 0px 10px #000000;
  z-index: 50;

  &::after {
    position: absolute;
    content: "";
    top: -10px;
    left: 23px;
    border-width: 0 9px 10px 9px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => props.theme.colors.blackGray} transparent;
    width: 0px;
    height: 0px;
  }
`;

export const Container = styled.div`
  position: relative;
  margin-left: 44px;
  margin-right: 65px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Email = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 18px;
`;

export const Icon = styled.div`
  width: 26px;
  height: 26px;
  color: ${(props) => props.theme.colors.red};

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const CabLink = styled(NavLink)`
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding-top: 18px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(236, 236, 236, 0.1);
  color: ${(props) => props.theme.colors.white};

  &.exit {
    color: ${(props) => props.theme.colors.gray};
    padding-bottom: 0;
  }

  &.exit ${Icon} {
    transform: rotate(180deg);
    color: ${(props) => props.theme.colors.gray};
  }
`;
