const validateRegister = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный e-mail";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 3) {
    errors.password = "Too short password";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Passwords doesn't match";
  }

  return errors;
};

export default validateRegister;
