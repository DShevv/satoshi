import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "./MainPage.styles";
import Footer from "../../components/Footer/Footer";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";

function MainPage() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />

      <NotificationContainer />
    </Container>
  );
}

export default MainPage;
