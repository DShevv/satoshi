import {
  Container,
  Error,
  Hint,
  Icon,
  Input,
  InputContainer,
} from "./InputIcon.style";

const InputIcon = ({
  type,
  hint,
  icon,
  placeholder,
  name,
  isError,
  errorText,
  ...other
}) => {
  return (
    <Container {...other} $isError={isError}>
      <InputContainer>
        <Icon>{icon}</Icon>
        <Input
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
        />
        {hint && <Hint to="?auth=recovery">{hint}</Hint>}
      </InputContainer>
      {isError ? <Error>{errorText}</Error> : ""}
    </Container>
  );
};

export default InputIcon;
