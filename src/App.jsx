import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import QuotationPage from "./pages/QuotationPage";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/quotation" element={<QuotationPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
