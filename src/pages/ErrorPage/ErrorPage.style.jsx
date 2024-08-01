import styled from "styled-components";
import bg from "../../assets/images/404.svg";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Caption = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 80vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vw;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 250px;
  line-height: 114%;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 125px;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  color: #fff;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 24px;

  @media (max-width: 1080px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 480px;
  width: 100%;

  @media (max-width: 1080px) {
    max-width: 270px;
  }
`;
