import { useEffect, useRef, useState } from "react";
import Switcher from "../../components/Switcher/Switcher";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  ItemTitle,
  OperationName,
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
import {
  SvgAlpha,
  SvgBtc,
  SvgEth,
  SvgEthClassic,
  SvgMts,
  SvgSber,
  SvgSliderArrow,
  SvgUsdt,
  SvgVisa,
  SvgYoumoney,
} from "../../assets/icons/svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import ExchangeForm from "./ExchangeForm/ExchangeForm";

const ExchangePage = () => {
  const [isSell, setIsSell] = useState(0);
  const cryptoRef = useRef(null);
  const bankRef = useRef(null);
  const [currencies, setCurrencies] = useState({
    from: "Bitcoin(BTC)",
    to: "Сбербанк(RUB)",
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
    <Wrapper>
      <Title>Обмен криптовалюты</Title>
      <SubTitle>
        Покупка и продажа криптовалюты максимально быстро и выгодно
      </SubTitle>
      <SwitcherContainer>
        <SwitcherCaption $active={isSell ? 0 : 1}>Купить</SwitcherCaption>
        <Switcher active={isSell} onChange={handleChange} />
        <SwitcherCaption $active={isSell}>Продать</SwitcherCaption>
      </SwitcherContainer>
      <SwipersContainer $active={isSell}>
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
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setFrom("Bitcoin") : setTo("Bitcoin");
                  }}
                >
                  <SvgBtc />
                  <ItemTitle>Bitcoin(BTC)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setFrom("Ethereum(ETH)") : setTo("Ethereum(ETH)");
                  }}
                >
                  <SvgEth />
                  <ItemTitle>Ethereum(ETH)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setFrom("Ethereum(ETH)") : setTo("Ethereum(ETH)");
                  }}
                >
                  <SvgEth />
                  <ItemTitle>Ethereum(ETH)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setFrom("Tether(USDT) TRC20")
                      : setTo("Tether(USDT) TRC20");
                  }}
                >
                  <SvgUsdt />
                  <ItemTitle>Tether(USDT) TRC20</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setFrom("Tether(USDT) ERC20")
                      : setTo("Tether(USDT) ERC20");
                  }}
                >
                  <SvgUsdt />
                  <ItemTitle>Tether(USDT) ERC20</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setFrom("Tether(USDT) BEP20")
                      : setTo("Tether(USDT) BEP20");
                  }}
                >
                  <SvgUsdt />
                  <ItemTitle>Tether(USDT) BEP20</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setFrom("EtherClassic (ETC)")
                      : setTo("EtherClassic (ETC)");
                  }}
                >
                  <SvgEthClassic />
                  <ItemTitle>
                    EtherClassic <br /> (ETC)
                  </ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setFrom("EtherClassic (ETC)")
                      : setTo("EtherClassic (ETC)");
                  }}
                >
                  <SvgEthClassic />
                  <ItemTitle>
                    EtherClassic <br />
                    (ETC)
                  </ItemTitle>
                </SliderItem>
              </SwiperSlide>
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
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("Сбербанк(RUB)") : setFrom("Сбербанк(RUB)");
                  }}
                >
                  <SvgSber />
                  <ItemTitle>Сбербанк(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("ЮMoney(RUB)") : setFrom("ЮMoney(RUB)");
                  }}
                >
                  <SvgYoumoney />
                  <ItemTitle>ЮMoney(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("MTC Банк(RUB)") : setFrom("MTC Банк(RUB)");
                  }}
                >
                  <SvgMts />
                  <ItemTitle>MTC Банк(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("AlfaBank(RUB)") : setFrom("AlfaBank(RUB)");
                  }}
                >
                  <SvgAlpha />
                  <ItemTitle>AlfaBank(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setTo("Visa-MC-MIR(RUB)")
                      : setFrom("Visa-MC-MIR(RUB)");
                  }}
                >
                  <SvgVisa />
                  <ItemTitle>Visa-MC-MIR (RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("MTC Банк(RUB)") : setFrom("MTC Банк(RUB)");
                  }}
                >
                  <SvgMts />
                  <ItemTitle>MTC Банк(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell ? setTo("AlfaBank(RUB)") : setFrom("AlfaBank(RUB)");
                  }}
                >
                  <SvgAlpha />
                  <ItemTitle>AlfaBank(RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem
                  onClick={() => {
                    isSell
                      ? setTo("Visa-MC-MIR(RUB)")
                      : setFrom("Visa-MC-MIR(RUB)");
                  }}
                >
                  <SvgVisa />
                  <ItemTitle>Visa-MC-MIR (RUB)</ItemTitle>
                </SliderItem>
              </SwiperSlide>
            </Swiper>
          </SliderList>
          <SliderArrowRight onClick={() => bankRef.current?.slideNext()}>
            <SvgSliderArrow />
          </SliderArrowRight>
        </SliderContainer>
      </SwipersContainer>
      <ExchangeForm isSell={isSell} currencies={currencies} />
    </Wrapper>
  );
};

export default ExchangePage;
