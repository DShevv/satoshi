import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../../../components/Buttons/BackButton/BackButton";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import {
  ButtonsContainer,
  Container,
  QrCode,
  Text,
  Title,
} from "./SendForm.style";
import InputHash from "../../../components/InputHash/InputHash";

const SendForm = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Заявка №878885585228</Title>
      <Text>
        Осуществляете перевод USDT TRC20 на данный кошелек, после нажатия
        продолжить
      </Text>
      <InputHash
        value={"0xbb104341956e1df223f72c2419f45f3522"}
        title={"Адрес кошелька"}
      />
      <QrCode to={"/qr"}>
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.266602 0.266666H3.53327V3.53333H0.266602V0.266666ZM3.53327 0.266666H6.79993V3.53333H3.53327V0.266666ZM6.79993 0.266666H10.0666V3.53333H6.79993V0.266666ZM10.0666 0.266666H13.3333V3.53333H10.0666V0.266666ZM13.3333 0.266666H16.5999V3.53333H13.3333V0.266666ZM16.5999 0.266666H19.8666V3.53333H16.5999V0.266666ZM19.8666 0.266666H23.1333V3.53333H19.8666V0.266666ZM39.4666 0.266666H42.7333V3.53333H39.4666V0.266666ZM42.7333 0.266666H45.9999V3.53333H42.7333V0.266666ZM49.2666 0.266666H52.5333V3.53333H49.2666V0.266666ZM52.5333 0.266666H55.7999V3.53333H52.5333V0.266666ZM55.7999 0.266666H59.0666V3.53333H55.7999V0.266666ZM62.3333 0.266666H65.5999V3.53333H62.3333V0.266666ZM65.5999 0.266666H68.8666V3.53333H65.5999V0.266666ZM72.1333 0.266666H75.3999V3.53333H72.1333V0.266666ZM75.3999 0.266666H78.6666V3.53333H75.3999V0.266666ZM78.6666 0.266666H81.9333V3.53333H78.6666V0.266666ZM81.9333 0.266666H85.1999V3.53333H81.9333V0.266666ZM85.1999 0.266666H88.4666V3.53333H85.1999V0.266666ZM88.4666 0.266666H91.7333V3.53333H88.4666V0.266666ZM91.7333 0.266666H94.9999V3.53333H91.7333V0.266666ZM0.266602 3.53333H3.53327V6.8H0.266602V3.53333ZM19.8666 3.53333H23.1333V6.8H19.8666V3.53333ZM26.3999 3.53333H29.6666V6.8H26.3999V3.53333ZM36.1999 3.53333H39.4666V6.8H36.1999V3.53333ZM39.4666 3.53333H42.7333V6.8H39.4666V3.53333ZM45.9999 3.53333H49.2666V6.8H45.9999V3.53333ZM49.2666 3.53333H52.5333V6.8H49.2666V3.53333ZM55.7999 3.53333H59.0666V6.8H55.7999V3.53333ZM62.3333 3.53333H65.5999V6.8H62.3333V3.53333ZM72.1333 3.53333H75.3999V6.8H72.1333V3.53333ZM91.7333 3.53333H94.9999V6.8H91.7333V3.53333ZM0.266602 6.8H3.53327V10.0667H0.266602V6.8ZM6.79993 6.8H10.0666V10.0667H6.79993V6.8ZM10.0666 6.8H13.3333V10.0667H10.0666V6.8ZM13.3333 6.8H16.5999V10.0667H13.3333V6.8ZM19.8666 6.8H23.1333V10.0667H19.8666V6.8ZM32.9333 6.8H36.1999V10.0667H32.9333V6.8ZM39.4666 6.8H42.7333V10.0667H39.4666V6.8ZM62.3333 6.8H65.5999V10.0667H62.3333V6.8ZM72.1333 6.8H75.3999V10.0667H72.1333V6.8ZM78.6666 6.8H81.9333V10.0667H78.6666V6.8ZM81.9333 6.8H85.1999V10.0667H81.9333V6.8ZM85.1999 6.8H88.4666V10.0667H85.1999V6.8ZM91.7333 6.8H94.9999V10.0667H91.7333V6.8ZM0.266602 10.0667H3.53327V13.3333H0.266602V10.0667ZM6.79993 10.0667H10.0666V13.3333H6.79993V10.0667ZM10.0666 10.0667H13.3333V13.3333H10.0666V10.0667ZM13.3333 10.0667H16.5999V13.3333H13.3333V10.0667ZM19.8666 10.0667H23.1333V13.3333H19.8666V10.0667ZM26.3999 10.0667H29.6666V13.3333H26.3999V10.0667ZM32.9333 10.0667H36.1999V13.3333H32.9333V10.0667ZM45.9999 10.0667H49.2666V13.3333H45.9999V10.0667ZM52.5333 10.0667H55.7999V13.3333H52.5333V10.0667ZM55.7999 10.0667H59.0666V13.3333H55.7999V10.0667ZM59.0666 10.0667H62.3333V13.3333H59.0666V10.0667ZM72.1333 10.0667H75.3999V13.3333H72.1333V10.0667ZM78.6666 10.0667H81.9333V13.3333H78.6666V10.0667ZM81.9333 10.0667H85.1999V13.3333H81.9333V10.0667ZM85.1999 10.0667H88.4666V13.3333H85.1999V10.0667ZM91.7333 10.0667H94.9999V13.3333H91.7333V10.0667ZM0.266602 13.3333H3.53327V16.6H0.266602V13.3333ZM6.79993 13.3333H10.0666V16.6H6.79993V13.3333ZM10.0666 13.3333H13.3333V16.6H10.0666V13.3333ZM13.3333 13.3333H16.5999V16.6H13.3333V13.3333ZM19.8666 13.3333H23.1333V16.6H19.8666V13.3333ZM26.3999 13.3333H29.6666V16.6H26.3999V13.3333ZM32.9333 13.3333H36.1999V16.6H32.9333V13.3333ZM39.4666 13.3333H42.7333V16.6H39.4666V13.3333ZM42.7333 13.3333H45.9999V16.6H42.7333V13.3333ZM59.0666 13.3333H62.3333V16.6H59.0666V13.3333ZM62.3333 13.3333H65.5999V16.6H62.3333V13.3333ZM72.1333 13.3333H75.3999V16.6H72.1333V13.3333ZM78.6666 13.3333H81.9333V16.6H78.6666V13.3333ZM81.9333 13.3333H85.1999V16.6H81.9333V13.3333ZM85.1999 13.3333H88.4666V16.6H85.1999V13.3333ZM91.7333 13.3333H94.9999V16.6H91.7333V13.3333ZM0.266602 16.6H3.53327V19.8667H0.266602V16.6ZM19.8666 16.6H23.1333V19.8667H19.8666V16.6ZM29.6666 16.6H32.9333V19.8667H29.6666V16.6ZM39.4666 16.6H42.7333V19.8667H39.4666V16.6ZM65.5999 16.6H68.8666V19.8667H65.5999V16.6ZM72.1333 16.6H75.3999V19.8667H72.1333V16.6ZM91.7333 16.6H94.9999V19.8667H91.7333V16.6ZM0.266602 19.8667H3.53327V23.1333H0.266602V19.8667ZM3.53327 19.8667H6.79993V23.1333H3.53327V19.8667ZM6.79993 19.8667H10.0666V23.1333H6.79993V19.8667ZM10.0666 19.8667H13.3333V23.1333H10.0666V19.8667ZM13.3333 19.8667H16.5999V23.1333H13.3333V19.8667ZM16.5999 19.8667H19.8666V23.1333H16.5999V19.8667ZM19.8666 19.8667H23.1333V23.1333H19.8666V19.8667ZM26.3999 19.8667H29.6666V23.1333H26.3999V19.8667ZM32.9333 19.8667H36.1999V23.1333H32.9333V19.8667ZM39.4666 19.8667H42.7333V23.1333H39.4666V19.8667ZM45.9999 19.8667H49.2666V23.1333H45.9999V19.8667ZM52.5333 19.8667H55.7999V23.1333H52.5333V19.8667ZM59.0666 19.8667H62.3333V23.1333H59.0666V19.8667ZM65.5999 19.8667H68.8666V23.1333H65.5999V19.8667ZM72.1333 19.8667H75.3999V23.1333H72.1333V19.8667ZM75.3999 19.8667H78.6666V23.1333H75.3999V19.8667ZM78.6666 19.8667H81.9333V23.1333H78.6666V19.8667ZM81.9333 19.8667H85.1999V23.1333H81.9333V19.8667ZM85.1999 19.8667H88.4666V23.1333H85.1999V19.8667ZM88.4666 19.8667H91.7333V23.1333H88.4666V19.8667ZM91.7333 19.8667H94.9999V23.1333H91.7333V19.8667ZM26.3999 23.1333H29.6666V26.4H26.3999V23.1333ZM29.6666 23.1333H32.9333V26.4H29.6666V23.1333ZM52.5333 23.1333H55.7999V26.4H52.5333V23.1333ZM55.7999 23.1333H59.0666V26.4H55.7999V23.1333ZM59.0666 23.1333H62.3333V26.4H59.0666V23.1333ZM3.53327 26.4H6.79993V29.6667H3.53327V26.4ZM10.0666 26.4H13.3333V29.6667H10.0666V26.4ZM13.3333 26.4H16.5999V29.6667H13.3333V26.4ZM16.5999 26.4H19.8666V29.6667H16.5999V26.4ZM19.8666 26.4H23.1333V29.6667H19.8666V26.4ZM26.3999 26.4H29.6666V29.6667H26.3999V26.4ZM29.6666 26.4H32.9333V29.6667H29.6666V26.4ZM36.1999 26.4H39.4666V29.6667H36.1999V26.4ZM39.4666 26.4H42.7333V29.6667H39.4666V26.4ZM45.9999 26.4H49.2666V29.6667H45.9999V26.4ZM49.2666 26.4H52.5333V29.6667H49.2666V26.4ZM52.5333 26.4H55.7999V29.6667H52.5333V26.4ZM62.3333 26.4H65.5999V29.6667H62.3333V26.4ZM68.8666 26.4H72.1333V29.6667H68.8666V26.4ZM72.1333 26.4H75.3999V29.6667H72.1333V26.4ZM78.6666 26.4H81.9333V29.6667H78.6666V26.4ZM81.9333 26.4H85.1999V29.6667H81.9333V26.4ZM88.4666 26.4H91.7333V29.6667H88.4666V26.4ZM0.266602 29.6667H3.53327V32.9333H0.266602V29.6667ZM10.0666 29.6667H13.3333V32.9333H10.0666V29.6667ZM13.3333 29.6667H16.5999V32.9333H13.3333V29.6667ZM16.5999 29.6667H19.8666V32.9333H16.5999V29.6667ZM26.3999 29.6667H29.6666V32.9333H26.3999V29.6667ZM29.6666 29.6667H32.9333V32.9333H29.6666V29.6667ZM36.1999 29.6667H39.4666V32.9333H36.1999V29.6667ZM39.4666 29.6667H42.7333V32.9333H39.4666V29.6667ZM55.7999 29.6667H59.0666V32.9333H55.7999V29.6667ZM59.0666 29.6667H62.3333V32.9333H59.0666V29.6667ZM75.3999 29.6667H78.6666V32.9333H75.3999V29.6667ZM78.6666 29.6667H81.9333V32.9333H78.6666V29.6667ZM85.1999 29.6667H88.4666V32.9333H85.1999V29.6667ZM88.4666 29.6667H91.7333V32.9333H88.4666V29.6667ZM3.53327 32.9333H6.79993V36.2H3.53327V32.9333ZM6.79993 32.9333H10.0666V36.2H6.79993V32.9333ZM10.0666 32.9333H13.3333V36.2H10.0666V32.9333ZM16.5999 32.9333H19.8666V36.2H16.5999V32.9333ZM19.8666 32.9333H23.1333V36.2H19.8666V32.9333ZM32.9333 32.9333H36.1999V36.2H32.9333V32.9333ZM45.9999 32.9333H49.2666V36.2H45.9999V32.9333ZM49.2666 32.9333H52.5333V36.2H49.2666V32.9333ZM62.3333 32.9333H65.5999V36.2H62.3333V32.9333ZM65.5999 32.9333H68.8666V36.2H65.5999V32.9333ZM68.8666 32.9333H72.1333V36.2H68.8666V32.9333ZM72.1333 32.9333H75.3999V36.2H72.1333V32.9333ZM0.266602 36.2H3.53327V39.4667H0.266602V36.2ZM3.53327 36.2H6.79993V39.4667H3.53327V36.2ZM6.79993 36.2H10.0666V39.4667H6.79993V36.2ZM23.1333 36.2H26.3999V39.4667H23.1333V36.2ZM26.3999 36.2H29.6666V39.4667H26.3999V36.2ZM29.6666 36.2H32.9333V39.4667H29.6666V36.2ZM39.4666 36.2H42.7333V39.4667H39.4666V36.2ZM42.7333 36.2H45.9999V39.4667H42.7333V36.2ZM45.9999 36.2H49.2666V39.4667H45.9999V36.2ZM49.2666 36.2H52.5333V39.4667H49.2666V36.2ZM52.5333 36.2H55.7999V39.4667H52.5333V36.2ZM55.7999 36.2H59.0666V39.4667H55.7999V36.2ZM59.0666 36.2H62.3333V39.4667H59.0666V36.2ZM62.3333 36.2H65.5999V39.4667H62.3333V36.2ZM65.5999 36.2H68.8666V39.4667H65.5999V36.2ZM75.3999 36.2H78.6666V39.4667H75.3999V36.2ZM78.6666 36.2H81.9333V39.4667H78.6666V36.2ZM81.9333 36.2H85.1999V39.4667H81.9333V36.2ZM91.7333 36.2H94.9999V39.4667H91.7333V36.2ZM0.266602 39.4667H3.53327V42.7333H0.266602V39.4667ZM13.3333 39.4667H16.5999V42.7333H13.3333V39.4667ZM16.5999 39.4667H19.8666V42.7333H16.5999V39.4667ZM19.8666 39.4667H23.1333V42.7333H19.8666V39.4667ZM29.6666 39.4667H32.9333V42.7333H29.6666V39.4667ZM32.9333 39.4667H36.1999V42.7333H32.9333V39.4667ZM39.4666 39.4667H42.7333V42.7333H39.4666V39.4667ZM42.7333 39.4667H45.9999V42.7333H42.7333V39.4667ZM49.2666 39.4667H52.5333V42.7333H49.2666V39.4667ZM68.8666 39.4667H72.1333V42.7333H68.8666V39.4667ZM72.1333 39.4667H75.3999V42.7333H72.1333V39.4667ZM81.9333 39.4667H85.1999V42.7333H81.9333V39.4667ZM88.4666 39.4667H91.7333V42.7333H88.4666V39.4667ZM0.266602 42.7333H3.53327V46H0.266602V42.7333ZM6.79993 42.7333H10.0666V46H6.79993V42.7333ZM10.0666 42.7333H13.3333V46H10.0666V42.7333ZM13.3333 42.7333H16.5999V46H13.3333V42.7333ZM26.3999 42.7333H29.6666V46H26.3999V42.7333ZM32.9333 42.7333H36.1999V46H32.9333V42.7333ZM42.7333 42.7333H45.9999V46H42.7333V42.7333ZM52.5333 42.7333H55.7999V46H52.5333V42.7333ZM59.0666 42.7333H62.3333V46H59.0666V42.7333ZM72.1333 42.7333H75.3999V46H72.1333V42.7333ZM78.6666 42.7333H81.9333V46H78.6666V42.7333ZM85.1999 42.7333H88.4666V46H85.1999V42.7333ZM88.4666 42.7333H91.7333V46H88.4666V42.7333ZM91.7333 42.7333H94.9999V46H91.7333V42.7333ZM3.53327 46H6.79993V49.2667H3.53327V46ZM10.0666 46H13.3333V49.2667H10.0666V46ZM19.8666 46H23.1333V49.2667H19.8666V46ZM23.1333 46H26.3999V49.2667H23.1333V46ZM36.1999 46H39.4666V49.2667H36.1999V46ZM49.2666 46H52.5333V49.2667H49.2666V46ZM52.5333 46H55.7999V49.2667H52.5333V46ZM59.0666 46H62.3333V49.2667H59.0666V46ZM62.3333 46H65.5999V49.2667H62.3333V46ZM65.5999 46H68.8666V49.2667H65.5999V46ZM75.3999 46H78.6666V49.2667H75.3999V46ZM81.9333 46H85.1999V49.2667H81.9333V46ZM91.7333 46H94.9999V49.2667H91.7333V46ZM0.266602 49.2667H3.53327V52.5333H0.266602V49.2667ZM3.53327 49.2667H6.79993V52.5333H3.53327V49.2667ZM13.3333 49.2667H16.5999V52.5333H13.3333V49.2667ZM16.5999 49.2667H19.8666V52.5333H16.5999V49.2667ZM23.1333 49.2667H26.3999V52.5333H23.1333V49.2667ZM26.3999 49.2667H29.6666V52.5333H26.3999V49.2667ZM29.6666 49.2667H32.9333V52.5333H29.6666V49.2667ZM32.9333 49.2667H36.1999V52.5333H32.9333V49.2667ZM39.4666 49.2667H42.7333V52.5333H39.4666V49.2667ZM42.7333 49.2667H45.9999V52.5333H42.7333V49.2667ZM62.3333 49.2667H65.5999V52.5333H62.3333V49.2667ZM68.8666 49.2667H72.1333V52.5333H68.8666V49.2667ZM78.6666 49.2667H81.9333V52.5333H78.6666V49.2667ZM81.9333 49.2667H85.1999V52.5333H81.9333V49.2667ZM85.1999 49.2667H88.4666V52.5333H85.1999V49.2667ZM88.4666 49.2667H91.7333V52.5333H88.4666V49.2667ZM91.7333 49.2667H94.9999V52.5333H91.7333V49.2667ZM0.266602 52.5333H3.53327V55.8H0.266602V52.5333ZM10.0666 52.5333H13.3333V55.8H10.0666V52.5333ZM13.3333 52.5333H16.5999V55.8H13.3333V52.5333ZM16.5999 52.5333H19.8666V55.8H16.5999V52.5333ZM19.8666 52.5333H23.1333V55.8H19.8666V52.5333ZM23.1333 52.5333H26.3999V55.8H23.1333V52.5333ZM26.3999 52.5333H29.6666V55.8H26.3999V52.5333ZM29.6666 52.5333H32.9333V55.8H29.6666V52.5333ZM42.7333 52.5333H45.9999V55.8H42.7333V52.5333ZM45.9999 52.5333H49.2666V55.8H45.9999V52.5333ZM49.2666 52.5333H52.5333V55.8H49.2666V52.5333ZM55.7999 52.5333H59.0666V55.8H55.7999V52.5333ZM59.0666 52.5333H62.3333V55.8H59.0666V52.5333ZM65.5999 52.5333H68.8666V55.8H65.5999V52.5333ZM75.3999 52.5333H78.6666V55.8H75.3999V52.5333ZM81.9333 52.5333H85.1999V55.8H81.9333V52.5333ZM88.4666 52.5333H91.7333V55.8H88.4666V52.5333ZM0.266602 55.8H3.53327V59.0667H0.266602V55.8ZM3.53327 55.8H6.79993V59.0667H3.53327V55.8ZM10.0666 55.8H13.3333V59.0667H10.0666V55.8ZM13.3333 55.8H16.5999V59.0667H13.3333V55.8ZM32.9333 55.8H36.1999V59.0667H32.9333V55.8ZM36.1999 55.8H39.4666V59.0667H36.1999V55.8ZM55.7999 55.8H59.0666V59.0667H55.7999V55.8ZM78.6666 55.8H81.9333V59.0667H78.6666V55.8ZM81.9333 55.8H85.1999V59.0667H81.9333V55.8ZM0.266602 59.0667H3.53327V62.3333H0.266602V59.0667ZM3.53327 59.0667H6.79993V62.3333H3.53327V59.0667ZM19.8666 59.0667H23.1333V62.3333H19.8666V59.0667ZM29.6666 59.0667H32.9333V62.3333H29.6666V59.0667ZM39.4666 59.0667H42.7333V62.3333H39.4666V59.0667ZM42.7333 59.0667H45.9999V62.3333H42.7333V59.0667ZM45.9999 59.0667H49.2666V62.3333H45.9999V59.0667ZM52.5333 59.0667H55.7999V62.3333H52.5333V59.0667ZM55.7999 59.0667H59.0666V62.3333H55.7999V59.0667ZM59.0666 59.0667H62.3333V62.3333H59.0666V59.0667ZM62.3333 59.0667H65.5999V62.3333H62.3333V59.0667ZM75.3999 59.0667H78.6666V62.3333H75.3999V59.0667ZM81.9333 59.0667H85.1999V62.3333H81.9333V59.0667ZM85.1999 59.0667H88.4666V62.3333H85.1999V59.0667ZM91.7333 59.0667H94.9999V62.3333H91.7333V59.0667ZM0.266602 62.3333H3.53327V65.6H0.266602V62.3333ZM3.53327 62.3333H6.79993V65.6H3.53327V62.3333ZM10.0666 62.3333H13.3333V65.6H10.0666V62.3333ZM13.3333 62.3333H16.5999V65.6H13.3333V62.3333ZM23.1333 62.3333H26.3999V65.6H23.1333V62.3333ZM26.3999 62.3333H29.6666V65.6H26.3999V62.3333ZM32.9333 62.3333H36.1999V65.6H32.9333V62.3333ZM36.1999 62.3333H39.4666V65.6H36.1999V62.3333ZM39.4666 62.3333H42.7333V65.6H39.4666V62.3333ZM45.9999 62.3333H49.2666V65.6H45.9999V62.3333ZM49.2666 62.3333H52.5333V65.6H49.2666V62.3333ZM52.5333 62.3333H55.7999V65.6H52.5333V62.3333ZM68.8666 62.3333H72.1333V65.6H68.8666V62.3333ZM72.1333 62.3333H75.3999V65.6H72.1333V62.3333ZM75.3999 62.3333H78.6666V65.6H75.3999V62.3333ZM85.1999 62.3333H88.4666V65.6H85.1999V62.3333ZM88.4666 62.3333H91.7333V65.6H88.4666V62.3333ZM0.266602 65.6H3.53327V68.8667H0.266602V65.6ZM3.53327 65.6H6.79993V68.8667H3.53327V65.6ZM10.0666 65.6H13.3333V68.8667H10.0666V65.6ZM16.5999 65.6H19.8666V68.8667H16.5999V65.6ZM19.8666 65.6H23.1333V68.8667H19.8666V65.6ZM26.3999 65.6H29.6666V68.8667H26.3999V65.6ZM39.4666 65.6H42.7333V68.8667H39.4666V65.6ZM42.7333 65.6H45.9999V68.8667H42.7333V65.6ZM45.9999 65.6H49.2666V68.8667H45.9999V65.6ZM55.7999 65.6H59.0666V68.8667H55.7999V65.6ZM65.5999 65.6H68.8666V68.8667H65.5999V65.6ZM68.8666 65.6H72.1333V68.8667H68.8666V65.6ZM72.1333 65.6H75.3999V68.8667H72.1333V65.6ZM75.3999 65.6H78.6666V68.8667H75.3999V65.6ZM78.6666 65.6H81.9333V68.8667H78.6666V65.6ZM85.1999 65.6H88.4666V68.8667H85.1999V65.6ZM88.4666 65.6H91.7333V68.8667H88.4666V65.6ZM26.3999 68.8667H29.6666V72.1333H26.3999V68.8667ZM32.9333 68.8667H36.1999V72.1333H32.9333V68.8667ZM42.7333 68.8667H45.9999V72.1333H42.7333V68.8667ZM45.9999 68.8667H49.2666V72.1333H45.9999V68.8667ZM49.2666 68.8667H52.5333V72.1333H49.2666V68.8667ZM55.7999 68.8667H59.0666V72.1333H55.7999V68.8667ZM62.3333 68.8667H65.5999V72.1333H62.3333V68.8667ZM65.5999 68.8667H68.8666V72.1333H65.5999V68.8667ZM78.6666 68.8667H81.9333V72.1333H78.6666V68.8667ZM81.9333 68.8667H85.1999V72.1333H81.9333V68.8667ZM85.1999 68.8667H88.4666V72.1333H85.1999V68.8667ZM0.266602 72.1333H3.53327V75.4H0.266602V72.1333ZM3.53327 72.1333H6.79993V75.4H3.53327V72.1333ZM6.79993 72.1333H10.0666V75.4H6.79993V72.1333ZM10.0666 72.1333H13.3333V75.4H10.0666V72.1333ZM13.3333 72.1333H16.5999V75.4H13.3333V72.1333ZM16.5999 72.1333H19.8666V75.4H16.5999V72.1333ZM19.8666 72.1333H23.1333V75.4H19.8666V72.1333ZM32.9333 72.1333H36.1999V75.4H32.9333V72.1333ZM36.1999 72.1333H39.4666V75.4H36.1999V72.1333ZM42.7333 72.1333H45.9999V75.4H42.7333V72.1333ZM49.2666 72.1333H52.5333V75.4H49.2666V72.1333ZM52.5333 72.1333H55.7999V75.4H52.5333V72.1333ZM62.3333 72.1333H65.5999V75.4H62.3333V72.1333ZM65.5999 72.1333H68.8666V75.4H65.5999V72.1333ZM72.1333 72.1333H75.3999V75.4H72.1333V72.1333ZM78.6666 72.1333H81.9333V75.4H78.6666V72.1333ZM85.1999 72.1333H88.4666V75.4H85.1999V72.1333ZM0.266602 75.4H3.53327V78.6667H0.266602V75.4ZM19.8666 75.4H23.1333V78.6667H19.8666V75.4ZM26.3999 75.4H29.6666V78.6667H26.3999V75.4ZM29.6666 75.4H32.9333V78.6667H29.6666V75.4ZM32.9333 75.4H36.1999V78.6667H32.9333V75.4ZM36.1999 75.4H39.4666V78.6667H36.1999V75.4ZM42.7333 75.4H45.9999V78.6667H42.7333V75.4ZM49.2666 75.4H52.5333V78.6667H49.2666V75.4ZM59.0666 75.4H62.3333V78.6667H59.0666V75.4ZM62.3333 75.4H65.5999V78.6667H62.3333V75.4ZM65.5999 75.4H68.8666V78.6667H65.5999V75.4ZM78.6666 75.4H81.9333V78.6667H78.6666V75.4ZM81.9333 75.4H85.1999V78.6667H81.9333V75.4ZM88.4666 75.4H91.7333V78.6667H88.4666V75.4ZM0.266602 78.6667H3.53327V81.9333H0.266602V78.6667ZM6.79993 78.6667H10.0666V81.9333H6.79993V78.6667ZM10.0666 78.6667H13.3333V81.9333H10.0666V78.6667ZM13.3333 78.6667H16.5999V81.9333H13.3333V78.6667ZM19.8666 78.6667H23.1333V81.9333H19.8666V78.6667ZM26.3999 78.6667H29.6666V81.9333H26.3999V78.6667ZM36.1999 78.6667H39.4666V81.9333H36.1999V78.6667ZM49.2666 78.6667H52.5333V81.9333H49.2666V78.6667ZM55.7999 78.6667H59.0666V81.9333H55.7999V78.6667ZM62.3333 78.6667H65.5999V81.9333H62.3333V78.6667ZM65.5999 78.6667H68.8666V81.9333H65.5999V78.6667ZM68.8666 78.6667H72.1333V81.9333H68.8666V78.6667ZM72.1333 78.6667H75.3999V81.9333H72.1333V78.6667ZM75.3999 78.6667H78.6666V81.9333H75.3999V78.6667ZM78.6666 78.6667H81.9333V81.9333H78.6666V78.6667ZM91.7333 78.6667H94.9999V81.9333H91.7333V78.6667ZM0.266602 81.9333H3.53327V85.2H0.266602V81.9333ZM6.79993 81.9333H10.0666V85.2H6.79993V81.9333ZM10.0666 81.9333H13.3333V85.2H10.0666V81.9333ZM13.3333 81.9333H16.5999V85.2H13.3333V81.9333ZM19.8666 81.9333H23.1333V85.2H19.8666V81.9333ZM26.3999 81.9333H29.6666V85.2H26.3999V81.9333ZM29.6666 81.9333H32.9333V85.2H29.6666V81.9333ZM36.1999 81.9333H39.4666V85.2H36.1999V81.9333ZM45.9999 81.9333H49.2666V85.2H45.9999V81.9333ZM59.0666 81.9333H62.3333V85.2H59.0666V81.9333ZM75.3999 81.9333H78.6666V85.2H75.3999V81.9333ZM81.9333 81.9333H85.1999V85.2H81.9333V81.9333ZM85.1999 81.9333H88.4666V85.2H85.1999V81.9333ZM88.4666 81.9333H91.7333V85.2H88.4666V81.9333ZM0.266602 85.2H3.53327V88.4667H0.266602V85.2ZM6.79993 85.2H10.0666V88.4667H6.79993V85.2ZM10.0666 85.2H13.3333V88.4667H10.0666V85.2ZM13.3333 85.2H16.5999V88.4667H13.3333V85.2ZM19.8666 85.2H23.1333V88.4667H19.8666V85.2ZM39.4666 85.2H42.7333V88.4667H39.4666V85.2ZM49.2666 85.2H52.5333V88.4667H49.2666V85.2ZM55.7999 85.2H59.0666V88.4667H55.7999V85.2ZM65.5999 85.2H68.8666V88.4667H65.5999V85.2ZM68.8666 85.2H72.1333V88.4667H68.8666V85.2ZM75.3999 85.2H78.6666V88.4667H75.3999V85.2ZM78.6666 85.2H81.9333V88.4667H78.6666V85.2ZM85.1999 85.2H88.4666V88.4667H85.1999V85.2ZM88.4666 85.2H91.7333V88.4667H88.4666V85.2ZM91.7333 85.2H94.9999V88.4667H91.7333V85.2ZM0.266602 88.4667H3.53327V91.7333H0.266602V88.4667ZM19.8666 88.4667H23.1333V91.7333H19.8666V88.4667ZM26.3999 88.4667H29.6666V91.7333H26.3999V88.4667ZM29.6666 88.4667H32.9333V91.7333H29.6666V88.4667ZM36.1999 88.4667H39.4666V91.7333H36.1999V88.4667ZM52.5333 88.4667H55.7999V91.7333H52.5333V88.4667ZM68.8666 88.4667H72.1333V91.7333H68.8666V88.4667ZM78.6666 88.4667H81.9333V91.7333H78.6666V88.4667ZM85.1999 88.4667H88.4666V91.7333H85.1999V88.4667ZM91.7333 88.4667H94.9999V91.7333H91.7333V88.4667ZM0.266602 91.7333H3.53327V95H0.266602V91.7333ZM3.53327 91.7333H6.79993V95H3.53327V91.7333ZM6.79993 91.7333H10.0666V95H6.79993V91.7333ZM10.0666 91.7333H13.3333V95H10.0666V91.7333ZM13.3333 91.7333H16.5999V95H13.3333V91.7333ZM16.5999 91.7333H19.8666V95H16.5999V91.7333ZM19.8666 91.7333H23.1333V95H19.8666V91.7333ZM29.6666 91.7333H32.9333V95H29.6666V91.7333ZM36.1999 91.7333H39.4666V95H36.1999V91.7333ZM39.4666 91.7333H42.7333V95H39.4666V91.7333ZM42.7333 91.7333H45.9999V95H42.7333V91.7333ZM49.2666 91.7333H52.5333V95H49.2666V91.7333ZM52.5333 91.7333H55.7999V95H52.5333V91.7333ZM65.5999 91.7333H68.8666V95H65.5999V91.7333ZM75.3999 91.7333H78.6666V95H75.3999V91.7333ZM78.6666 91.7333H81.9333V95H78.6666V91.7333Z"
            fill="white"
          />
        </svg>
      </QrCode>

      <ButtonsContainer>
        <SubmitButton
          onClick={() => {
            navigate("/waiting");
          }}
        >
          Продолжить
        </SubmitButton>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <BackButton>Вернуться назад</BackButton>
        </NavLink>
      </ButtonsContainer>
    </Container>
  );
};

export default SendForm;
