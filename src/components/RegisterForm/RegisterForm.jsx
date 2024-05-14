import { useEffect, useRef } from "react";
import {
  BackgroundWrapper,
  ButtonContainer,
  Close,
  Hint,
  HintLink,
  Link,
  Modal,
  StyledForm,
  StyledSubmit,
  Title,
  UnderText,
} from "./RegisterForm.style";
import { Formik, Form } from "formik";
import InputIcon from "../InputIcon/InputIcon";
import { SvgClose, SvgEmail, SvgPassword } from "../../assets/icons/svgs";
import useOutsideClick from "../../hooks/useOutsideClick";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/global-store";
import validateRegister from "../../utils/validateRegister";

export const RegisterForm = observer(({ onClose, ...other }) => {
  const { authStore } = globalStore;
  const { register } = authStore;

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    document.body.classList.remove("scrollLock");
    onClose();
  });

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
    <BackgroundWrapper {...other}>
      <Modal ref={ref}>
        <Close
          onClick={() => {
            onClose();
            document.body.classList.remove("scrollLock");
          }}
        >
          <SvgClose />
        </Close>
        <Title>Регистрация пользователя</Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validate={validateRegister}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { setErrors }) => {
            console.log(values);
            const res = await register({
              email: values.email,
              password: values.password,
            });
            console.log("res", res);

            if (res.status === 200) {
              onClose();
              document.body.classList.remove("scrollLock");
            } else {
              console.log(res.response.data.detail);
              setErrors({ email: "Указанный e-mail зарегистрирован" });
            }
          }}
        >
          {(formik) => {
            const { errors } = formik;

            return (
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
                    style={{ marginTop: "10px" }}
                    type={"password"}
                    placeholder={"Пароль"}
                    name={"password"}
                    icon={<SvgPassword />}
                    isError={errors.password ? 1 : 0}
                    errorText={errors.password ? errors.password : ""}
                  />
                  <InputIcon
                    style={{ marginTop: "10px" }}
                    type={"password"}
                    placeholder={"Подтверждение пароля"}
                    name={"passwordConfirm"}
                    icon={<SvgPassword />}
                    isError={errors.passwordConfirm ? 1 : 0}
                    errorText={
                      errors.passwordConfirm ? errors.passwordConfirm : ""
                    }
                  />
                  <Hint>
                    Нажимая кнопку зарегистрироваться, я подтверждаю, что
                    ознакомился и принимаю политику обработки{" "}
                    <HintLink to={"/"}>персональных данных</HintLink>
                  </Hint>
                  <ButtonContainer>
                    <StyledSubmit type={"submit"}>
                      Зарегистрироваться
                    </StyledSubmit>
                  </ButtonContainer>
                  <UnderText>
                    Уже зарегистрированы? <Link to={"?auth=login"}>Войти</Link>
                  </UnderText>
                </StyledForm>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </BackgroundWrapper>
  );
});
