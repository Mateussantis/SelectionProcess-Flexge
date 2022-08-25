/* eslint-disable react/jsx-no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/Auth";

import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { PaginateProvider } from "./hooks/Paginate";
import { light } from "./styles/themes/light";
import { TableProvider } from "./hooks/Table";

export function App() {
  return (
    <AuthProvider>
      <PaginateProvider>
        <TableProvider>
          <ThemeProvider theme={light}>
            <ToastContainer />
            <BrowserRouter>
              <AppRoutes />
              <GlobalStyle />
            </BrowserRouter>
          </ThemeProvider>
        </TableProvider>
      </PaginateProvider>
    </AuthProvider>
  );
}
