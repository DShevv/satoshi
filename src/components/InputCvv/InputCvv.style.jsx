import styled from "styled-components";

export const Container = styled.label`
  width: fit-content;
  display: block;
  padding-left: 43px;
  border-left: solid 1px ${(props) => props.theme.colors.gray};
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) => props.theme.colors.white};
`;

export const InputContainer = styled.div`
  width: 84px;
  margin-bottom: 9px;
  padding: 15px 27px;
  border: 1px solid ${(props) => props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Input = styled.input`
  width: 20px;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
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
`;
