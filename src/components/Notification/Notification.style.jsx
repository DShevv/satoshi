import styled from "styled-components";
import cross from "../../assets/icons/noti-cross.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 37px;
  padding: 13px 24px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background-color: ${(props) =>
    props.$isError ? props.theme.colors.redError : props.theme.colors.green};
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.white};
    flex: 1 1 auto;
  }
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  flex: 0 0 16px;

  background-color: transparent;
  outline: none;
  border: none;
  background: url(${cross});
  cursor: pointer;
`;
