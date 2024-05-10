import { useNavigate } from "react-router-dom";
import { SvgRefresh } from "../../../assets/icons/svgs";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputField from "../../../components/InputField/InputField";
import {
  ButtonContainer,
  Container,
  ExchangeIcon,
  Policy,
} from "./ExchangeForm.style";

const ExchangeForm = ({ isSell, currencies, ...other }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    isSell ? navigate(`/sell`) : navigate(`/buy`);
  };

  return (
    <Container {...other}>
      <InputField
        title={`Отправляете: ${currencies.from.title}`}
        hint={currencies.from.hint}
        min={"118"}
        max={"4 000"}
        info={`1 ${currencies.from.title} = 64 RUB`}
      />
      <ExchangeIcon>
        <SvgRefresh />
      </ExchangeIcon>
      <InputField
        title={`Получаете: ${currencies.to.title}`}
        hint={currencies.to.hint}
        min={"5 000"}
        info={"Min:  Резервы: 38 395 426 RUB"}
        disabled
      />
      <ButtonContainer>
        <SubmitButton onClick={onSubmit}>Перейти к обмену</SubmitButton>
      </ButtonContainer>
      <Policy>
        Нажимая на кнопку «Перейти к обмену», я соглашаюсь с правилами и
        пользовательским соглашением
      </Policy>
    </Container>
  );
};

export default ExchangeForm;
