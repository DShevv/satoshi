import { useState } from "react";
import { SvgCopy, SvgOk } from "../../assets/icons/svgs";
import {
  Container,
  CopyButton,
  Input,
  InputContainer,
  Title,
} from "./InputHash.style";

const InputHash = ({ value, title, className, ...other }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input {...other}>{value}</Input>
        <CopyButton onClick={handleClick}>
          {isCopied ? <SvgOk /> : <SvgCopy />}
        </CopyButton>
      </InputContainer>
    </Container>
  );
};

export default InputHash;
