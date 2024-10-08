import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";

export const StyledSubmit = styled(StyledButton)`
  border-radius: 37px;
  padding: 15px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  transition: all 0.2s ease;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.grayEmpty};

  border: 2px solid ${(props) => props.theme.colors.grayEmpty};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 1080px) {
    font-size: 14px;
  }
`;
