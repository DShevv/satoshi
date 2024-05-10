import { useEffect, useRef, useState } from "react";
import Switcher from "../../components/Switcher/Switcher";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  CurrImage,
  ItemTitle,
  OperationName,
  SelectsContainer,
  SliderArrowLeft,
  SliderArrowRight,
  SliderContainer,
  SliderItem,
  SliderList,
  SubTitle,
  SwipersContainer,
  SwitcherCaption,
  SwitcherContainer,
  Title,
} from "./ExchangePage.style";
import { SvgSliderArrow } from "../../assets/icons/svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import ExchangeForm from "./ExchangeForm/ExchangeForm";
import SelectBordered from "../../components/SelectBordered/SelectBordered";

import ethc from "../../assets/icons/eth-classic.svg";
import usdt from "../../assets/icons/usdt.svg";
import sber from "../../assets/icons/sder.svg";
import ymoney from "../../assets/icons/youmoney.svg";

const currs = [
  { title: "Bitcoin", image: ethc, hint: "BTC" },
  { title: "Ethereum", image: ethc, hint: "ETH" },
  { title: "Ethereum", image: ethc, hint: "BTC" },
  { title: "Tether", image: usdt, hint: "USDT TRC20" },
  { title: "Tether", image: usdt, hint: "USDT ERC20" },
  { title: "Tether", image: usdt, hint: "USDT BEP20" },
  { title: "EtherClassic", image: ethc, hint: "ETC" },
];

const banks = [
  { title: "Сбербанк", image: sber, hint: "RUB" },
  { title: "ЮMoney", image: ymoney, hint: "CNY" },
  { title: "ЮMoney", image: ymoney, hint: "USD" },
  { title: "ЮMoney", image: ymoney, hint: "RUB" },
  { title: "Сбербанк", image: sber, hint: "RUB" },
  { title: "Сбербанк", image: sber, hint: "BYN" },
  { title: "Сбербанк", image: sber, hint: "USD" },
];

const ExchangePage = () => {
  const [isSell, setIsSell] = useState(0);
  const cryptoRef = useRef(null);
  const bankRef = useRef(null);
  const [currencies, setCurrencies] = useState({
    from: currs[0],
    to: banks[0],
  });

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
  }, [isSell]);

  return (
    <Wrapper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Title>Обмен криптовалюты</Title>
      <SubTitle>
        Покупка и продажа криптовалюты максимально быстро и выгодно
      </SubTitle>
      <SwitcherContainer>
        <SwitcherCaption $active={isSell ? 0 : 1}>Купить</SwitcherCaption>
        <Switcher active={isSell} onChange={handleChange} />
        <SwitcherCaption $active={isSell}>Продать</SwitcherCaption>
      </SwitcherContainer>
      <SwipersContainer className="desktop" $active={isSell}>
        <SliderContainer>
          <SliderArrowLeft onClick={() => cryptoRef.current?.slidePrev()}>
            <SvgSliderArrow />
          </SliderArrowLeft>
          <SliderList>
            <Swiper
              slidesPerView={7}
              spaceBetween={0}
              loop={true}
              modules={[Navigation]}
              className="CryptoSwiper"
              onSwiper={(it) => (cryptoRef.current = it)}
            >
              {currs.map((elem, index) => (
                <SwiperSlide key={elem.title + index}>
                  <SliderItem
                    onClick={() => {
                      isSell ? setFrom(elem) : setTo(elem);
                    }}
                  >
                    <CurrImage src={elem.image} alt={elem.title} />
                    <ItemTitle>
                      {elem.title}({elem.hint})
                    </ItemTitle>
                  </SliderItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderList>
          <SliderArrowRight onClick={() => cryptoRef.current?.slideNext()}>
            <SvgSliderArrow />
          </SliderArrowRight>
        </SliderContainer>

        <OperationName>{isSell ? "Продаёте" : "Отправляете"}</OperationName>

        <SliderContainer>
          <SliderArrowLeft onClick={() => bankRef.current?.slidePrev()}>
            <SvgSliderArrow />
          </SliderArrowLeft>
          <SliderList>
            <Swiper
              slidesPerView={7}
              spaceBetween={0}
              loop={true}
              modules={[Navigation]}
              className="BankSwiper"
              onSwiper={(it) => (bankRef.current = it)}
            >
              {banks.map((elem, index) => (
                <SwiperSlide key={elem.title + index}>
                  <SliderItem
                    onClick={() => {
                      isSell ? setTo(elem) : setFrom(elem);
                    }}
                  >
                    <CurrImage src={elem.image} alt={elem.title} />
                    <ItemTitle>
                      {elem.title}({elem.hint})
                    </ItemTitle>
                  </SliderItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderList>
          <SliderArrowRight onClick={() => bankRef.current?.slideNext()}>
            <SvgSliderArrow />
          </SliderArrowRight>
        </SliderContainer>
      </SwipersContainer>

      <SelectsContainer className="mobile" $isActive={isSell}>
        <SelectBordered
          items={[
            { title: "EtherClassic", image: ethc, hint: "ETC" },
            { title: "Tether", image: usdt, hint: "USDT BEP20" },
          ]}
          value={isSell ? currencies.to : currencies.from}
          onChange={(value) => {
            isSell ? setFrom(value) : setTo(value);
          }}
        />
        <OperationName style={{ margin: "30px 0 11px" }}>
          {isSell ? "Продаёте" : "Отправляете"}
        </OperationName>
        <SelectBordered
          items={[
            { title: "Сбербанк", image: sber, hint: "RUB" },
            { title: "ЮMoney", image: ymoney, hint: "RUB" },
          ]}
          value={isSell ? currencies.from : currencies.to}
          onChange={(value) => {
            isSell ? setTo(value) : setFrom(value);
          }}
        />
      </SelectsContainer>

      <ExchangeForm isSell={isSell} currencies={currencies} />
    </Wrapper>
  );
};

export default ExchangePage;
