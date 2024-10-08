import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SvgBurger, SvgClose } from "../../assets/icons/svgs";

export const Container = styled.header`
  position: relative;
  height: 111px;

  border-bottom: solid 1px ${(props) => props.theme.colors.grayLight};

  @media (max-width: 1080px) {
    height: 80px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 103;
  background: ${(props) => props.theme.colors.black};
`;

export const Logo = styled(NavLink)`
  display: block;
  width: 157px;
  height: 62px;
  text-decoration: none;

  @media (max-width: 1080px) {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }
`;

export const Lang = styled(NavLink)`
  display: none;

  margin-right: 27px;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  margin-left: 43px;
  //margin-right: 29px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 1080px) {
    margin: 0 20px;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  height: calc(100vh - 111px);
  width: 100%;
  position: absolute;
  top: -100vh;
  left: 0;

  backdrop-filter: blur(10px);
  background: rgba(35, 35, 35, 0.15);
  z-index: 100;

  transition: all 0.5s ease;

  &.active {
    top: 111px;
  }

  @media (max-width: 1080px) {
    height: calc(100vh - 79px);
    overflow: auto;

    &.active {
      top: 80px;
    }
  }
`;

export const MenuContent = styled.div`
  padding-top: 44px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;

  @media (max-width: 1080px) {
    padding: 30px 0 70px 0;
    min-height: 0;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  @media (max-width: 1080px) {
    gap: 4px;
  }
`;

export const ItemNumber = styled.div`
  flex: 0 0 154px;
  padding: 32px 27px;
  display: flex;
  justify-content: end;
  align-items: center;
  max-width: 154px;
  font-weight: 500;
  font-size: 21px;
  text-align: right;
  color: ${(props) => props.theme.colors.redDark};
  background-color: ${(props) => props.theme.colors.blackGray};
  transition: all 0.2s ease;

  @media (max-width: 1080px) {
    flex: 0 0 46px;
    max-width: 46px;
    padding: 14px 10px;
    font-size: 12px;
  }
`;

export const ItemName = styled.div`
  padding: 32px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: start;

  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blackGray};
  transition: all 0.2s ease;

  @media (max-width: 1080px) {
    padding: 16px 10px;
    font-size: 14px;
  }
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  gap: 6px;
  text-decoration: none;

  &:hover ${ItemNumber} {
    color: ${(props) => props.theme.colors.black};
  }

  &:hover ${ItemName}, &:hover ${ItemNumber} {
    background-color: ${(props) => props.theme.colors.red};
  }

  @media (max-width: 1080px) {
    gap: 3px;
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    margin-top: 0;
    flex-direction: column-reverse;
    margin-top: 20px;
    height: 124px;
  }
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  @media (max-width: 1080px) {
    margin-top: 20px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 28px;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  gap: 28px;

  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledClose = styled(SvgClose)`
  position: absolute;
  transition: all 0.3s ease;
  opacity: 0;

  &.active {
    transform: rotate(-180deg);
    opacity: 1;
  }
`;

export const StyledBurger = styled(SvgBurger)`
  transition: all 0.3s ease;
  opacity: 0;

  &.active {
    transform: rotate(180deg);
    opacity: 1;
  }
`;
