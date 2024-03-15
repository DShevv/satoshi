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

const CabinetForm = () => {
  return (
    <Formik
      initialValues={{
        email: "irina.stsi5566@gmail.com",
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
};

export default CabinetForm;
