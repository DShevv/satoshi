const validateUpdateSettings = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Введите e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный e-mail";
  }

  if (!values.LastName) {
    errors.LastName = "Введите фамилию";
  } else if (values.LastName.length < 2) {
    errors.LastName = "Минимальная длинна 2 символа";
  }

  if (!values.FirstName) {
    errors.FirstName = "Введите имя";
  } else if (values.FirstName.length < 2) {
    errors.FirstName = "Минимальная длинна 2 символа";
  }

  if (!values.FatherName) {
    errors.FatherName = "Введите отчество";
  } else if (values.FatherName.length < 3) {
    errors.FatherName = "Минимальная длинна 3 символа";
  }

  if (values.oldPassword.length < 3 && values.oldPassword.length > 0) {
    errors.oldPassword = "Короткий пароль";
  }

  if (
    values.oldPassword.length > 0 ||
    values.password.length > 0 ||
    values.confirmPassword.length > 0
  ) {
    if (values.password.length === 0) {
      errors.password = "Введите новый пароль";
    } else if (values.password.length < 3) {
      errors.password = "Минимальная длинна 3 символа";
    }

    if (values.oldPassword.length === 0) {
      errors.oldPassword = "Введите старый пароль";
    } else if (values.oldPassword.length < 3) {
      errors.oldPassword = "Минимальная длинна 3 символа";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Пароли не совпадают";
    }
  }

  /*   if (values.password.length < 3 && values.password.length > 0) {
      errors.password = "Короткий пароль";
    } else if (values.oldPassword.length < 3) {
      errors.oldPassword = "Введите старый пароль";
    } else if (
      values.password.length > 0 &&
      values.password !== values.confirmPassword
    ) {
      errors.confirmPassword = "Пароли не совпадают";
    } */

  return errors;
};

export default validateUpdateSettings;
