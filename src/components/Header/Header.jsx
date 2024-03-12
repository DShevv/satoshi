import Wrapper from "../Wrapper/Wrapper";
import {
  Container,
  ControlsContainer,
  InnerContainer,
  Lang,
  Logo,
} from "./Header.style";
import { SvgLogo } from "../../assets/icons/svgs";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function Header() {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Logo to={"/"}>
            <SvgLogo />
          </Logo>
          <ControlsContainer>
            <Lang to={"#en"}>Eng</Lang>
            <ThemeSwitcher />
          </ControlsContainer>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
