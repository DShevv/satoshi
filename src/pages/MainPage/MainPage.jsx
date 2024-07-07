import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "./MainPage.styles";
import Footer from "../../components/Footer/Footer";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";

const MainPage = observer(() => {
  const { exchangeStore } = globalStore;
  const { course, updateCourse } = exchangeStore;

  useEffect(() => {
    const interval = setInterval(() => {
      updateCourse();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
