import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 90px;
  font-weight: 700;
  font-size: 56px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const SubTitle = styled.h2`
  margin-top: 14px;
  font-weight: 400;
  font-size: 21px;
  text-align: center;

  color: #737373;
`;

export const SwitcherContainer = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SwitcherCaption = styled.div`
  width: fit-content;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
`;
