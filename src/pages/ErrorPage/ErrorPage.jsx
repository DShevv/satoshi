import React from "react";
import {
  ButtonsContainer,
  Caption,
  Container,
  Subtitle,
  Title,
} from "./ErrorPage.style";
import SubmitButton from "../../components/Buttons/SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Caption>
        <Title>404</Title>
        <Subtitle>Такой страницы нет</Subtitle>
        <ButtonsContainer>
          <SubmitButton
            onClick={() => {
              navigate("/");
            }}
          >
            На главную
          </SubmitButton>
        </ButtonsContainer>
      </Caption>
    </Container>
  );
};

export default ErrorPage;
