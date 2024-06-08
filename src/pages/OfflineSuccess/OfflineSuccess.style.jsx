import styled from "styled-components";

export const BlockWrapper = styled.div`
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

  margin-top: 40px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 32px 68px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  background-color: ${(props) => props.theme.colors.blackGray};

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 518px;
    padding: 50px 21px;
  }
`;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 32px;
  max-width: 320px;
`;

export const Number = styled.div`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  span {
    display: block;
    font-weight: 700;
  }
`;
