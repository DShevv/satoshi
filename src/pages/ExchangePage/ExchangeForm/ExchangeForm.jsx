import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import {
  ButtonContainer,
  Container,
  ExchangeIcon,
  Policy,
  RefreshContainer,
  RefreshLine,
  StyledSvgRefreshGlow,
  SvgRefresh,
} from "./ExchangeForm.style";
import InputFieldCurrency from "../../../components/InputFieldCurrency/InputFieldCurrency";
import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";

const ExchangeForm = observer(
  ({ isSell, currencies, handleChange, allItems, onSelects, ...other }) => {
    const navigate = useNavigate();
    const { exchangeStore } = globalStore;
    const { from, to, setFrom, setTo } = exchangeStore;

    const onSubmit = (values) => {
      setFrom(from.currency, values.from);
      setTo(to.currency, values.to);
      if (to.currency.title === "Офлайн" || from.currency.title === "Офлайн") {
        navigate("/offline");
      } else {
        isSell ? navigate(`/sell`) : navigate(`/buy`);
      }
    };

    return (
      <Formik
        initialValues={{
          from: "",
          to: "",
        }}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors } = formik;

          return (
            <Form>
              <Container {...other}>
                <InputFieldCurrency
                  type={"tel"}
                  name="from"
                  title={`Отправляете: ${currencies.from.title}`}
                  current={currencies.from}
                  items={allItems.from}
                  onChange={onSelects.setFrom}
                  min={"118"}
                  max={"4 000"}
                  info={`1 ${currencies.from.title} = 64 RUB`}
                />
                <RefreshContainer>
                  <RefreshLine />
                  <ExchangeIcon onClick={handleChange}>
                    <SvgRefresh />

                    <StyledSvgRefreshGlow />
                  </ExchangeIcon>
                  <RefreshLine />
                </RefreshContainer>
                <InputFieldCurrency
                  type={"tel"}
                  name="to"
                  title={`Получаете: ${currencies.to.title}`}
                  current={currencies.to}
                  items={allItems.to}
                  onChange={onSelects.setTo}
                  min={"5 000"}
                  info={"Min:  Резервы: 38 395 426 RUB"}
                />
                <ButtonContainer>
                  <SubmitButton type="submit">Перейти к обмену</SubmitButton>
                </ButtonContainer>
                <Policy>
                  Нажимая на кнопку «Перейти к обмену», я соглашаюсь с правилами
                  и пользовательским соглашением
                </Policy>
              </Container>
            </Form>
          );
        }}
      </Formik>
    );
  }
);
export default ExchangeForm;
