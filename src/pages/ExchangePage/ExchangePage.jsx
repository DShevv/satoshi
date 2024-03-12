import { useState } from "react";
import Switcher from "../../components/Switcher/Switcher";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  SubTitle,
  SwitcherCaption,
  SwitcherContainer,
  Title,
} from "./ExchangePage.style";

const ExchangePage = () => {
  const [isSell, setIsSell] = useState(0);

  const handleChange = () => {
    if (isSell) {
      setIsSell(0);
    } else {
      setIsSell(1);
    }

    console.log(isSell);
  };

  return (
    <Wrapper>
      <Title>Обмен криптовалюты</Title>
      <SubTitle>
        Покупка и продажа криптовалюты максимально быстро и выгодно
      </SubTitle>
      <SwitcherContainer>
        <SwitcherCaption active={isSell ? 0 : 1}>Купить</SwitcherCaption>
        <Switcher active={isSell} onChange={handleChange} />
        <SwitcherCaption active={isSell}>Продать</SwitcherCaption>
      </SwitcherContainer>
    </Wrapper>
  );
};

export default ExchangePage;
