import { Container, StyledLink } from "./RegisterButton.style";

const RegisterButton = ({ to, children, onClick, ...other }) => {
  return (
    <StyledLink to={to} {...other}>
      <Container onClick={onClick}>{children}</Container>
    </StyledLink>
  );
};

export default RegisterButton;
