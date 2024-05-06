import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  height: 76px;

  border-top: solid 1px ${(props) => props.theme.colors.grayLight};

  @media (max-width: 1080px) {
    height: 147px;
    padding: 31px 0 19px 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 75px;

  @media (max-width: 1080px) {
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
`;
