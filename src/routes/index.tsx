import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layout/AppLayout";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Route>

          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
