import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";
import { NavLink } from "react-router-dom";

export const Container = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.colors.red};
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 1080px) {
    &.desktop {
      display: none;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
`;
