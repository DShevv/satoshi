import Wrapper from "../Wrapper/Wrapper";
import {
  ButtonsContainer,
  Container,
  ControlsContainer,
  Copyright,
  InnerContainer,
  ItemName,
  ItemNumber,
  Lang,
  Logo,
  MenuButton,
  MenuContent,
  MenuFooter,
  MenuItem,
  MenuList,
  MenuWrapper,
  SocialItem,
  SocialList,
  Socials,
} from "./Header.style";
import {
  SvgBurger,
  SvgClose,
  SvgInst,
  SvgLogIn,
  SvgLogo,
  SvgReddit,
  SvgTg,
  SvgTwitter,
  SvgUserAdd,
  SvgVk,
  SvgWhats,
  SvgYouTube,
} from "../../assets/icons/svgs";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import RecoveryForm from "../RecoveryForm/RecoveryForm";
import UserContainer from "../UserContainer/UserContainer";

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const [user, setUser] = useState(true);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Container>
      {isLogin && (
        <LoginForm className="active" onClose={() => setIsLogin(false)} />
      )}
      {isRegister && (
        <RegisterForm className="active" onClose={() => setIsRegister(false)} />
      )}
      {isRecovery && (
        <RecoveryForm className="active" onClose={() => setIsRecovery(false)} />
      )}

      <Wrapper>
        <InnerContainer>
          <Logo to={"/"}>
            <SvgLogo />
          </Logo>
          <ControlsContainer>
            <Lang to={"#en"}>Eng</Lang>
            <ThemeSwitcher />
            {user ? (
              <UserContainer />
            ) : (
              <ButtonsContainer>
                <RegisterButton onClick={() => setIsRegister(true)}>
                  <span>Создать аккаунт</span>
                  <SvgUserAdd />
                </RegisterButton>
                <LoginButton onClick={() => setIsLogin(true)}>
                  <span>Войти</span>

                  <SvgLogIn />
                </LoginButton>
              </ButtonsContainer>
            )}
            <MenuButton onClick={toggleMenu}>
              {isOpened ? <SvgClose /> : <SvgBurger />}
              <span>Меню</span>
            </MenuButton>
          </ControlsContainer>
        </InnerContainer>
      </Wrapper>
      {isOpened && (
        <MenuWrapper>
          <MenuContent>
            <Wrapper>
              <MenuList>
                <MenuItem>
                  <ItemNumber>01</ItemNumber>
                  <ItemName>Обмен криптовалюты</ItemName>
                </MenuItem>
                <MenuItem>
                  <ItemNumber>02</ItemNumber>
                  <ItemName>Отзыва</ItemName>
                </MenuItem>
                <MenuItem>
                  <ItemNumber>03</ItemNumber>
                  <ItemName>F.A.Q</ItemName>
                </MenuItem>
                <MenuItem>
                  <ItemNumber>04</ItemNumber>
                  <ItemName>Контакты</ItemName>
                </MenuItem>
              </MenuList>
              <MenuFooter>
                <Copyright>© 2022 Satoshi Crypto Change</Copyright>
                <Socials>
                  Мы в соцсетях:
                  <SocialList>
                    <SocialItem to={"https://tg.com"}>
                      <SvgTg />
                    </SocialItem>
                    <SocialItem to={"https://whatsup.com"}>
                      <SvgWhats />
                    </SocialItem>
                    <SocialItem to={"https://vk.com"}>
                      <SvgVk />
                    </SocialItem>
                    <SocialItem to={"https://instagram.com"}>
                      <SvgInst />
                    </SocialItem>
                    <SocialItem to={"https://twitter.com"}>
                      <SvgTwitter />
                    </SocialItem>
                    <SocialItem to={"https://reddit.com"}>
                      <SvgReddit />
                    </SocialItem>
                    <SocialItem to={"https://youtube.com"}>
                      <SvgYouTube />
                    </SocialItem>
                  </SocialList>
                </Socials>
              </MenuFooter>
            </Wrapper>
          </MenuContent>
        </MenuWrapper>
      )}
    </Container>
  );
}

export default Header;
