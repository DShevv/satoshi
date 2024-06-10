const validateExchange = (values) => {
  const errors = {};

  if (!values.from) {
    errors.from = "Заполните поле";
  } else if (values.from === 0) {
    errors.from = "Мин. значение 1";
  }

  if (!values.to) {
    errors.to = "Заполните поле";
  } else if (values.to === 0) {
    errors.to = "Мин. значение 1";
  }

  return errors;
};

export default validateExchange;
