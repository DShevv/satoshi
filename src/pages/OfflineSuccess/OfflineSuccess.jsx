import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/Buttons/SubmitButton/SubmitButton";
import SuccessAnim from "../../components/SuccessAnim/SuccessAnim";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  BlockWrapper,
  Container,
  Number,
  Text,
  Title,
} from "./OfflineSuccess.style";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";

const OfflineSuccess = () => {
  const navigate = useNavigate();
  const { exchangeStore } = globalStore;
  const { setCanPass, canPass, from, to } = exchangeStore;

  useEffect(() => {
    if (
      !canPass ||
      (from.currency.title !== "Офлайн" && to.currency.title !== "Офлайн")
    ) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <BlockWrapper>
        <Container>
          <SuccessAnim className="offline" />
          <Title>Отлично!</Title>
          <Text>
            Наши менеджеры свяжутся с Вами по указанным контактам для обсуждения
            сделки.
          </Text>
          <Number>
            Ваш заказ:
            <span>№874607798678</span>
          </Number>
          <SubmitButton
            onClick={() => {
              navigate("/");
              setCanPass(false);
            }}
          >
            Готово
          </SubmitButton>
        </Container>
      </BlockWrapper>
    </Wrapper>
  );
};

export default OfflineSuccess;
