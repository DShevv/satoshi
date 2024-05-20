import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
`;

export const StyledToast = styled(ToastContainer)`
  position: fixed;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1000;
  width: calc(100% - 10px);

  max-width: 367px;
`;
