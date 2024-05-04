import { Container, Input, InputContainer, Title } from "./InputCvv.style";

const InputCvv = ({ type, title, className, name, ...other }) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputContainer>
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
