import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  margin-top: 73px;
  margin-bottom: 104px;
  border-radius: 25px;
  width: 518px;
  padding: 52px 68px;

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
  margin-top: 4px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Policy = styled.div`
  margin-top: 17px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
`;

export const ButtonContainer = styled.div`
  margin-top: 46px;
`;
