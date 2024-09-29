import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "./MainPage.styles";
import Footer from "../../components/Footer/Footer";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

const MainPage = observer(() => {
  const { exchangeStore } = globalStore;
  const { course, updateCourse } = exchangeStore;
  const { sendMessage, lastMessage, readyState, lastJsonMessage } =
    useWebSocket(`${import.meta.env.VITE_WSS_URL}/courses/ws/usdt`);

  useEffect(() => {
    if (lastJsonMessage) {
      updateCourse(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  useEffect(() => {}, []);

  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />

      <NotificationContainer />
    </Container>
  );
});

export default MainPage;
