import styled from "styled-components";
import { SvgRefreshCur, SvgRefreshGlow } from "../../../assets/icons/svgs";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  max-width: 520px;
  flex: 1 1 auto;
  display: flex;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  border-radius: 25px;
  max-width: 520px;
  flex: 1 1 auto;
  padding: 34px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid transparent;

  background: linear-gradient(
        ${(props) => props.theme.colors.blackGray},
        ${(props) => props.theme.colors.blackGray}
      )
      padding-box,
    linear-gradient(
        70deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.23573179271708689) 51%,
        rgba(255, 255, 255, 0) 100%
      )
      border-box;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 20px 16px 14px 16px;
  }
`;

export const ExchangeIcon = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  flex: 0 0 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1080px) {
    width: 50px;
    height: 50px;
  }
`;

export const Policy = styled.div`
  margin-top: 17px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  max-width: 348px;
`;

export const ButtonContainer = styled.div`
  margin-top: 46px;
  width: 100%;

  @media (max-width: 1080px) {
    margin-top: 26px;
  }
`;

export const RefreshContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

export const RefreshLine = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.grayEmpty};
`;

export const StyledSvgRefreshGlow = styled(SvgRefreshGlow)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 1;
  opacity: 0;

  @media (max-width: 1080px) {
    width: 50px;
    height: 50px;
  }
`;

export const SvgRefresh = styled(SvgRefreshCur)`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  top: 0;

  &:hover {
    opacity: 0;
  }

  &:hover + ${StyledSvgRefreshGlow} {
    opacity: 1;
  }

  @media (max-width: 1080px) {
    width: 50px;
    height: 50px;
  }
`;
