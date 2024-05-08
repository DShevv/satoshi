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

export const RegisterForm = observer(({ onClose, ...other }) => {
  const { authStore } = globalStore;
  const { register } = authStore;

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    document.body.className = "";
    onClose();
  });

  useEffect(() => {
    document.body.className = "scrollLock";

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <BackgroundWrapper {...other}>
      <Modal ref={ref}>
        <Close
          onClick={() => {
            onClose();
            document.body.className = "";
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
          onSubmit={(values) => {
            console.log(values);
            register({ email: values.email, password: values.password });
            onClose();
          }}
        >
          <Form>
            <StyledForm>
              <InputIcon
                type={"email"}
                placeholder={"Введите E-mail"}
                name={"email"}
                icon={<SvgEmail />}
              />
              <InputIcon
                type={"password"}
                placeholder={"Пароль"}
                name={"password"}
                icon={<SvgPassword />}
              />
              <InputIcon
                type={"password"}
                placeholder={"Подтверждение пароля"}
                name={"passwordConfirm"}
                icon={<SvgPassword />}
              />
              <Hint>
                Нажимая кнопку зарегистрироваться, я подтверждаю, что
                ознакомился и принимаю политику обработки{" "}
                <HintLink to={"/"}>персональных данных</HintLink>
              </Hint>
              <ButtonContainer>
                <StyledSubmit type={"submit"}>Войти</StyledSubmit>
              </ButtonContainer>
              <UnderText>
                Уже зарегистрированы? <Link to={"?auth=login"}>Войти</Link>
              </UnderText>
            </StyledForm>
          </Form>
        </Formik>
      </Modal>
    </BackgroundWrapper>
  );
});
