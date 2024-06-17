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
import { observer } from "mobx-react-lite";
import ExchangeService from "../../services/ExchangeService";
import { useEffect, useState } from "react";
import globalStore from "../../stores/global-store";
import { InfoImage } from "../OfflinePage/OfflinePage.style";
import toFixedIfNecessary from "../../utils/toFixedIfNecessary";

export const SellPage = observer(() => {
  const { exchangeStore } = globalStore;
  const { from, to } = exchangeStore;
  const [course, setCourse] = useState();

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await ExchangeService.getCourseUsdt();
      setCourse(res.data);
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
            {from.amount} {from.currency.cur}
          </ItemSummary>
        </InfoItem>
        <Icon>
          <SvgRefresh />
        </Icon>
        <InfoItem>
          <InfoImage src={to.currency.image} />
          <ItemTitle>Отправляете</ItemTitle>
          <ItemSummary>
            {to.amount} {to.currency.cur}
          </ItemSummary>
        </InfoItem>
      </ChangeInfo>
      <InfoCourse>
        {`100 ${from.currency.cur} = ${
          course ? toFixedIfNecessary((1 / course.out) * 100) : ""
        } ${to.currency.hint}`}
      </InfoCourse>
      <SellForm />
    </Wrapper>
  );
});
