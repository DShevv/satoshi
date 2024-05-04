import { NavLink } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import {
  ButtonsContainer,
  CardContainer,
  Container,
  FormLine,
  Title,
} from "./SellForm.style";
import InputTerm from "../../../components/InputTerm/InputTerm";
import InputCvv from "../../../components/InputCvv/InputCvv";
import { Formik } from "formik";

const SellForm = () => {
  return (
    <Formik
      initialValues={{
        wallet: "",
        cardNumber: "",
        termYear: "",
        termMonth: "",
        cvc: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors } = formik;

        return (
          <Container>
            <Title>Заполните реквизиты</Title>
            <InputBasic
              title={"Номер кошелька USDTBEP20"}
              type={"text"}
              placeholder={"0x5e70GFkuf968KGecklcR462"}
              name="wallet"
            />
            <CardContainer>
              <InputBasic
                title={"Номер карты получателя"}
                type={"text"}
                placeholder={"0000 0000 0000 0000"}
                name="cardNumber"
              />
              <FormLine>
                <InputTerm title={"Срок действия"} name="term" />
                <InputCvv title={"CVC/CVV"} name="cvc" />
              </FormLine>
            </CardContainer>
            <ButtonsContainer>
              <SubmitButton type="submit">Продолжить</SubmitButton>
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                <BackButton>Вернуться назад</BackButton>
              </NavLink>
            </ButtonsContainer>
          </Container>
        );
      }}
    </Formik>
  );
};

export default SellForm;
