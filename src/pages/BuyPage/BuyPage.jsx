import { SvgRefresh, SvgSber, SvgUsdt } from "../../assets/icons/svgs";
import Wrapper from "../../components/Wrapper/Wrapper";
import BuyForm from "./BuyForm/BuyForm";
import {
  ChangeInfo,
  Icon,
  InfoCourse,
  InfoItem,
  ItemSummary,
  ItemTitle,
  Title,
} from "./BuyPage.style";

const BuyPage = () => {
  return (
    <Wrapper>
      <Title>Заявка №874607798678</Title>
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
      <BuyForm />
    </Wrapper>
  );
};

export default BuyPage;
