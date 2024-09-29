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
            return (
              <TableRow key={order.id}>
                <Number>{order.uuid}</Number>
                <DateTime>
                  {`${orderDate.getDate()}.${orderDate.getMonth()}.${orderDate.getFullYear()}`}
                  <div>{`${orderDate.getHours()}:${orderDate.getMinutes()}`}</div>
                </DateTime>
                <Status>{order.completed ? "Закрыто" : "Ожидание"}</Status>
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
