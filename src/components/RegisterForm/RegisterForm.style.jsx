import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(18px);
  background: rgba(182, 182, 182, 0.15);
  padding-top: 200px;
  padding-bottom: 200px;
  z-index: 100;
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
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 37px;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
`;

export const UnderText = styled.div`
  margin-top: 58px;
  padding-top: 37px;
  border-top: solid 2px ${(props) => props.theme.colors.grayEmpty};
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
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
  max-width: 378px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
`;

export const HintLink = styled(NavLink)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
