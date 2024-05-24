import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  transition: all 0.2s ease;
  position: relative;
  width: 100%;
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
  animation: 0.3s ease appear;
  transition: all 0.3s ease;

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

  &.hide {
    animation: 0.2s ease disappear;
    transition: all 0.1s ease;
  }

  @keyframes appear {
    0% {
      transform: translateX(calc(100% + 35px));
      opacity: 0;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes disappear {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }

    100% {
      transform: translateX(calc(100% + 35px));
      opacity: 0;
    }
  }
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  flex: 0 0 16px;

  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;
