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
import { useEffect, useState } from "react";
import ExchangeService from "../../services/ExchangeService";
import globalStore from "../../stores/global-store";
import { observer } from "mobx-react-lite";
import toFixedIfNecessary from "../../utils/toFixedIfNecessary";
import { InfoImage } from "../OfflinePage/OfflinePage.style";

const SendPage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to, course } = exchangeStore;

  return (
    <Wrapper>
      <Title>
        Обмен {from.currency.title} {from.currency.hint} на {to.currency.title}{" "}
        {to.currency.hint}
      </Title>
      <ChangeInfo>
        <InfoItem>
          <InfoImage src={from.currency.image} />
          <ItemTitle>Отправляете</ItemTitle>
          <ItemSummary>
            {from.amount} {from.currency.cur}
          </ItemSummary>
        </InfoItem>
        <Icon>
          <SvgRefresh />
        </Icon>
        <InfoItem>
          <InfoImage src={to.currency.image} />
          <ItemTitle>Получаете</ItemTitle>
          <ItemSummary>
            {to.amount} {to.currency.cur}
          </ItemSummary>
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>
        {`1 ${from.currency.hint} = ${
          course ? toFixedIfNecessary(course.in) : ""
        } ${to.currency.cur}`}
      </InfoCourse>
      <SendForm />
    </Wrapper>
  );
});

export default SendPage;
