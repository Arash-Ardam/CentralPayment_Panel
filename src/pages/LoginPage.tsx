import { useAuth } from "react-oidc-context";
import styles from "../App.module.css";
import { Navigate } from "react-router";

const LoginPage = () => {
  const auth = useAuth();

  if (auth.isLoading) return <p>در حال بارگذاری…</p>;
  if (!auth.isAuthenticated) {
    return (
      <button className={styles.login} onClick={() => auth.signinRedirect()}>
        ورود به سامانه
      </button>
    );
  } else {
    return <Navigate to={"/admin"} />;
  }
};

export default LoginPage;
