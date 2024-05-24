import globalStore from "../../stores/global-store";
import Notification from "../Notification/Notification";
import { StyledContainer } from "./NotificationContainer.style";
import { observer } from "mobx-react-lite";

const NotificationContainer = observer(() => {
  const { notificationStore } = globalStore;
  const { notifications, removeNotification } = notificationStore;

  return (
    <StyledContainer>
      {notifications.map((elem) => (
        <Notification
          key={`${elem.id}${elem.type}`}
          type={elem.type}
          text={elem.text}
          closeToast={() => {
            removeNotification(elem.id);
          }}
        />
      ))}
    </StyledContainer>
  );
});

export default NotificationContainer;
