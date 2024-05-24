import { forwardRef, useEffect, useState } from "react";
import { Close, Container, Wrapper } from "./Notification.style";
import { SvgNotiCross, SvgNotiError, SvgNotiOk } from "../../assets/icons/svgs";

const Notification = forwardRef(({ type, text, closeToast }, ref) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClosing(true);
    }, 4000);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Container
        $isError={type === "error" ? 1 : 0}
        className={closing ? "hide" : ""}
        onClick={(e) => {
          e.stopPropagation();
          setClosing(true);
        }}
        onAnimationEnd={() => {
          if (closing) {
            closeToast();
          }
        }}
      >
        {type === "error" ? <SvgNotiError /> : <SvgNotiOk />}
        <span>{text}</span>
        <Close
          onClick={() => {
            setClosing(true);
          }}
        >
          <SvgNotiCross />
        </Close>
      </Container>
    </Wrapper>
  );
});

Notification.displayName = "Notification";

export default Notification;
