import { observer } from "mobx-react-lite";
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
import globalStore from "../../stores/global-store";
import formatDate from "../../utils/formatDate";

const HistoryPage = observer(() => {
  const { userStore } = globalStore;
  const { user } = userStore;

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
        {user?.orders
          .slice()
          .reverse()
          .map((order) => {
            const orderDate = new Date(order.created_at);
            const localDate = new Date(
              orderDate.getTime() - orderDate.getTimezoneOffset() * 60000
            );
            return (
              <TableRow key={order.id}>
                <Number>{order.id}</Number>
                <DateTime>
                  {formatDate(localDate)}
                  <div>{localDate.toLocaleTimeString().slice(0, -3)}</div>
                </DateTime>
                <Status>{order.completed ? "Выполнено" : "Ожидание"}</Status>
                <ChangeContainer>
                  {/*    <ChangeIcon>
                <SvgUsdt />
              </ChangeIcon> */}
                  {order.sell_amount} {order.sell_currency}
                </ChangeContainer>
                <ChangeContainer>
                  {/*  <ChangeIcon>
                <SvgSber />
              </ChangeIcon> */}
                  {order.receive_amount} {order.receive_currency}
                </ChangeContainer>
              </TableRow>
            );
          })}
      </TableContainer>
    </>
  );
});

export default HistoryPage;
