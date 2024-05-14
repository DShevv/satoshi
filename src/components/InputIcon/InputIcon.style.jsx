import { Field } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Error = styled.div`
  position: absolute;
  width: fit-content;
  bottom: -22px;
  left: 21px;
  font-weight: 200;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.error};
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

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colors.white}!important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.colors.black} inset !important;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }

  @media (max-width: 1080px) {
    font-size: 14px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const Hint = styled(NavLink)`
  flex: 0 0 auto;
  display: block;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 1080px) {
    font-size: 11px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Icon = styled.div`
  flex: 0 0 24px;
  height: 24px;
`;

export const Container = styled.label`
  width: 100%;
  position: relative;

  ${InputContainer} {
    border-color: ${(props) =>
      props.$isError ? props.theme.colors.error : props.theme.colors.grayEmpty};
  }

  ${Input} {
    color: ${(props) =>
      props.$isError ? props.theme.colors.error : props.theme.colors.white};
  }

  ${Input}:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.$isError
        ? props.theme.colors.error
        : props.theme.colors.white}!important;
  }
`;
