import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "./MainPage.styles";

function MainPage() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default MainPage;
