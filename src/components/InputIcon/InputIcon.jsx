import {
  Container,
  Hint,
  Icon,
  Input,
  InputContainer,
} from "./InputIcon.style";

const InputIcon = ({ type, hint, icon, placeholder, name, ...other }) => {
  return (
    <Container {...other}>
      <InputContainer>
        <Icon>{icon}</Icon>
        <Input
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
        />
        {hint && <Hint>{hint}</Hint>}
      </InputContainer>
    </Container>
  );
};

export default InputIcon;
