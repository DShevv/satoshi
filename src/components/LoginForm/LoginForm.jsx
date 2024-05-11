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
    <BackgroundWrapper
      {...other}
      onClick={() => {
        onClose();
        document.body.classList.remove("scrollLock");
      }}
    >
      <Modal ref={ref} onClick={(e) => e.stopPropagation()}>
        <Close
          onClick={() => {
            document.body.classList.remove("scrollLock");
            onClose();
          }}
        >
          <SvgClose />
        </Close>
        <Title>Авторизация</Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            login(values);
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
                hint={"Восстановить пароль"}
                placeholder={"Пароль"}
                name={"password"}
                icon={<SvgPassword />}
              />
              <ButtonContainer>
                <StyledSubmit type={"submit"}>Войти</StyledSubmit>
              </ButtonContainer>
              <UnderText>
                Впервые на сайте?{" "}
                <Link to={"?auth=register"}>Зарегистрируйтесь</Link>
              </UnderText>
            </StyledForm>
          </Form>
        </Formik>
      </Modal>
    </BackgroundWrapper>
  );
});
