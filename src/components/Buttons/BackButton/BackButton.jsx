import { StyledSubmit } from "./BackButton.style";

const BackButton = ({ children, ...other }) => {
  return <StyledSubmit {...other}>{children}</StyledSubmit>;
};

export default BackButton;
