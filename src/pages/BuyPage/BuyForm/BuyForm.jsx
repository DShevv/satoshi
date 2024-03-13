import { NavLink } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import InputBasic from "../../../components/InputBasic/InputBasic";
import { ButtonsContainer, Container, Title } from "./BuyForm.style";

const BuyForm = () => {
  return (
    <Container>
      <Title>Заполните реквизиты</Title>
      <InputBasic type={"email"} placeholder={"name@gmail.com"} name="Email" />
      <InputBasic
        type={"text"}
        placeholder={"0x5e70GFkuf968KGecklcR462"}
        name="Wallet"
      />
      <InputBasic
        type={"text"}
        placeholder={"0000 0000 0000 0000"}
        name="cardNumber"
      />
      <ButtonsContainer>
        <SubmitButton>Продолжить</SubmitButton>
        <NavLink to={"/"}>
          <BackButton>Вернуться назад</BackButton>
        </NavLink>
      </ButtonsContainer>
    </Container>
  );
};

export default BuyForm;
