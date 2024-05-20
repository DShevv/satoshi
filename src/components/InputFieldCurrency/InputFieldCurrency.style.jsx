import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) => props.theme.colors.white};
`;

export const Label = styled.label`
  height: 49px;
  min-width: 0;
  display: "flex";
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;
  padding: 20px 24px 20px 29px;
  border: 1px solid ${(props) => props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  flex: 1 1 auto;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  outline: none;
  border: none;
  min-width: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }

  @media (max-width: 1080px) {
    font-size: 16px;
    min-width: 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    font-size: 11px;
  }
`;

export const Hint = styled.div`
  flex: 0 0 auto;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

export const CurrentCurrency = styled.div`
  border-radius: 42px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 14px 10px;
  gap: 11px;

  background-color: ${(props) => props.theme.colors.blackGray};
  cursor: pointer;
`;

export const CurrentText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.white};
`;

export const CurrentImage = styled.img`
  width: 21px;
  height: 21px;
  flex: 0 0 21px;
`;

export const CurrentArrow = styled.img`
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(18px);
  background: rgba(182, 182, 182, 0.15);
  z-index: -1;
  transition: all 0.3s ease;
  opacity: 0;
  top: 0;
  left: 0;

  &.active {
    opacity: 1;
    z-index: 200;
  }
`;

export const Modal = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 25px;
  width: 515px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 41px 29px 130px 29px;

  @media (max-width: 1080px) {
    max-width: 527px;
    width: calc(100% - 30px);
    padding: 25px 25px 25px 25px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListArrow = styled.div`
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  transform: rotate(-90deg);
  color: ${(props) => props.theme.colors.white};
`;

export const ItemCaption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 119%;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.white};
`;

export const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 11px;
  align-items: center;
  padding: 24px 22px;
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.black};
  outline: none;
  border-radius: 42px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.red};
  }

  &:hover ${ItemCaption}, &:hover ${ListArrow} {
    color: ${(props) => props.theme.colors.red};
  }
`;
