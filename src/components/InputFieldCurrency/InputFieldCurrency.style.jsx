import { Field } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) =>
    props.$error ? props.theme.colors.error : props.theme.colors.white};
`;

export const Label = styled.label`
  height: 49px;
  min-width: 0;
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;
  padding: 20px 24px 20px 29px;
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
    padding: 10px 15px 10px 15px;
  }
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
  min-width: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }

  @media (max-width: 1080px) {
    font-size: 16px;
    min-width: 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    font-size: 11px;
  }
`;

export const Hint = styled.div`
  flex: 0 0 auto;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

export const CurrentCurrency = styled.div`
  border-radius: 42px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 14px 10px;
  gap: 11px;

  background-color: ${(props) => props.theme.colors.blackGray};
  cursor: pointer;

  @media (max-width: 1080px) {
    padding: 7px 10px;
  }
`;

export const CurrentText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 134%;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 475px) {
    font-size: 9px;
  }
`;

export const CurrentImage = styled.img`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;

  @media (max-width: 1080px) {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
  }
`;

export const CurrentArrow = styled.img`
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: rgba(35, 35, 35, 0.15);
  z-index: -1;
  transition: all 0.3s ease;
  opacity: 0;
  top: 0;
  left: 0;

  &.active {
    opacity: 1;
    z-index: 200;
  }
`;

export const Modal = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 25px;
  width: 515px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 41px 29px 130px 29px;

  @media (max-width: 1080px) {
    max-width: 527px;
    width: calc(100% - 30px);
    padding: 25px 25px 25px 25px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: -1;
    border-radius: 25px;

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      70deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.23573179271708689) 51%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListArrow = styled.div`
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  transform: rotate(-90deg);
  color: ${(props) => props.theme.colors.white};
`;

export const ItemCaption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 475px) {
    text-align: left;
    font-size: 14px;
  }
`;

export const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 11px;
  align-items: center;
  padding: 24px 22px;
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.black};
  outline: none;
  border-radius: 42px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.red};
  }

  &:hover ${ItemCaption}, &:hover ${ListArrow} {
    color: ${(props) => props.theme.colors.red};
  }

  @media (max-width: 475px) {
    padding: 13px 22px;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;
