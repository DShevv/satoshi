const validateSell = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Введите e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный e-mail";
  }

  if (!values.wallet) {
    errors.wallet = "Введите номер кошелька";
  } else if (!/T[A-Za-z1-9]{33}/.test(values.wallet)) {
    errors.wallet = "Неверный номер кошелька";
  }

  if (!values.cardNumber) {
    errors.cardNumber = "Введите номер карты";
  } else if (values.cardNumber.length < 16) {
    errors.cardNumber = "Слишком короткий номер карты";
  }

  if (values.isSbp) {
    if (!values.phone) {
      errors.phone = "Введите номер телефона";
    } else if (values.phone.length < 11) {
      errors.phone = "Слишком короткий номер телефона";
    }
  } else {
    if (!values.cardNumber) {
      errors.cardNumber = "Введите номер карты";
    } else if (values.cardNumber.length < 16) {
      errors.cardNumber = "Слишком короткий номер карты";
    }
  }
  return errors;
};

export default validateSell;
