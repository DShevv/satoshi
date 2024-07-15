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
import validateSell from "../../../utils/validateSell";

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
      validate={validateSell}
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
    >
      {(formik) => {
        const { errors, handleChange, values } = formik;

        return (
          <Container>
            <Title>Заполните реквизиты</Title>
            <InputBasic
              title={"Номер кошелька USDT TRC20"}
              type={"text"}
              placeholder={"TR7NHkorMAxGTCi8q93Y4pL8otPzgjLj6t"}
              name="wallet"
              isError={errors.wallet ? 1 : 0}
              errorText={errors.wallet ? errors.wallet : ""}
            />
            <CardContainer>
              <InputBasic
                title={"Номер карты получателя"}
                type={"text"}
                placeholder={"0000 0000 0000 0000"}
                name="cardNumber"
                value={values.cardNumber
                  .replace(/\s/g, "")
                  .replace(/[^0-9^ ]/, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                maxLength={19}
                onChange={handleChange}
                isError={errors.cardNumber ? 1 : 0}
                errorText={errors.cardNumber ? errors.cardNumber : ""}
              />
              <FormLine>
                <InputTerm
                  title={"Срок действия"}
                  name="term"
                  isError={errors.termYear || errors.termMonth ? 1 : 0}
                />
                <InputCvv
                  title={"CVC/CVV"}
                  name="cvc"
                  isError={errors.cvc ? 1 : 0}
                />
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
