import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  height: 76px;

  border-top: solid 1px ${(props) => props.theme.colors.grayLight};
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 75px;
`;

export const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
`;
