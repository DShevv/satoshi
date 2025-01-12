import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 1080px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 46px;
  line-height: 124%;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 32px;
  }
`;

export const Item = styled.div`
  margin-bottom: 50px;
`;

export const ItemTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
  line-height: 136%;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 28px;
  }
`;

export const ItemText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 169%;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;
