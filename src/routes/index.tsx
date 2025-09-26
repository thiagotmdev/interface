import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer, type ToastContainerProps } from "react-toastify";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layout/AppLayout";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Transactions from "../pages/Transactions";
import TransactionsForm from "../pages/TransactionsForm";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  const toastConfig: ToastContainerProps = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "colored",
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/transacoes" element={<Transactions />} />
              <Route path="/transacoes/nova" element={<TransactionsForm />} />
            </Route>
          </Route>

          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
        <ToastContainer {...toastConfig} />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
