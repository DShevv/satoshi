import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 62px;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const ChangeInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1080px) {
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const InfoImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  object-position: center;
`;

export const ItemTitle = styled.div`
  margin-top: 13px;
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 15px;
  }
`;

export const ItemSubtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemSummary = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 1080px) {
    font-size: 15px;
  }
`;

export const Icon = styled.div`
  transform: rotate(90deg);
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: -4px;
`;

export const InfoCourse = styled.div`
  margin-top: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1080px) {
    margin-top: 12px;
    font-size: 13px;
  }
`;
