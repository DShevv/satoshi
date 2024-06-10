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
import { useEffect, useState } from "react";
import ExchangeService from "../../services/ExchangeService";

const OfflinePage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to } = exchangeStore;
  const [course, setCourse] = useState();

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await ExchangeService.getCourseUsdt();
      setCourse(res.data.course);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Title>Заявка №874607798678</Title>
      <ChangeInfo>
        <InfoItem>
          <InfoImage src={from.currency.image} />
          <ItemTitle>Получаете</ItemTitle>
          <ItemSummary>
            {from.amount}{" "}
            {from.currency.title === "Офлайн"
              ? from.currency.cur
              : from.currency.hint}
          </ItemSummary>
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
          <ItemSummary>
            {to.amount}{" "}
            {to.currency.title === "Офлайн"
              ? to.currency.cur
              : to.currency.hint}
          </ItemSummary>
          {to.currency.title === "Офлайн" && (
            <ItemSubtitle> (офлайн {to.currency.short}) </ItemSubtitle>
          )}
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>
        {from.currency.title === "Офлайн"
          ? `100 ${from.currency.cur} = ${
              course ? (100 / course).toFixed(2) : ""
            } ${to.currency.hint}`
          : `1 ${from.currency.hint} = ${course ? course : ""} ${
              to.currency.cur
            }`}
      </InfoCourse>
      <OfflineForm />
    </Wrapper>
  );
});

export default OfflinePage;
