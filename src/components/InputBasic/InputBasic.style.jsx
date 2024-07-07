import { Field } from "formik";
import styled from "styled-components";

export const Error = styled.div`
  position: absolute;
  width: fit-content;
  bottom: -14px;
  left: 21px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.error};
`;

export const Container = styled.label`
  width: 100%;
  position: relative;
  display: block;
  height: 96px;
`;

export const Input = styled(Field)`
  flex: 1 1 auto;
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

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colors.white}!important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.colors.black} inset !important;
  }

  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;

export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) =>
    props.$error ? props.theme.colors.error : props.theme.colors.white};

  ${Input}:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.$isError
        ? props.theme.colors.error
        : props.theme.colors.white}!important;
  }

  @media (max-width: 1080px) {
    margin-bottom: 11px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;
  padding: 15px 27px;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.error : props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (max-width: 1080px) {
    margin-bottom: 0px;
    padding: 15px 24px;
  }
`;
