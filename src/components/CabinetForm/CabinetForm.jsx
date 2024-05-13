import { observer } from "mobx-react-lite";
import MediumButton from "../Buttons/MediumButton/MediumButton ";
import InputBasic from "../InputBasic/InputBasic";
import {
  ButtonsContainer,
  Container,
  HiTitle,
  SubTitle,
  Title,
} from "./CabinetForm.style";
import { Formik, Form } from "formik";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";

export const CabinetForm = observer(() => {
  const { userStore } = globalStore;
  const { user, getInfo } = userStore;

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Formik
      initialValues={{
        email: user.email,
        password: "",
        confirmPassword: "",
        LastName: "Рожкова",
        FirstName: "Ирина",
        FatherName: "Олеговна",
      }}
      onSubmit={(values) => {
        console.log(values);
        // login({ email: "test@example.com", password: "testPassword" });
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <Container>
          <Title>Личные данные</Title>
          <InputBasic type={"text"} name={"LastName"} title={"Фамилия"} />
          <InputBasic type={"text"} name={"FirstName"} title={"Имя"} />
          <InputBasic type={"text"} name={"FatherName"} title={"Отчество"} />
          <HiTitle>Защита данных</HiTitle>
          <InputBasic type={"email"} name={"email"} title={"E-mail"} />
          <SubTitle>Изменение пароля</SubTitle>
          <InputBasic type={"password"} name={"password"} title={"Пароль"} />
          <InputBasic
            type={"password"}
            name={"confirmPassword"}
            title={"Повторите пароль"}
          />
          <ButtonsContainer>
            <MediumButton type="submit">Сохранить</MediumButton>
            <MediumButton className="back">Отмена</MediumButton>
          </ButtonsContainer>
        </Container>
      </Form>
    </Formik>
  );
});
