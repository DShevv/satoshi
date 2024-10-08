import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapperBorder = styled.div`
  position: relative;
  margin-top: 87px;
  margin-bottom: 160px;

  @media (max-width: 1080px) {
    margin-top: 46px;
    margin-bottom: 70px;
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 0;
    border-radius: 25px;

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      70deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.23573179271708689) 51%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Container = styled.section`
  width: 100%;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 28px 73px 64px 66px;
  position: relative;
  z-index: 2;

  @media (max-width: 1080px) {
    margin-top: 46px;
    margin-bottom: 70px;
    width: 100%;
    padding: 21px 22px 43px 22px;
    overflow: hidden;
  }
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

  @media (max-width: 1080px) {
    gap: 24px;

    &::after {
      width: 141px;
    }

    &.active::after {
      transform: translateX(calc(100% + 24px));
    }
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

  @media (max-width: 1080px) {
    margin-bottom: 4px;
    font-size: 18px;
  }

  @media (max-width: 1080px) {
    font-size: 13px;
    gap: 6px;
    width: 141px;
  }
`;
