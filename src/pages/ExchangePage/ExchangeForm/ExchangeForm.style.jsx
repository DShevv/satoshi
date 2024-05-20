import styled from "styled-components";
import refresh from "../../../assets/icons/refresh.svg";
import refreshGlow from "../../../assets/icons/refresh-glow.svg";
import { SvgRefreshCur, SvgRefreshGlow } from "../../../assets/icons/svgs";

export const Container = styled.div`
  border-radius: 25px;
  max-width: 520px;
  flex: 1 1 auto;
  padding: 34px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colors.blackGray};

  @media (max-width: 1080px) {
    margin-top: 54px;
    margin-bottom: 70px;
    width: 100%;
    max-width: 518px;
    padding: 52px 22px 41px 22px;
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
  /*  background-image: url(${refresh});
  background-position: center;
  background-size: cover; */
  cursor: pointer;

  /*  &:hover {
    background-image: url(${refreshGlow});
  } */
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
`;
