import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 557px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
`;

export const HiTitle = styled.h2`
  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 46px;
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;

  color: ${(props) => props.theme.colors.white};
  margin-top: 26px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 18px;
`;
