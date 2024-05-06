import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";
import { NavLink } from "react-router-dom";

export const Container = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 1080px) {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    padding: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
`;
