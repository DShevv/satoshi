import { StyledWrapper } from "./Wrapper.style";

function Wrapper({ children, ...other }) {
  return <StyledWrapper {...other}>{children}</StyledWrapper>;
}

export default Wrapper;
