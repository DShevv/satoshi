import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Caption, PageContainer, SubTitle, Title } from "./ExchangePage.style";

import "swiper/css";
import ExchangeForm from "./ExchangeForm/ExchangeForm";

import ofline from "../../assets/icons/ofline.svg";
import usdt from "../../assets/icons/usdt.svg";
import sber from "../../assets/icons/sder.svg";
import ymoney from "../../assets/icons/youmoney.svg";
import sbp from "../../assets/icons/sbp.svg";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";

const currs = [
  { title: "Tether", image: usdt, hint: "USDT TRC20", cur: "USDT TRC20" },
];

const banks = [
  { title: "Сбербанк", image: sber, hint: "RUB", cur: "RUB" },
  { title: "СБП", image: sbp, hint: "RUB", cur: "RUB" },
  { title: "Офлайн", image: ofline, hint: "Москва", short: "МСК", cur: "RUB" },
  {
    title: "Офлайн",
    image: ofline,
    hint: "Санкт-Петербург",
    short: "СПБ",
    cur: "RUB",
  },
  { title: "ЮMoney", image: ymoney, hint: "RUB", cur: "RUB" },
];

const ExchangePage = observer(() => {
  const [isSell, setIsSell] = useState(0);
  const [currencies, setCurrencies] = useState({
    to: currs[0],
    from: banks[0],
  });
  const [allItems, setAllItems] = useState({ to: currs, from: banks });
  const { exchangeStore } = globalStore;
  const { from, to, setFrom, setTo, setSell } = exchangeStore;

  useEffect(() => {
    setSell(1);
  }, []);

  const setCurFrom = (value) => {
    setCurrencies({ ...currencies, from: value });
  };

  const setCurTo = (value) => {
    setCurrencies({ ...currencies, to: value });
  };

  useEffect(() => {
    setFrom(currencies.from, from.amount);
    setTo(currencies.to, to.amount);
  }, [currencies]);

  const handleChange = () => {
    if (isSell) {
      setIsSell(0);
      setSell(1);
    } else {
      setIsSell(1);
      setSell(0);
    }
  };

  useEffect(() => {
    setCurrencies({ from: currencies.to, to: currencies.from });
    setAllItems({ from: allItems.to, to: allItems.from });
  }, [isSell]);

  return (
    <Wrapper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <PageContainer>
        <Caption>
          <Title>Обмен криптовалюты</Title>
          <SubTitle>
            Покупка и продажа криптовалюты максимально быстро и выгодно
          </SubTitle>
        </Caption>
        <ExchangeForm
          isSell={isSell}
          currencies={currencies}
          allItems={allItems}
          handleChange={handleChange}
          onSelects={{ setFrom: setCurFrom, setTo: setCurTo }}
        />
      </PageContainer>
    </Wrapper>
  );
});

export default ExchangePage;
