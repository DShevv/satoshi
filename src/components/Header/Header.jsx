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
  SvgLogoMobile,
  SvgReddit,
  SvgTg,
  SvgTwitter,
  SvgUserAdd,
  SvgUserMobile,
  SvgVk,
  SvgWhats,
  SvgYouTube,
} from "../../assets/icons/svgs";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import { useEffect, useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import RecoveryForm from "../RecoveryForm/RecoveryForm";
import UserContainer from "../UserContainer/UserContainer";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";

export const Header = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formParam = searchParams.get("auth");
  const [isOpened, setIsOpened] = useState(false);
  const { authStore, userStore } = globalStore;

  const toggleMenu = () => {
    setIsOpened(!isOpened);
    document.body.classList.toggle("scrollLock");
  };

  useEffect(() => {
    if (authStore.isAuthorized) {
      userStore.getInfo();
    }
  }, [authStore.isAuthorized]);

  return (
    <Container>
      {formParam === "login" && (
        <LoginForm
          className="active"
          onClose={() => {
            console.log("log");
            setSearchParams({});
          }}
        />
      )}
      {formParam === "register" && (
        <RegisterForm
          className="active"
          onClose={() => {
            console.log("reg");
            setSearchParams({});
          }}
        />
      )}
      {formParam === "recovery" && (
        <RecoveryForm
          className="active"
          onClose={() => {
            console.log("req");
            setSearchParams({});
          }}
        />
      )}

      <Wrapper>
        <InnerContainer>
          <Logo to={"/"}>
            <SvgLogo className="desktop" />
            <SvgLogoMobile className="mobile" />
          </Logo>
          <ControlsContainer>
            <Lang className="desktop" to={"#en"}>
              Eng
            </Lang>
            <ThemeSwitcher className="desktop" />
            {authStore.isAuthorized ? (
              <UserContainer />
            ) : (
              <ButtonsContainer>
                <RegisterButton
                  className="desktop"
                  onClick={() => setSearchParams({ auth: "register" })}
                >
                  <span>Создать аккаунт</span>
                  <SvgUserAdd />
                </RegisterButton>
                <LoginButton onClick={() => setSearchParams({ auth: "login" })}>
                  <span className="desktop">Войти</span>

                  <SvgLogIn className="desktop" />
                  <SvgUserMobile className="mobile" />
                </LoginButton>
              </ButtonsContainer>
            )}
            <MenuButton onClick={toggleMenu}>
              {isOpened ? <SvgClose /> : <SvgBurger />}
              <span className="desktop">Меню</span>
            </MenuButton>
          </ControlsContainer>
        </InnerContainer>
      </Wrapper>

      <MenuWrapper className={isOpened ? "active" : ""}>
        <MenuContent>
          <Wrapper
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "auto",
            }}
          >
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
              <Copyright>© 2024 Satoshi Crypto Change</Copyright>
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
    </Container>
  );
});
