import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 518px;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 518px;
    margin-top: 40px;
    margin-bottom: 70px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 0;
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

export const Container = styled.div`
  margin: 0 auto;

  margin-top: 46px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 52px 68px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  background-color: ${(props) => props.theme.colors.blackGray};

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 518px;
    padding: 50px 21px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 26px;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 24px;
    margin-bottom: 9px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TimeContainer = styled.div`
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 26px;

  color: ${(props) => props.theme.colors.gray};
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  font-weight: 600;
  line-height: 100%;

  font-size: 18px;

  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;

export const CurrencyInfo = styled.div`
  margin-top: 57px;
  display: flex;
  gap: 13px;

  @media (max-width: 1080px) {
    margin-top: 65px;
  }
`;

export const CurrencyCaption = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const CurrencyTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  margin-bottom: 1px;
`;

export const CurrencyValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
`;

export const WalletContainer = styled.div`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 60px;

  @media (max-width: 1080px) {
    margin-bottom: 30px;
  }
`;

export const WalletTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
`;

export const WalletValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
`;

export const Hint = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;

export const ErrorText = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.gray};
`;
