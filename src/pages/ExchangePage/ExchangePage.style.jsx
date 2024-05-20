import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-top: 40px;
    text-align: center;
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 14px;
  font-weight: 400;
  font-size: 21px;
  text-align: left;

  color: #737373;

  @media (max-width: 1080px) {
    margin-top: 8px;
    font-size: 16px;
    max-width: 287px;
    text-align: center;
    align-self: center;
  }
`;

export const OperationName = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-top: 47px;
  color: ${(props) => props.theme.colors.white};
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isActive ? "column-reverse" : "column")};
  align-items: center;
  margin-top: 15px;

  &.mobile {
    display: none;
  }

  @media (max-width: 1080px) {
    &.mobile {
      display: flex;
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 150px;
  margin-bottom: 150px;

  @media (max-width: 1080px) {
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Caption = styled.div`
  flex: 1 1 auto;
  max-width: 520px;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
