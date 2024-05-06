import { useState } from "react";
import { SvgMoon, SvgSun } from "../../assets/icons/svgs";
import { Container, Toggle } from "./ThemeSwitcher.style";

const ThemeSwitcher = ({ className, ...other }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container
      className={isActive ? `${className} active` : className}
      onClick={handleClick}
    >
      <Toggle />
      <SvgSun />
      <SvgMoon />
    </Container>
  );
};

export default ThemeSwitcher;
