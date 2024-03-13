import { Container, Input, InputContainer, Title } from "./InputBasic.style";

const InputBasic = ({ type, title, placeholder, className, ...other }) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input
          {...other}
          type={type ? type : "text"}
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  );
};

export default InputBasic;
