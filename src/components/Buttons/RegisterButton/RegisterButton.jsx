import { Container } from "./RegisterButton.style";

const RegisterButton = ({ children, onClick, ...other }) => {
  return (
    <Container {...other} onClick={onClick}>
      {children}
    </Container>
  );
};

export default RegisterButton;
