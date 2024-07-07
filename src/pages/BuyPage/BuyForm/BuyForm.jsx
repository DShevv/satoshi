import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import { ButtonsContainer, Container, Title, Wrapper } from "./BuyForm.style";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";
import validateBuy from "../../../utils/validateBuy";

const BuyForm = observer(() => {
  const navigate = useNavigate();
  const { userStore } = globalStore;
  const { user } = userStore;

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        wallet: "",
        cardNumber: "",
      }}
      onSubmit={(values) => {
        console.log(values);

        navigate("/send");
      }}
      validate={validateBuy}
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
    >
      {(formik) => {
        const { errors, handleChange, values } = formik;

        return (
          <Wrapper>
            <Container>
              <Title>Заполните реквизиты</Title>
              <InputBasic
                title={"E-mail отправителя"}
                type={"email"}
                placeholder={"name@gmail.com"}
                name="email"
                isError={errors.email ? 1 : 0}
                errorText={errors.email ? errors.email : ""}
              />
              <InputBasic
                title={"Номер кошелька"}
                type={"text"}
                placeholder={"0x5e70GFkuf968KGecklcR462"}
                name="wallet"
                isError={errors.wallet ? 1 : 0}
                errorText={errors.wallet ? errors.wallet : ""}
              />
              <InputBasic
                title={"Номер карты получателя"}
                type={"text"}
                placeholder={"0000 0000 0000 0000"}
                maxLength={19}
                name="cardNumber"
                isError={errors.cardNumber ? 1 : 0}
                errorText={errors.cardNumber ? errors.cardNumber : ""}
                value={values.cardNumber
                  .replace(/\s/g, "")
                  .replace(/[^0-9^ ]/, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                onChange={handleChange}
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

export default BuyForm;
