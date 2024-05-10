import Wrapper from "../Wrapper/Wrapper";
import {
  Container,
  InnerContainer,
  LinksContainer,
  Link,
  Copyright,
} from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <LinksContainer>
            <Link to="/rules">Правила сервиса</Link>
            <Link to="/policy">Политика конфиденциальности</Link>
          </LinksContainer>
          <Copyright>© 2024 Все права защищены</Copyright>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
