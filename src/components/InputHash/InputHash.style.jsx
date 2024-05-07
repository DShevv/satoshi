import styled from "styled-components";

export const Container = styled.label`
  width: 100%;
  cursor: pointer;
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) => props.theme.colors.white};
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;
  padding: 15px 27px;
  border: 1px solid ${(props) => props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.div`
  flex: 1 1 auto;
  max-width: 301px;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }

  @media (max-width: 1080px) {
    overflow: hidden;
  }
`;

export const CopyButton = styled.button`
  flex: 0 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
