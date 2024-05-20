import { Alert } from "@mui/material";
import { useEffect } from "react";

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
      <Alert
        onClose={() => {
          closeToast();
        }}
        severity={type}
        variant="filled"
        sx={{ width: "calc(100%)" }}
      >
        {text}
      </Alert>
    </div>
  );
};

export default Notification;
