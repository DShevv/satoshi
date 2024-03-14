import { useEffect, useState } from "react";
import { SvgTimer, SvgUsdt } from "../../../assets/icons/svgs";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import Loader from "../../../components/Loader/Loader";
import {
  ButtonsContainer,
  Container,
  CurrencyCaption,
  CurrencyInfo,
  CurrencyTitle,
  CurrencyValue,
  ErrorText,
  Hint,
  Text,
  Time,
  TimeContainer,
  Title,
  WalletContainer,
  WalletTitle,
  WalletValue,
} from "./WaitingForm.style";

import { useCountdown } from "usehooks-ts";
import { NavLink } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import SuccessAnim from "../../../components/SuccessAnim/SuccessAnim";

const WaitingForm = () => {
  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart: 20 * 60,
    intervalMs: 1000,
  });
  const [isOk, setIsOk] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    startCountdown();
  }, []);

  useEffect(() => {
    if (count === 0) {
      setIsCancelled(true);
      stopCountdown();
    }
  }, [count]);

  return (
    <Container>
      <Title>Заявка №874607798678</Title>
      {isCancelled ? (
        <ErrorText>Время ожидания истекло</ErrorText>
      ) : (
        <Text>{isOk ? "Успешно!" : "В процессе! Ожидайте"}</Text>
      )}
      {isOk ? (
        ""
      ) : (
        <TimeContainer>
          <SvgTimer />
          <Time>
            {Math.floor(count / 60)}:
            {count % 60 < 10 ? `0${count % 60}` : count % 60}
          </Time>
        </TimeContainer>
      )}
      {isOk ? <SuccessAnim /> : <Loader />}
      {isCancelled ? (
        <CurrencyInfo></CurrencyInfo>
      ) : (
        <>
          <CurrencyInfo>
            <SvgUsdt />
            <CurrencyCaption>
              <CurrencyTitle>Сумма</CurrencyTitle>
              <CurrencyValue>877 BEP20</CurrencyValue>
            </CurrencyCaption>
          </CurrencyInfo>
          <WalletContainer>
            <WalletTitle>Адрес кошелька:</WalletTitle>
            <WalletValue>
              0xbb104341956e1df223f72c2419f45f35227054e9
            </WalletValue>
          </WalletContainer>
        </>
      )}
      {isOk || isCancelled ? (
        <ButtonsContainer>
          <NavLink to="/" style={{ display: "flex", textDecoration: "none" }}>
            <SubmitButton>
              {isCancelled ? "Создать новую операцию" : "Вернуться на главную"}
            </SubmitButton>
          </NavLink>
        </ButtonsContainer>
      ) : (
        <>
          <Hint>Обмен произойдет автоматически!</Hint>
          <ButtonsContainer>
            <BackButton>Отменить обмен</BackButton>
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
};

export default WaitingForm;
