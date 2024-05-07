import { Form } from "formik";
import styled from "styled-components";

export const Container = styled(Form)`
  margin: 0 auto;

  margin-top: 46px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 52px 68px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  background-color: ${(props) => props.theme.colors.blackGray};

  @media (max-width: 1080px) {
    margin-top: 40px;
    margin-bottom: 70px;
    width: 100%;
    max-width: 518px;
    padding: 50px 21px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2px;

  font-weight: 700;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 1080px) {
    margin-top: 0;
  }
`;
