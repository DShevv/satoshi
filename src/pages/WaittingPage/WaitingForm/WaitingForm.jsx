import { useEffect, useState } from "react";
import { SvgTimer, SvgUsdt } from "../../../assets/icons/svgs";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import Loader from "../../../components/Loader/Loader";
import {
  ButtonsContainer,
  Container,
  CurrencyCaption,
  CurrencyContainer,
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
  Wrapper,
} from "./WaitingForm.style";

import { useCountdown } from "usehooks-ts";
import { NavLink, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import SuccessAnim from "../../../components/SuccessAnim/SuccessAnim";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";
import { InfoImage } from "../../OfflinePage/OfflinePage.style";
import useWebSocket from "react-use-websocket";
import InputHash from "../../../components/InputHash/InputHash";
import calculateTime from "../../../utils/calculateTime";

const WaitingForm = observer(() => {
  const { exchangeStore } = globalStore;
  const {
    from,
    to,
    setCanPass,
    canPass,
    isSell,
    uuid,
    id,
    startTime,
    setStartTime,
  } = exchangeStore;

  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart: 20 * 60 - calculateTime(startTime).toFixed(0),
    intervalMs: 1000,
  });
  const [isOk, setIsOk] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const navigate = useNavigate();
  const { sendMessage, lastMessage, readyState, lastJsonMessage } =
    useWebSocket(`${import.meta.env.VITE_WSS_URL}/orders/ws/status/${uuid}`);

  useEffect(() => {
    console.log(calculateTime(startTime).toFixed(0));
    if (!canPass) {
      navigate("/");
    }
    startCountdown();
  }, []);

  useEffect(() => {
    console.log(lastJsonMessage);
    if (lastJsonMessage?.completed) {
      setIsOk(true);
      stopCountdown();
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    if (count === 0) {
      setIsCancelled(true);
      stopCountdown();
      setIsOk(true);
    }
  }, [count]);

  return (
    <Wrapper>
      <Container>
        <Title>Заявка № {id}</Title>
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
            <CurrencyContainer>
              <CurrencyInfo>
                <InfoImage src={from.currency.image} />
                <CurrencyCaption>
                  <CurrencyTitle>Отправляете</CurrencyTitle>
                  <CurrencyValue>
                    {from.amount} {from.currency.hint}
                  </CurrencyValue>
                </CurrencyCaption>
              </CurrencyInfo>
              <CurrencyInfo>
                <InfoImage src={to.currency.image} />
                <CurrencyCaption>
                  <CurrencyTitle>Получаете</CurrencyTitle>
                  <CurrencyValue>
                    {to.amount} {to.currency.hint}
                  </CurrencyValue>
                </CurrencyCaption>
              </CurrencyInfo>
            </CurrencyContainer>
            <WalletContainer>
              {isSell ? (
                <InputHash
                  waiting={1}
                  value={"TR7NHkorMAxGTCi8q93Y4pL8otPzgjLj6t"}
                  title={"Адрес кошелька"}
                />
              ) : (
                <InputHash
                  waiting={1}
                  value={
                    from.currency.title === "СБП"
                      ? "8-999-999-99-99"
                      : "0000 0000 0000 0000"
                  }
                  title={
                    from.currency.title === "СБП"
                      ? "Номер телефона СБП"
                      : `Номер карты ${from.currency.title}`
                  }
                />
              )}
            </WalletContainer>
          </>
        )}
        {isOk || isCancelled ? (
          <ButtonsContainer>
            <NavLink
              onClick={() => {
                setCanPass(false);
              }}
              to="/"
              style={{ display: "flex", textDecoration: "none" }}
            >
              <SubmitButton>
                {isCancelled
                  ? "Создать новую операцию"
                  : "Вернуться на главную"}
              </SubmitButton>
            </NavLink>
          </ButtonsContainer>
        ) : (
          <>
            <Hint>Обмен произойдет автоматически!</Hint>
            <ButtonsContainer>
              <BackButton
                onClick={() => {
                  setCanPass(false);
                  setStartTime(undefined);
                  navigate("/");
                }}
              >
                Отменить обмен
              </BackButton>
            </ButtonsContainer>
          </>
        )}
      </Container>
    </Wrapper>
  );
});

export default WaitingForm;
