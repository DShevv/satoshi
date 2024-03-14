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
  Title,
  UnderText,
} from "./RegisterForm.style";
import { Formik, Form } from "formik";
import InputIcon from "../InputIcon/InputIcon";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";
import { SvgClose, SvgEmail, SvgPassword } from "../../assets/icons/svgs";

const RegisterForm = ({ ...other }) => {
  const ref = useRef(null);

  useEffect(() => {
    document.body.className = "scrollLock";

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <BackgroundWrapper ref={ref} {...other}>
      <Modal>
        <Close
          onClick={() => {
            ref.current.classList.remove("active");
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
                <SubmitButton type={"submit"}>Войти</SubmitButton>
              </ButtonContainer>
              <UnderText>
                Уже зарегистрированы? <Link to={"/register"}>Войти</Link>
              </UnderText>
            </StyledForm>
          </Form>
        </Formik>
      </Modal>
    </BackgroundWrapper>
  );
};

export default RegisterForm;
