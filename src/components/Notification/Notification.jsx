import { useEffect } from "react";
import { Close, Container } from "./Notification.style";
import { SvgNotiError, SvgNotiOk } from "../../assets/icons/svgs";

const Notification = ({ type, text, closeToast, toastProps }) => {
  useEffect(() => {
    setTimeout(() => {
      toastProps.deleteToast();
    }, 4000);
  }, []);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toastProps.deleteToast();
      }}
    >
      <Container $isError={type === "error" ? 1 : 0}>
        {type === "error" ? <SvgNotiError /> : <SvgNotiOk />}
        <span>{text}</span>
        <Close
          onClick={() => {
            closeToast();
            toastProps.deleteToast();
          }}
        />
      </Container>
    </div>
  );
};

export default Notification;
