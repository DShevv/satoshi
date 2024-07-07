const validateSell = (values) => {
  const errors = {};

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

  if (!values.cardNumber) {
    errors.cardNumber = "Введите номер карты";
  } else if (values.cardNumber.length < 16) {
    errors.cardNumber = "Слишком короткий номер карты";
  }

  if (!values.termYear) {
    errors.termYear = "Введите срок действия";
  }
  if (!values.termMonth) {
    errors.termMonth = "Введите номер карты";
  }
  if (!values.cvc) {
    errors.cvc = "Введите код безопасности";
  } else if (values.cvc.length < 3) {
    errors.cvc = "Неверный CVV/CVC";
  }

  return errors;
};

export default validateSell;
