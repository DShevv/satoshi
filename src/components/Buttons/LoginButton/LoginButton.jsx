import { Container, StyledLink } from "./LoginButton.style";

const LoginButton = ({ to, children, onClick, ...other }) => {
  return (
    <StyledLink to={to} {...other}>
      <Container onClick={onClick}>{children}</Container>
    </StyledLink>
  );
};

export default LoginButton;
