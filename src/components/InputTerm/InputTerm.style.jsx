import { Field } from "formik";
import styled from "styled-components";

export const Container = styled.label`
  width: fit-content;
  display: block;
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) =>
    props.$error ? props.theme.colors.error : props.theme.colors.white};
`;

export const InputContainer = styled.div`
  width: 134px;
  margin-bottom: 9px;
  padding: 15px 27px;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.error : props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Input = styled(Field)`
  width: 27px;
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
