import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

export const BackgroundWrapper = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(18px);
  background: rgba(182, 182, 182, 0.15);
  padding-top: 200px;
  padding-bottom: 200px;
  z-index: 200;
  overflow-y: auto;

  &.active {
    display: block;
  }
`;

export const Modal = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 25px;
  width: 527px;
  background-color: ${(props) => props.theme.colors.blackGray};
  padding: 64px 46px 43px 46px;

  @media (max-width: 1080px) {
    max-width: 527px;
    width: calc(100% - 30px);
    padding: 57px 25px 36px 25px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 27px;

  @media (max-width: 1080px) {
    font-size: 22px;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media (max-width: 1080px) {
    gap: 25px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  @media (max-width: 1080px) {
    margin-top: 5px;
  }
`;

export const UnderText = styled.div`
  margin-top: 25px;
  padding-top: 37px;
  border-top: solid 2px ${(props) => props.theme.colors.grayEmpty};
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-top: 23px;
    padding-top: 27px;
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
  right: 14px;
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
  margin-top: 34px;
  margin-bottom: 43px;
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
    max-width: 223px;
    font-size: 16px;
    padding-right: 56px;
    padding-left: 56px;
  }
`;
