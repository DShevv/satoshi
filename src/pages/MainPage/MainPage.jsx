import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "./MainPage.styles";
import Footer from "../../components/Footer/Footer";

function MainPage() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default MainPage;
