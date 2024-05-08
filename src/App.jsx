import { ThemeProvider } from "styled-components";
import { ThemeDark } from "./theme/theme-dark";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import ExchangePage from "./pages/ExchangePage/ExchangePage";
import BuyPage from "./pages/BuyPage/BuyPage";
import SellPage from "./pages/SellPage/SellPage";
import SendPage from "./pages/SendPage/SendPage";
import WaitingPage from "./pages/WaittingPage/WaitingPage";
import { CabinetPage } from "./pages/CabinetPage/CabinetPage";
import { CabinetForm } from "./components/CabinetForm/CabinetForm";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

import globalStore from "./stores/global-store";

const App = observer(() => {
  const { stopStore } = globalStore;
  useEffect(() => {
    return () => {
      stopStore();
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<MainPage />}>
          <Route index element={<ExchangePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/send" element={<SendPage />} />
          <Route path="/waiting" element={<WaitingPage />} />
          <Route path="/cabinet" element={<CabinetPage />}>
            <Route index element={<CabinetForm />} />
            <Route path="/cabinet/history" element={<HistoryPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<>login</>} />
        <Route path="/register" element={<>register</>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={ThemeDark}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
});

export default App;
