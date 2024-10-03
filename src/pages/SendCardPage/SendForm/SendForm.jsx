import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import {
  ButtonsContainer,
  Container,
  QrCode,
  Text,
  Title,
  Wrapper,
} from "./SendForm.style";
import InputHash from "../../../components/InputHash/InputHash";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";

const SendForm = observer(() => {
  const navigate = useNavigate();
  const { exchangeStore } = globalStore;
  const { from, to, id, setStartTime } = exchangeStore;

  return (
    <Wrapper>
      <Container>
        <Title>Заявка № {id}</Title>
        <Text>
          Осуществляете перевод {from.currency.hint} на данные реквизиты
          {from.currency.title !== "СБП" && ` банка "${from.currency.title}"`},
          после нажатия "Продолжить"
        </Text>
        <InputHash
          value={
            from.currency.title === "СБП"
              ? "8-999-999-99-99"
              : "0000 0000 0000 0000"
          }
          title={
            from.currency.title === "СБП"
              ? "Номер телефона СБП"
              : `Номер карты ${from.currency.title}`
          }
        />

        <ButtonsContainer>
          <SubmitButton
            onClick={() => {
              setStartTime(new Date().toISOString());
              navigate("/waiting");
            }}
          >
            Продолжить
          </SubmitButton>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <BackButton>Вернуться назад</BackButton>
          </NavLink>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
});

export default SendForm;
