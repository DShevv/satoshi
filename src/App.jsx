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
