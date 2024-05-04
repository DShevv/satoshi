import {
  Container,
  Hint,
  InfoContainer,
  Input,
  InputContainer,
  Title,
} from "./InputField.style";

const InputField = ({
  type,
  title,
  hint,
  min,
  max,
  info,
  placeholder,
  disabled,
  ...other
}) => {
  return (
    <Container {...other}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Input
          type={type ? type : "text"}
          placeholder={placeholder}
          disabled={disabled}
        />
        {hint && <Hint>{hint}</Hint>}
      </InputContainer>
      {info || min || max ? (
        <InfoContainer>
          <div>
            {min && <span>Min: {min}</span>} {max && <span>Max: {max}</span>}
          </div>
          {info && <div>{info}</div>}
        </InfoContainer>
      ) : (
        ""
      )}
    </Container>
  );
};

export default InputField;
