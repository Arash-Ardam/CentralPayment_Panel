import AppShell from "./components/AppShell/AppShell";
import { Route, Routes } from "react-router";
import RequireAuth from "./pages/RequireAuth";
import AdminDashboard from "./pages/AdminDashborad";
import LoginPage from "./pages/LoginPage";
import CallbackPage from "./pages/CallbackPage";
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
    </Routes>
  );
};

export default App;
