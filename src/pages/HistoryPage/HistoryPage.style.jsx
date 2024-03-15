import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 21px;
  margin-top: 50px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};
`;

export const TableHeader = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 175px 160px 148px 196px 196px;
  border-radius: 6px;
  padding: 14px 19px;
  background-color: ${(props) => props.theme.colors.grayEmpty};
`;

export const HeaderCell = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
`;

export const TableRow = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 175px 160px 148px 196px 196px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayEmpty};
`;

export const Number = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const DateTime = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};

  div {
    font-size: 12px;
    line-height: 150%;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Status = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const ChangeContainer = styled.div`
  display: flex;
  height: 21px;
  align-items: center;
  gap: 7px;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const ChangeIcon = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;

  svg {
    width: 20px;
    height: 20px;
  }
`;
