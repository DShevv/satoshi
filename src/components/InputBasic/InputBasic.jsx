import { Container, Input, InputContainer, Title } from "./InputBasic.style";

const InputBasic = ({
  type,
  name,
  title,
  placeholder,
  className,
  ...other
}) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input
          {...other}
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  );
};

export default InputBasic;
