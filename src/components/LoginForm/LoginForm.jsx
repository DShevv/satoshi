import { useEffect, useRef } from "react";
import {
  BackgroundWrapper,
  ButtonContainer,
  Close,
  Link,
  Modal,
  StyledForm,
  StyledSubmit,
  Title,
  UnderText,
} from "./LoginForm.style";
import { Formik, Form } from "formik";
import InputIcon from "../InputIcon/InputIcon";
import { SvgClose, SvgEmail, SvgPassword } from "../../assets/icons/svgs";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";
import validateLogin from "../../utils/validateLogin";

export const LoginForm = observer(({ onClose, ...other }) => {
  const ref = useRef(null);
  const { authStore } = globalStore;
  const { login } = authStore;

  useEffect(() => {
    if (other.className === "active") {
      document.body.className = "scrollLock";
    }
  }, [other.className]);

  useEffect(() => {
    if (other.className === "active") {
      document.body.className = "scrollLock";
    }
  }, []);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validateLogin}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, { setErrors, resetForm }) => {
        console.log(values);
        const res = await login(values);

        if (res) {
          console.log(res.response.data.detail);
        } else {
          onClose();
          resetForm();
          document.body.classList.remove("scrollLock");
        }
      }}
    >
      {(formik) => {
        const { errors, resetForm } = formik;

        return (
          <BackgroundWrapper
            {...other}
            onClick={() => {
              onClose();
              resetForm();
              document.body.classList.remove("scrollLock");
            }}
          >
            <Modal ref={ref} onClick={(e) => e.stopPropagation()}>
              <Close
                onClick={() => {
                  document.body.classList.remove("scrollLock");
                  onClose();
                  resetForm();
                }}
              >
                <SvgClose />
              </Close>
              <Title>Авторизация</Title>
              <Form>
                <StyledForm>
                  <InputIcon
                    type={"email"}
                    placeholder={"Введите E-mail"}
                    name={"email"}
                    icon={<SvgEmail />}
                    isError={errors.email ? 1 : 0}
                    errorText={errors.email ? errors.email : ""}
                  />
                  <InputIcon
                    type={"password"}
                    hint={"Восстановить пароль"}
                    placeholder={"Пароль"}
                    name={"password"}
                    icon={<SvgPassword />}
                    isError={errors.password ? 1 : 0}
                    errorText={errors.password ? errors.password : ""}
                  />
                  <ButtonContainer>
                    <StyledSubmit type={"submit"}>Войти</StyledSubmit>
                  </ButtonContainer>
                  <UnderText>
                    <Link to={"?auth=register"}>Регистрация</Link>
                  </UnderText>
                </StyledForm>
              </Form>
            </Modal>
          </BackgroundWrapper>
        );
      }}
    </Formik>
  );
});
