import { StyledButton } from "./Button.style";

const Button = ({ children, ...other }) => {
  return <StyledButton {...other}>{children}</StyledButton>;
};

export default Button;
