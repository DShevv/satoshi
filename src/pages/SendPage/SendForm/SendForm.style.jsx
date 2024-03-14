import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  margin-top: 46px;
  margin-bottom: 107px;
  border-radius: 25px;
  width: 518px;
  padding: 52px 68px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  background-color: ${(props) => props.theme.colors.blackGray};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.div`
  margin-bottom: 13px;
  font-weight: 600;
  font-size: 21px;
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QrCode = styled(NavLink)`
  width: 95px;
  height: 95px;
  margin: 0 auto;
  margin-top: 13px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
