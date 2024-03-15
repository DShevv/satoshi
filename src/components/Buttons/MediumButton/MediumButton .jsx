import { StyledSubmit } from "./MediumButton.style";

const MediumButton = ({ children, ...other }) => {
  return <StyledSubmit {...other}>{children}</StyledSubmit>;
};

export default MediumButton;
