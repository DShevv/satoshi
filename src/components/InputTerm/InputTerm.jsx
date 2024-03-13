import { Container, Input, InputContainer, Title } from "./InputTerm.style";

const InputTerm = ({ type, title, className, ...other }) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input
          {...other}
          type={type ? type : "text"}
          placeholder={"00"}
          maxLength={2}
        />
        /
        <Input
          {...other}
          type={type ? type : "text"}
          placeholder={"00"}
          maxLength={2}
        />
      </InputContainer>
    </Container>
  );
};

export default InputTerm;
