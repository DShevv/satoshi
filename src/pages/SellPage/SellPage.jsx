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
import SellForm from "./SellForm/SellForm";

const SellPage = () => {
  return (
    <Wrapper>
      <Title>Заявка №874607798678</Title>
      <ChangeInfo>
        <InfoItem>
          <SvgSber />
          <ItemTitle>Получаете</ItemTitle>
          <ItemSummary>14684.48 RUB</ItemSummary>
        </InfoItem>

        <Icon>
          <SvgRefresh />
        </Icon>
        <InfoItem>
          <SvgUsdt />
          <ItemTitle>Отправляете</ItemTitle>
          <ItemSummary>877 BEP20</ItemSummary>
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>1 USDTBEP20 = 63.8 RUB</InfoCourse>
      <SellForm />
    </Wrapper>
  );
};

export default SellPage;
