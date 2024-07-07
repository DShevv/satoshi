import {
  Container,
  Input,
  InputContainer,
  Title,
  Error,
} from "./InputBasic.style";

const InputBasic = ({
  type,
  name,
  title,
  placeholder,
  className,
  isError,
  errorText,
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
      {isError ? <Error>{errorText}</Error> : ""}
    </Container>
  );
};

export default InputBasic;
