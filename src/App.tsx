import AppShell from "./components/AppShell/AppShell";
import { Route, Routes } from "react-router";
import RequireAuth from "./pages/RequireAuth";
import AdminDashboard from "./pages/AdminDashborad";
import LoginPage from "./pages/LoginPage";
import CallbackPage from "./pages/CallbackPage";
import CustomersPage from "./pages/Customers/CustomersPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route
        path="/admin"
        element={
          <RequireAuth role="Admin">
            <AppShell>
              <AdminDashboard />
            </AppShell>
          </RequireAuth>
        }
      />
      <Route
        path="/admin/customers"
        element={
          <RequireAuth role="Admin">
            <AppShell>
              <CustomersPage />
            </AppShell>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
