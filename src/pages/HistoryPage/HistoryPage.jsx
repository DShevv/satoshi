import { SvgSber, SvgUsdt } from "../../assets/icons/svgs";
import {
  HeaderCell,
  TableHeader,
  TableRow,
  Title,
  Number,
  DateTime,
  Status,
  ChangeContainer,
  ChangeIcon,
  TableContainer,
} from "./HistoryPage.style";

const HistoryPage = () => {
  return (
    <>
      <Title>История заявок</Title>
      <TableContainer>
        <TableHeader>
          <HeaderCell>Номер заявки</HeaderCell>
          <HeaderCell>Дата</HeaderCell>
          <HeaderCell>Статус</HeaderCell>
          <HeaderCell>К обмену</HeaderCell>
          <HeaderCell>К получению</HeaderCell>
        </TableHeader>
        <TableRow>
          <Number>594780377474</Number>
          <DateTime>
            12.08.2022 <div>14:09</div>
          </DateTime>
          <Status>Закрыто</Status>
          <ChangeContainer>
            <ChangeIcon>
              <SvgUsdt />
            </ChangeIcon>
            190 USDTTRC
          </ChangeContainer>
          <ChangeContainer>
            <ChangeIcon>
              <SvgSber />
            </ChangeIcon>
            20 000 RUB
          </ChangeContainer>
        </TableRow>
        <TableRow>
          <Number>594780377474</Number>
          <DateTime>
            12.08.2022 <div>14:09</div>
          </DateTime>
          <Status>Закрыто</Status>
          <ChangeContainer>
            <ChangeIcon>
              <SvgUsdt />
            </ChangeIcon>
            190 USDTTRC
          </ChangeContainer>
          <ChangeContainer>
            <ChangeIcon>
              <SvgSber />
            </ChangeIcon>
            20 000 RUB
          </ChangeContainer>
        </TableRow>
        <TableRow>
          <Number>594780377474</Number>
          <DateTime>
            12.08.2022 <div>14:09</div>
          </DateTime>
          <Status>Закрыто</Status>
          <ChangeContainer>
            <ChangeIcon>
              <SvgUsdt />
            </ChangeIcon>
            190 USDTTRC
          </ChangeContainer>
          <ChangeContainer>
            <ChangeIcon>
              <SvgSber />
            </ChangeIcon>
            20 000 RUB
          </ChangeContainer>
        </TableRow>
      </TableContainer>
    </>
  );
};

export default HistoryPage;
