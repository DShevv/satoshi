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
  flex-direction: ${(props) => (props.active ? "column-reverse" : "column")};
`;
