const validateOffline = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Введите e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный e-mail";
  }

  if (!values.tg) {
    errors.tg = "Введите Telegram";
  } else if (values.tg.length < 2) {
    errors.tg = "Короткий логин";
  }

  return errors;
};

export default validateOffline;
