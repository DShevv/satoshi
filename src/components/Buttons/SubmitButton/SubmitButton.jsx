import { StyledSubmit } from "./SubmitButton.style";

const SubmitButton = ({ children, ...other }) => {
  return <StyledSubmit {...other}>{children}</StyledSubmit>;
};

export default SubmitButton;
