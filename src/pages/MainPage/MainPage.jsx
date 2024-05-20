import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container, StyledToast } from "./MainPage.styles";
import Footer from "../../components/Footer/Footer";
import { Slide } from "react-toastify";

function MainPage() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />

      <StyledToast
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        progressStyle={{ display: "none" }}
        closeButton={false}
        transition={Slide}
      />
    </Container>
  );
}

export default MainPage;
