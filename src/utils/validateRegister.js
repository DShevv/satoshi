const validateRegister = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Введите e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный e-mail";
  }

  if (!values.password) {
    errors.password = "Введите пароль";
  } else if (values.password.length < 3) {
    errors.password = "Короткий пароль";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Повторите пароль";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Пароли не совпадают";
  }

  return errors;
};

export default validateRegister;
