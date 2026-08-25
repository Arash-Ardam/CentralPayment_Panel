import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "./auth/oidcConfig.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import RequireAuth from "./pages/RequireAuth.tsx";
import AppShell from "./components/AppShell/AppShell.tsx";
import AdminDashborad from "./pages/AdminDashborad.tsx";
import LoginPage from "./pages/LoginPage.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider
      {...oidcConfig}
      onSigninCallback={() => {
        window.history.replaceState({}, "", window.location.pathname);
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <RequireAuth role="Admin">
                <AppShell>
                  <AdminDashborad />
                </AppShell>
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
