import { useEffect, useRef, useState } from "react";
import {
  BackgroundWrapper,
  ButtonContainer,
  Close,
  Hint,
  Image,
  Link,
  Modal,
  RecoveryContainer,
  RecoveryText,
  StyledForm,
  StyledSubmit,
  Title,
  UnderText,
} from "./RecoveryForm.style";
import { Formik, Form } from "formik";
import InputIcon from "../InputIcon/InputIcon";
import { SvgClose, SvgEmail } from "../../assets/icons/svgs";
import paperPlane from "../../assets/images/paper-plane 1.png";

const RecoveryForm = ({ onClose, ...other }) => {
  const ref = useRef(null);
  const refOk = useRef(null);
  const [isOk, setIsOk] = useState(false);

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
      {isOk ? (
        <Modal ref={ref} onClick={(e) => e.stopPropagation()}>
          <Close
            onClick={() => {
              onClose();
              document.body.classList.remove("scrollLock");
            }}
          >
            <SvgClose />
          </Close>

          <RecoveryContainer>
            <Image src={paperPlane} />
            <RecoveryText>
              Пароль сгенерирован и успешно отправлен на указанную вами
              электронную почту
            </RecoveryText>
            <ButtonContainer>
              <StyledSubmit
                onClick={() => onClose()}
                style={{ maxWidth: "176px" }}
                type={"submit"}
              >
                Закрыть
              </StyledSubmit>
            </ButtonContainer>
          </RecoveryContainer>
        </Modal>
      ) : (
        <Modal ref={refOk} onClick={(e) => e.stopPropagation()}>
          <Close
            onClick={() => {
              onClose();
              document.body.classList.remove("scrollLock");
            }}
          >
            <SvgClose />
          </Close>
          <Title>Восстановление пароля</Title>
          <Hint>
            Введите e-mail, указанный при регистрации, чтобы мы смогли выслать
            инструкции по восстановлению
          </Hint>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              setIsOk(true);
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

                <ButtonContainer>
                  <StyledSubmit type={"submit"}>Сбросить пароль</StyledSubmit>
                </ButtonContainer>
                <UnderText>
                  Уже зарегистрированы? <Link to={"/register"}>Войти</Link>
                </UnderText>
              </StyledForm>
            </Form>
          </Formik>
        </Modal>
      )}
    </BackgroundWrapper>
  );
};

export default RecoveryForm;
