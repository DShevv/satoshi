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

const SendPage = observer(() => {
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
