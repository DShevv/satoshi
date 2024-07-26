import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import {
  ButtonsContainer,
  Container,
  Title,
  Wrapper,
} from "./OfflineForm.style";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";
import validateOffline from "../../../utils/validateOffline";
import ExchangeService from "../../../services/ExchangeService";

const OfflineForm = observer(() => {
  const navigate = useNavigate();
  const { userStore, exchangeStore } = globalStore;
  const { user } = userStore;
  const { from, to } = exchangeStore;

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        tg: "",
        communication: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        const res = await ExchangeService.sendInfo({
          sell_amount: from.amount,
          sell_currency:
            from.currency.title === "Офлайн" ? "RUB" : from.currency.hint,
          receive_amount: to.amount,
          receive_currency:
            to.currency.title === "Офлайн" ? "RUB" : to.currency.hint,
          receive_city:
            to.currency.title === "Офлайн"
              ? to.currency.hint
              : from.currency.hint,
          email: values.email,
          telegram: values.tg,
          contact: values.communication,
          is_offline: true,
        });
        console.log(res);
        navigate("/offline/success");
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validate={validateOffline}
    >
      {(formik) => {
        const { errors } = formik;

        return (
          <Wrapper>
            <Container>
              <Title>Ваши контакты</Title>
              <InputBasic
                title={"Ваш E-mail"}
                type={"email"}
                placeholder={"name@gmail.com"}
                name="email"
                isError={errors.email ? 1 : 0}
              />
              <InputBasic
                title={"Ваш Telegram"}
                type={"text"}
                placeholder={"@telegram"}
                name="tg"
                isError={errors.tg ? 1 : 0}
              />
              <InputBasic
                title={"Предпочитаемы способ связи"}
                type={"text"}
                placeholder={"name@gmail.com"}
                name="communication"
              />
              <ButtonsContainer>
                <SubmitButton type="submit">Продолжить</SubmitButton>
                <NavLink to={"/"} style={{ textDecoration: "none" }}>
                  <BackButton>Вернуться назад</BackButton>
                </NavLink>
              </ButtonsContainer>
            </Container>
          </Wrapper>
        );
      }}
    </Formik>
  );
});

export default OfflineForm;
