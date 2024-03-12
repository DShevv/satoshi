import { Container, Toggle } from "./Switcher.style";

const Switcher = ({ active, onChange, ...other }) => {
  return (
    <Container className={active ? "active" : ""} {...other} onClick={onChange}>
      <Toggle />
    </Container>
  );
};

export default Switcher;
