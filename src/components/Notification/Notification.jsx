import { useEffect } from "react";
import { Close, Container, Wrapper } from "./Notification.style";
import { SvgNotiError, SvgNotiOk } from "../../assets/icons/svgs";

const Notification = ({ type, text, closeToast, toastProps }) => {
  useEffect(() => {
    setTimeout(() => {
      toastProps.deleteToast();
    }, 4000);
  }, []);

  return (
    <Wrapper>
      <Container
        $isError={type === "error" ? 1 : 0}
        onClick={(e) => {
          e.stopPropagation();
          toastProps.deleteToast();
        }}
      >
        {type === "error" ? <SvgNotiError /> : <SvgNotiOk />}
        <span>{text}</span>
        <Close
          onClick={() => {
            closeToast();
            toastProps.deleteToast();
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default Notification;
