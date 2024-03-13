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

const SellForm = () => {
  return (
    <Container>
      <Title>Заполните реквизиты</Title>
      <InputBasic
        title={"Номер кошелька USDTBEP20"}
        type={"text"}
        placeholder={"0x5e70GFkuf968KGecklcR462"}
        name="Wallet"
      />
      <CardContainer>
        <InputBasic
          title={"Номер карты получателя"}
          type={"text"}
          placeholder={"0000 0000 0000 0000"}
          name="cardNumber"
        />
        <FormLine>
          <InputTerm title={"Срок действия"} name="Term" />
          <InputCvv title={"CVC/CVV"} name="CVC" />
        </FormLine>
      </CardContainer>
      <ButtonsContainer>
        <SubmitButton>Продолжить</SubmitButton>
        <NavLink to={"/"}>
          <BackButton>Вернуться назад</BackButton>
        </NavLink>
      </ButtonsContainer>
    </Container>
  );
};

export default SellForm;
