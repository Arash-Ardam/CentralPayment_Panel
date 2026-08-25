import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router";

const CallbackPage = () => {
  const auth = useAuth();
  if (auth.isLoading) return <p>در حال ورود…</p>;
  if (auth.error) return <p>خطا در ورود: {auth.error.message}</p>;

  const roles = (auth.user?.profile.roles as string[]) ?? [];
  return (
    <Navigate to={roles.includes("Admin") ? "/admin" : "/portal"} replace />
  );
};

export default CallbackPage;
