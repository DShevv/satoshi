import {
  Container,
  Hint,
  InfoContainer,
  Input,
  InputContainer,
  Title,
} from "./InputField.style";

const InputField = ({ title, hint, min, max, info, ...other }) => {
  return (
    <Container {...other}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input type="text" />
        {hint && <Hint>{hint}</Hint>}
      </InputContainer>
      <InfoContainer>
        <div>
          {min && <span>Min: {min}</span>} {max && <span>Max: {max}</span>}
        </div>
        {info && <div>{info}</div>}
      </InfoContainer>
    </Container>
  );
};

export default InputField;
