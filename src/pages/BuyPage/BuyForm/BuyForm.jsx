import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import { ButtonsContainer, Container, Title, Wrapper } from "./BuyForm.style";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";
import validateBuy from "../../../utils/validateBuy";
import ExchangeService from "../../../services/ExchangeService";

const BuyForm = observer(() => {
  const navigate = useNavigate();
  const { userStore, exchangeStore } = globalStore;
  const { user } = userStore;
  const { from, to, setCanPass, setId } = exchangeStore;

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        wallet: "",
        cardNumber: "",
        phone: "",
        isSbp: to.currency.title === "СБП",
      }}
      onSubmit={async (values) => {
        try {
          console.log(values);
          const res = await ExchangeService.sendOnlineInfo({
            user_send_amount: from.amount,
            user_send_currency: from.currency.hint,
            user_receive_amount: to.amount,
            user_receive_currency: to.currency.hint,
            email: values.email,
            user_card: values.isSbp ? values.phone : values.cardNumber,
            user_wallet: values.wallet,
          });

          if (res.data.success) {
            setId(res.data.uuid);
          }

          navigate("/send");
        } catch (e) {
          console.log(e);
        }
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
                placeholder={"TR7NHkorMAxGTCi8q93Y4pL8otPzgjLj6t"}
                name="wallet"
                isError={errors.wallet ? 1 : 0}
                errorText={errors.wallet ? errors.wallet : ""}
              />
              {to.currency.title === "СБП" ? (
                <InputBasic
                  title={"Номер телефона получателя"}
                  type={"tel"}
                  placeholder={"7 999 000 00 00"}
                  maxLength={15}
                  name="phone"
                  isError={errors.phone ? 1 : 0}
                  errorText={errors.phone ? errors.phone : ""}
                  value={values.phone
                    .replace(/\s/g, "")
                    .replace(/[^0-9^ ]/, "")
                    .replace(
                      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,
                      "$1 $2 $3 $4 $5"
                    )
                    .trim()}
                  onChange={handleChange}
                />
              ) : (
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
              )}
              <ButtonsContainer>
                <SubmitButton type="submit">Продолжить</SubmitButton>
                <NavLink
                  to={"/"}
                  onClick={() => {
                    setCanPass(false);
                  }}
                  style={{ textDecoration: "none" }}
                >
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
