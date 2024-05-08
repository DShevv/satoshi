import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SvgShield, SvgUserClear } from "../../assets/icons/svgs";
import Wrapper from "../../components/Wrapper/Wrapper";
import { CabinetHeader, Container, StyledLink } from "./CabinetPage.style";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";

export const CabinetPage = observer(() => {
  const { authStore } = globalStore;
  const { isAuthorized } = authStore;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized]);

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
});
