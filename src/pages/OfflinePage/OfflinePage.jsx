import { observer } from "mobx-react-lite";
import { SvgRefresh } from "../../assets/icons/svgs";
import Wrapper from "../../components/Wrapper/Wrapper";
import OfflineForm from "./OfflineForm/OfflineForm";
import {
  ChangeInfo,
  Icon,
  InfoCourse,
  InfoImage,
  InfoItem,
  ItemSubtitle,
  ItemSummary,
  ItemTitle,
  Title,
} from "./OfflinePage.style";
import globalStore from "../../stores/global-store";

const OfflinePage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to } = exchangeStore;

  return (
    <Wrapper>
      <Title>Заявка №874607798678</Title>
      <ChangeInfo>
        <InfoItem>
          <InfoImage src={from.currency.image} />
          <ItemTitle>Получаете</ItemTitle>
          <ItemSummary>877 BEP20</ItemSummary>
          {from.currency.title === "Офлайн" && (
            <ItemSubtitle> (офлайн {from.currency.short}) </ItemSubtitle>
          )}
        </InfoItem>
        <Icon>
          <SvgRefresh />
        </Icon>
        <InfoItem>
          <InfoImage src={to.currency.image} />
          <ItemTitle>Отправляете</ItemTitle>
          <ItemSummary>14684.48 RUB</ItemSummary>
          {to.currency.title === "Офлайн" && (
            <ItemSubtitle> (офлайн {to.currency.short}) </ItemSubtitle>
          )}
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>1 USDTBEP20 = 63.8 RUB</InfoCourse>
      <OfflineForm />
    </Wrapper>
  );
});

export default OfflinePage;
