import styled from "styled-components";

export const Container = styled.label`
  width: 100%;
`;
export const Title = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 137%;

  color: ${(props) => props.theme.colors.white};
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;
  padding: 18px;
  border: 1px solid ${(props) => props.theme.colors.grayEmpty};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  flex: 1 1 auto;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.grayEmpty};
  }

  @media (max-width: 1080px) {
    font-size: 16px;
    min-width: 0px;
  }
`;

export const Hint = styled.div`
  flex: 0 0 auto;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    font-size: 11px;
  }
`;
