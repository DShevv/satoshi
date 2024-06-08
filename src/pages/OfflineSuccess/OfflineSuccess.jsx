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

const OfflineSuccess = () => {
  const navigate = useNavigate();

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
