import { Field } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.label`
  width: 100%;
`;

export const InputContainer = styled.div`
  padding: 13px 17px;
  border: 1px solid ${(props) => props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Input = styled(Field)`
  flex: 1 1 auto;
  height: fit-content;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  outline: none;
  border: none;
  min-width: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }
`;

export const Hint = styled(NavLink)`
  flex: 0 0 auto;
  display: block;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  color: ${(props) => props.theme.colors.grayEmpty};
  text-decoration: none;
`;

export const Icon = styled.div`
  flex: 0 0 24px;
  height: 24px;
`;
