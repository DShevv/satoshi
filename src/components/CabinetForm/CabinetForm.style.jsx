import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 557px;
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media (max-width: 1080px) {
    width: 100%;
    gap: 26px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-bottom: 4px;
    font-size: 18px;
  }
`;

export const HiTitle = styled.h2`
  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 46px;

  @media (max-width: 1080px) {
    margin-top: 40px;
    font-size: 18px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;

  color: ${(props) => props.theme.colors.white};
  margin-top: 26px;

  @media (max-width: 1080px) {
    margin-top: 34px;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 18px;

  @media (max-width: 1080px) {
    gap: 15px;
    margin-top: 34px;
    flex-wrap: wrap;
  }
`;
