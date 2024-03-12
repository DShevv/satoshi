import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  height: 111px;

  border-bottom: solid 1px ${(props) => props.theme.colors.grayLight};
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  display: block;
  width: 157px;
  height: 62px;
  text-decoration: none;
`;

export const Lang = styled(NavLink)`
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
