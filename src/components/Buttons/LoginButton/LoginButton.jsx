import { Container } from "./LoginButton.style";

const LoginButton = ({ children, onClick, ...other }) => {
  return (
    <Container onClick={onClick} {...other}>
      {children}
    </Container>
  );
};

export default LoginButton;
