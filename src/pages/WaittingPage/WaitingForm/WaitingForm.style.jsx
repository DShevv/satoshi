import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  margin-top: 46px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 52px 68px;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.blackGray};
`;

export const Title = styled.h2`
  margin-bottom: 26px;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.white};
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
`;

export const CurrencyInfo = styled.div`
  margin-top: 57px;
  display: flex;
  gap: 13px;
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
`;

export const WalletTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
`;

export const WalletValue = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

export const Hint = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const ErrorText = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.gray};
`;
