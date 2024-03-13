import { SvgRefresh } from "../../../assets/icons/svgs";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputField from "../../../components/InputField/InputField";
import { Container, ExchangeIcon, Policy } from "./ExchangeForm.style";

const ExchangeForm = () => {
  return (
    <Container>
      <InputField
        title={"Отправляете: Tether(USDT) BEEP20"}
        hint={"USDTBEP20"}
        min={"118"}
        max={"4 000"}
        info={"1 USDTBEP20 = 64 RUB"}
      />
      <ExchangeIcon>
        <SvgRefresh />
      </ExchangeIcon>
      <InputField
        title={"Получаете: Сбербанк (RUB)"}
        hint={"RUB"}
        min={"5 000"}
        info={"Min:  Резервы: 38 395 426 RUB"}
      />
      <SubmitButton>Перейти к обмену</SubmitButton>
      <Policy>
        Нажимая на кнопку «Перейти к обмену», я соглашаюсь с правилами и
        пользовательским соглашением
      </Policy>
    </Container>
  );
};

export default ExchangeForm;
