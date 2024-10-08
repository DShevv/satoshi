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
import toFixedIfNecessary from "../../utils/toFixedIfNecessary";
import { useNavigate } from "react-router-dom";

const OfflinePage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to, course, canPass } = exchangeStore;
  const navigate = useNavigate();

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
              course ? toFixedIfNecessary(100 / course.in) : ""
            } ${to.currency.hint}`
          : `1 ${from.currency.hint} = ${
              course ? toFixedIfNecessary(course.in) : ""
            } ${to.currency.cur}`}
      </InfoCourse>
      <OfflineForm />
    </Wrapper>
  );
});

export default OfflinePage;
