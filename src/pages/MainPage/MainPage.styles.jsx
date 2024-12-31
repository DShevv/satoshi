import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  display: grid;
`;

export const StyledToast = styled(ToastContainer)`
  position: fixed;
  top: 132px;
  right: 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  z-index: 1000;
  width: calc(100% - 10px);

  max-width: 367px;
  transition: all 0.2s ease;

  div {
    transition: all 0.2s ease;
  }

  @media (max-width: 1080px) {
    top: 84px;
    right: 15px;
    width: calc(100% - 30px);
  }
`;
