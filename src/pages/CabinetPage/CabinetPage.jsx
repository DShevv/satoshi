import { Outlet, useLocation } from "react-router-dom";
import { SvgShield, SvgUserClear } from "../../assets/icons/svgs";
import Wrapper from "../../components/Wrapper/Wrapper";
import { CabinetHeader, Container, StyledLink } from "./CabinetPage.style";

const CabinetPage = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Wrapper>
      <Container>
        <CabinetHeader
          className={location.pathname === "/cabinet" ? "" : "active"}
        >
          <StyledLink to={"/cabinet"} end>
            <SvgUserClear />
            Личные данные
          </StyledLink>
          <StyledLink to={"/cabinet/history"}>
            <SvgShield />
            История заявок
          </StyledLink>
        </CabinetHeader>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default CabinetPage;
