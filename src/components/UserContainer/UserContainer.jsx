import { useRef, useState } from "react";
import {
  SvgLogIn,
  SvgShield,
  SvgUser,
  SvgUserClear,
} from "../../assets/icons/svgs";
import {
  CabLink,
  Container,
  Email,
  Icon,
  UserModal,
} from "./UserContainer.style";
import useOutsideClick from "../../hooks/useOutsideClick";
import { NavLink } from "react-router-dom";

const UserContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false);
  });

  return (
    <Container ref={ref} onClick={() => setIsActive(!isActive)}>
      <NavLink to="/cabinet" className="mobile">
        <SvgUser />
      </NavLink>
      <SvgUser className="desktop" />

      <span className="desktop">irina.stasi5468@gmail.com</span>
      <UserModal $active={isActive ? 1 : 0}>
        <Email>irina.stasi5468@gmail.com</Email>
        <CabLink to={"/cabinet"}>
          <Icon>
            <SvgUserClear />
          </Icon>
          Личные данные
        </CabLink>
        <CabLink to={"/cabinet/history"}>
          <Icon>
            <SvgShield />
          </Icon>
          История заявок
        </CabLink>
        <CabLink className={"exit"} to={"/"}>
          <Icon>
            <SvgLogIn />
          </Icon>
          Выйти
        </CabLink>
      </UserModal>
    </Container>
  );
};

export default UserContainer;
