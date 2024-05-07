import { useEffect, useRef } from "react";
import {
  BackgroundWrapper,
  ButtonContainer,
  Close,
  Link,
  Modal,
  StyledForm,
  Title,
  UnderText,
} from "./LoginForm.style";
import { Formik, Form } from "formik";
import InputIcon from "../InputIcon/InputIcon";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";
import { SvgClose, SvgEmail, SvgPassword } from "../../assets/icons/svgs";

const LoginForm = ({ onClose, ...other }) => {
  const ref = useRef(null);

  useEffect(() => {
    document.body.className = "scrollLock";

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <BackgroundWrapper {...other} onClick={() => onClose()}>
      <Modal ref={ref} onClick={(e) => e.stopPropagation()}>
        <Close
          onClick={() => {
            document.body.className = "";
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
          }}
        >
          <Form>
            <StyledForm>
              <InputIcon
                type={"email"}
                placeholder={"Введите E-mail"}
                name={"Email"}
                icon={<SvgEmail />}
              />
              <InputIcon
                type={"password"}
                hint={"Восстановить пароль"}
                placeholder={"Пароль"}
                name={"Password"}
                icon={<SvgPassword />}
              />
              <ButtonContainer>
                <SubmitButton type={"submit"}>Войти</SubmitButton>
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
};

export default LoginForm;
