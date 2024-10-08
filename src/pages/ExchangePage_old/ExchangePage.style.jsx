import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 90px;
  font-weight: 700;
  font-size: 56px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-top: 40px;
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 14px;
  font-weight: 400;
  font-size: 21px;
  text-align: center;

  color: #737373;

  @media (max-width: 1080px) {
    margin-top: 8px;
    font-size: 16px;
    max-width: 287px;
    text-align: center;
    align-self: center;
  }
`;

export const SwitcherContainer = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 1080px) {
    margin-top: 32px;
  }
`;

export const SwitcherCaption = styled.div`
  width: fit-content;
  font-weight: ${(props) => (props.$active ? 700 : 400)};
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
`;

export const SliderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
`;

export const SliderList = styled.div`
  border-radius: 20px;
  width: 1000px;
  height: 144px;
  background-color: ${(props) => props.theme.colors.blackGray};
`;

export const SliderArrowLeft = styled.button`
  border: none;
  outline: none;
  width: 41px;
  height: 41px;
  background-color: transparent;
  cursor: pointer;
`;

export const SliderArrowRight = styled.button`
  border: none;
  outline: none;
  width: 41px;
  height: 41px;
  transform: rotate(180deg);
  background-color: transparent;
  cursor: pointer;
`;

export const SliderItem = styled.div`
  width: 138px;
  height: 112px;
  display: flex;

  align-items: center;
  flex-direction: column;
  gap: 13px;
  padding-top: 30px;
  cursor: pointer;
`;

export const ItemTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const OperationName = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-top: 47px;
  color: ${(props) => props.theme.colors.white};
`;

export const SwipersContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$active ? "column-reverse" : "column")};

  @media (max-width: 1080px) {
    &.desktop {
      display: none;
    }
  }
`;

export const CurrImage = styled.img`
  width: 43px;
  height: 37px;
  object-fit: contain;
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
