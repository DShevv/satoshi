import { Container, Input, InputContainer, Title } from "./InputCvv.style";

const InputCvv = ({ type, title, className, name, isError, ...other }) => {
  return (
    <Container className={className}>
      {title && <Title $error={isError}>{title}</Title>}
      <InputContainer $error={isError}>
        <Input
          {...other}
          name={name}
          type={type ? type : "text"}
          placeholder={"000"}
          maxLength={3}
        />
      </InputContainer>
    </Container>
  );
};

export default InputCvv;
