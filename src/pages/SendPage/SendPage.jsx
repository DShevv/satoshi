import Wrapper from "../../components/Wrapper/Wrapper";
import {
  Title,
  ChangeInfo,
  InfoItem,
  ItemTitle,
  ItemSummary,
  Icon,
  InfoCourse,
} from "../BuyPage/BuyPage.style";
import { SvgUsdt, SvgRefresh, SvgSber } from "../../assets/icons/svgs";
import SendForm from "./SendForm/SendForm";

const SendPage = () => {
  return (
    <Wrapper>
      <Title>Обмен USDTBEP20 на VISA MASTERCARD TRY</Title>
      <ChangeInfo>
        <InfoItem>
          <SvgUsdt />
          <ItemTitle>Отправляете</ItemTitle>
          <ItemSummary>877 BEP20</ItemSummary>
        </InfoItem>
        <Icon>
          <SvgRefresh />
        </Icon>
        <InfoItem>
          <SvgSber />
          <ItemTitle>Получаете</ItemTitle>
          <ItemSummary>14684.48 RUB</ItemSummary>
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>1 USDTBEP20 = 63.8 RUB</InfoCourse>
      <SendForm />
    </Wrapper>
  );
};

export default SendPage;
