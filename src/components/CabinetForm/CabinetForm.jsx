import { observer } from "mobx-react-lite";
import MediumButton from "../Buttons/MediumButton/MediumButton ";
import InputBasic from "../InputBasic/InputBasic";
import {
  ButtonsContainer,
  Container,
  HiTitle,
  SubTitle,
  Title,
} from "./CabinetForm.style";
import { Formik, Form } from "formik";
import globalStore from "../../stores/global-store";
import { useEffect } from "react";
import validateUpdateSettings from "../../utils/validateUpdateSettings";

export const CabinetForm = observer(() => {
  const { userStore } = globalStore;
  const { user, getInfo, update, logout } = userStore;

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        oldPassword: "",
        password: "",
        confirmPassword: "",
        LastName: user.lastName ? user.lastName : "",
        FirstName: user.name ? user.name : "",
        FatherName: user.patronymic ? user.patronymic : "",
      }}
      onSubmit={async (values, { errors, setErrors, setValues }) => {
        console.log(values);

        const res = await update({
          first_name: values.FirstName,
          last_name: values.LastName,
          patronymic: values.FatherName,
          old_password:
            values.oldPassword.length === 0 ? null : values.oldPassword,
          new_password: values.password.length === 0 ? null : values.password,
        });

        if (res?.response?.status === 401 && values.oldPassword.length > 2) {
          setErrors({ ...errors, oldPassword: "Неверный пароль" });
        } else {
          setValues({
            ...values,
            oldPassword: "",
            password: "",
            confirmPassword: "",
          });
        }
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={validateUpdateSettings}
    >
      {(formik) => {
        const { errors, resetForm } = formik;

        const handleCancel = () => {
          resetForm();
        };

        return (
          <Form>
            <Container>
              <Title>Личные данные</Title>
              <InputBasic
                type={"text"}
                name={"LastName"}
                title={"Фамилия"}
                isError={errors.LastName ? 1 : 0}
                errorText={errors?.LastName}
              />
              <InputBasic
                type={"text"}
                name={"FirstName"}
                title={"Имя"}
                isError={errors.FirstName ? 1 : 0}
                errorText={errors?.FirstName}
              />
              <InputBasic
                type={"text"}
                name={"FatherName"}
                title={"Отчество"}
                isError={errors.FatherName ? 1 : 0}
                errorText={errors?.FatherName}
              />
              <HiTitle>Защита данных</HiTitle>
              <InputBasic
                type={"email"}
                name={"email"}
                title={"E-mail"}
                disabled
              />
              <SubTitle>Изменение пароля</SubTitle>
              <InputBasic
                type={"password"}
                name={"oldPassword"}
                title={"Старый пароль"}
                isError={errors.oldPassword ? 1 : 0}
                errorText={errors?.oldPassword}
              />
              <InputBasic
                type={"password"}
                name={"password"}
                title={"Пароль"}
                isError={errors.password ? 1 : 0}
                errorText={errors?.password}
              />
              <InputBasic
                type={"password"}
                name={"confirmPassword"}
                title={"Повторите пароль"}
                isError={errors.confirmPassword ? 1 : 0}
                errorText={errors?.confirmPassword}
              />
              <ButtonsContainer>
                <MediumButton type="submit">Сохранить</MediumButton>
                <MediumButton
                  type="button"
                  className="back"
                  onClick={handleCancel}
                >
                  Отмена
                </MediumButton>
              </ButtonsContainer>
              <ButtonsContainer>
                <MediumButton
                  type="button"
                  className="logout"
                  onClick={() => {
                    logout();
                  }}
                >
                  Выйти
                </MediumButton>
              </ButtonsContainer>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
});
