import { useEffect, useRef, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Caption, PageContainer, SubTitle, Title } from "./ExchangePage.style";

import "swiper/css";
import ExchangeForm from "./ExchangeForm/ExchangeForm";

import ethc from "../../assets/icons/eth-classic.svg";
import usdt from "../../assets/icons/usdt.svg";
import sber from "../../assets/icons/sder.svg";
import ymoney from "../../assets/icons/youmoney.svg";

const currs = [
  { title: "Bitcoin", image: ethc, hint: "BTC" },
  { title: "Ethereum", image: ethc, hint: "ETH" },
  { title: "Ethereum", image: ethc, hint: "BTC" },
  { title: "Tether", image: usdt, hint: "USDT TRC20" },
];

const banks = [
  { title: "Сбербанк", image: sber, hint: "RUB" },
  { title: "ЮMoney", image: ymoney, hint: "CNY" },
  { title: "ЮMoney", image: ymoney, hint: "USD" },
  { title: "ЮMoney", image: ymoney, hint: "RUB" },
];

const ExchangePage = () => {
  const [isSell, setIsSell] = useState(0);
  const cryptoRef = useRef(null);
  const bankRef = useRef(null);
  const [currencies, setCurrencies] = useState({
    to: currs[0],
    from: banks[0],
  });
  const [allItems, setAllItems] = useState({ to: currs, from: banks });

  const setFrom = (value) => {
    setCurrencies({ ...currencies, from: value });
  };

  const setTo = (value) => {
    setCurrencies({ ...currencies, to: value });
  };

  const handleChange = () => {
    if (isSell) {
      setIsSell(0);
    } else {
      setIsSell(1);
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
          onSelects={{ setFrom, setTo }}
        />
      </PageContainer>
    </Wrapper>
  );
};

export default ExchangePage;
