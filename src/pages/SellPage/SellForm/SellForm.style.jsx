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
  gap: 26px;

  background-color: ${(props) => props.theme.colors.blackGray};
`;

export const Title = styled.h2`
  margin-bottom: 12px;

  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 476px;
  left: -47px;
  border-radius: 10px;
  padding: 26px 48px;

  background-color: rgba(255, 255, 255, 0.05);
`;

export const FormLine = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
