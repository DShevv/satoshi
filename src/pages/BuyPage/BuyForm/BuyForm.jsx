import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import { ButtonsContainer, Container, Title, Wrapper } from "./BuyForm.style";
import { Formik } from "formik";

const BuyForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        wallet: "",
        cardNumber: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        navigate("/send");
      }}
    >
      {(formik) => {
        const { errors } = formik;

        return (
          <Wrapper>
            <Container>
              <Title>Заполните реквизиты</Title>
              <InputBasic
                title={"E-mail отправителя"}
                type={"email"}
                placeholder={"name@gmail.com"}
                name="email"
              />
              <InputBasic
                title={"Номер кошелька"}
                type={"text"}
                placeholder={"0x5e70GFkuf968KGecklcR462"}
                name="wallet"
              />
              <InputBasic
                title={"Номер карты получателя"}
                type={"text"}
                placeholder={"0000 0000 0000 0000"}
                name="cardNumber"
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
};

export default BuyForm;
