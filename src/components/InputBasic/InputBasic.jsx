import { Container, Input, InputContainer, Title } from "./InputBasic.style";

const InputBasic = ({
  type,
  name,
  title,
  placeholder,
  className,
  isError,
  ...other
}) => {
  return (
    <Container className={className}>
      {title && <Title $error={isError}>{title}</Title>}
      <InputContainer $error={isError}>
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
