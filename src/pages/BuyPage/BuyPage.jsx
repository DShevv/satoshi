import { observer } from "mobx-react-lite";
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
import globalStore from "../../stores/global-store";
import { InfoImage } from "../OfflinePage/OfflinePage.style";
import { useEffect, useState } from "react";
import ExchangeService from "../../services/ExchangeService";
import toFixedIfNecessary from "../../utils/toFixedIfNecessary";
import { useNavigate } from "react-router-dom";

export const BuyPage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to, course, canPass, isSell } = exchangeStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!canPass || isSell !== 1) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <Title>Заявка №874607798678</Title>
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
      <BuyForm />
    </Wrapper>
  );
});
