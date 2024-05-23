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

const ExchangeForm = ({
  isSell,
  currencies,
  handleChange,
  allItems,
  onSelects,
  ...other
}) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    isSell ? navigate(`/sell`) : navigate(`/buy`);
  };

  return (
    <Container {...other}>
      <InputFieldCurrency
        type={"tel"}
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
        title={`Получаете: ${currencies.to.title}`}
        current={currencies.to}
        items={allItems.to}
        onChange={onSelects.setTo}
        min={"5 000"}
        info={"Min:  Резервы: 38 395 426 RUB"}
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
