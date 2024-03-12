import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 45px;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 700;
  font-size: 14px;
  transition: all 0.2s ease;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;
