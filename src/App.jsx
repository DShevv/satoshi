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

const App = observer(() => {
  useEffect(() => {
    //  return () => stopStore();
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
