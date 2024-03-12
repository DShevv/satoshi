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

const App = observer(() => {
  useEffect(() => {
    //  return () => stopStore();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<MainPage />}></Route>
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
