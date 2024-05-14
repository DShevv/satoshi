import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

export const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(18px);
  background: rgba(182, 182, 182, 0.15);
  z-index: -1;
  transition: all 0.3s ease;
  opacity: 0;

  &.active {
    opacity: 1;
    z-index: 200;
  }
`;

export const Modal = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 25px;
  width: 515px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 48px 64px 48px 64px;

  @media (max-width: 1080px) {
    max-width: 527px;
    width: calc(100% - 30px);
    padding: 25px 25px 25px 25px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 1080px) {
    font-size: 22px;
    max-width: 90%;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (max-width: 1080px) {
    gap: 42px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 1080px) {
  }
`;

export const UnderText = styled.div`
  margin-top: 2px;
  padding-top: 36px;
  border-top: solid 2px ${(props) => props.theme.colors.grayEmpty};
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  @media (max-width: 1080px) {
    margin-top: 10px;
    padding-top: 20px;
    font-size: 14px;
  }
`;

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
`;

export const Hint = styled.div`
  margin-bottom: 26px;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-bottom: 30px;
    font-size: 12px;
  }
`;

export const RecoveryText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  max-width: 375px;
  margin-top: 27px;
  margin-bottom: 26px;
`;

export const RecoveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 113px;
  height: 113px;
`;

export const StyledSubmit = styled(SubmitButton)`
  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;
