import { Form } from "formik";
import styled from "styled-components";

export const Container = styled(Form)`
  margin: 0 auto;

  margin-top: 40px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 32px 68px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

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
  margin-top: 8px;

  @media (max-width: 1080px) {
    margin-top: 0;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 476px;
  left: -47px;
  border-radius: 10px;
  padding: 17px 48px;

  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 1080px) {
    margin-top: 0;
    width: calc(100% + 28px);
    left: -14px;
    padding: 28px 13px 32px 13px;
  }
`;

export const FormLine = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
