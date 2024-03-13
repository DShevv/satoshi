import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 90px;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const ChangeInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTitle = styled.div`
  margin-top: 13px;
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemSummary = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled.div`
  transform: rotate(90deg);
  height: fit-content;
`;

export const InfoCourse = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
`;
