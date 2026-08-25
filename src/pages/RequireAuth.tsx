// src/auth/RequireAuth.tsx
import { Navigate } from "react-router";
import { useAuth } from "react-oidc-context";
import type { ReactNode } from "react";

type RequireAuthProps = {
  role: "Admin" | "User";
  children: ReactNode;
};

const RequireAuth = ({ role, children }: RequireAuthProps) => {
  const auth = useAuth();

  if (auth.isLoading) return <p>در حال بارگذاری…</p>;
  if (!auth.isAuthenticated) return <Navigate to="/" replace />;

  const roles = (auth.user?.profile.roles as string[]) ?? [];
  console.log(auth.user?.profile.roles);
  if (!roles.includes(role)) return <p>دسترسی ندارید</p>;

  return <>{children}</>;
};

export default RequireAuth;
