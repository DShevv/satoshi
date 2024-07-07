import { useRef } from "react";
import { Container, Input, InputContainer, Title } from "./InputTerm.style";

const InputTerm = ({ type, title, className, name, isError, ...other }) => {
  const refYear = useRef(null);
  const refMonth = useRef(null);

  const onInput = (e) => {
    if (e.target.value.length !== 0 && !e.target.value.match(/^\d+$/)) {
      e.target.value = e.target.value.slice(0, -1);
    }

    const number = Number(e.target.value);

    if (number < 10 && number > 1) {
      e.target.value = `0${number}`;
    }

    if (number > 12) {
      e.target.value = `1`;
    }

    if (e.target.value.length === 2) {
      refYear.current.focus();
    }
  };

  const onDelete = (e) => {
    if (e.target.value.length === 0 && e.keyCode == 8) {
      refMonth.current.value = refMonth.current.value.slice(0, -1);
      refMonth.current.focus();
    }
  };

  const onYearInput = (e) => {
    if (e.target.value.length !== 0 && !e.target.value.match(/^\d+$/)) {
      e.target.value = e.target.value.slice(0, -1);
    }

    const number = Number(e.target.value);

    if (number < 2) {
      e.target.value = "";
      return;
    }

    if (number < 24 && number > 19) {
      e.target.value = `2`;
    }
  };

  return (
    <Container className={className}>
      {title && <Title $error={isError}>{title}</Title>}
      <InputContainer $error={isError}>
        <Input
          innerRef={refMonth}
          {...other}
          name={`${name}Month`}
          type={type ? type : "text"}
          placeholder={"00"}
          maxLength={2}
          onInput={onInput}
        />
        /
        <Input
          innerRef={refYear}
          {...other}
          name={`${name}Year`}
          type={type ? type : "text"}
          placeholder={"00"}
          maxLength={2}
          onKeyDown={onDelete}
          onInput={onYearInput}
        />
      </InputContainer>
    </Container>
  );
};

export default InputTerm;
