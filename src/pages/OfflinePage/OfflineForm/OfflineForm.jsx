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

const OfflineForm = observer(() => {
  const navigate = useNavigate();
  const { userStore } = globalStore;
  const { user } = userStore;

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        tg: "",
        communication: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        navigate("/offline/success");
      }}
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
              />
              <InputBasic
                title={"Ваш Telegram"}
                type={"text"}
                placeholder={"@telegram"}
                name="tg"
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
