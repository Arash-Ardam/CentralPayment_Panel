import StatCard from "./components/StatCard/StatCard";
import styles from "./App.module.css";
import AppShell from "./components/AppShell/AppShell";
import { customerApi } from "./api/endpoints";
import { useAuth } from "react-oidc-context";
import { useState } from "react";
const App = () => {
  const [token, setToken] = useState("");

  const auth = useAuth();

  if (auth.isLoading) return <p>در حال بارگذاری…</p>;
  if (!auth.isAuthenticated) {
    return (
      <button className={styles.login} onClick={() => auth.signinRedirect()}>
        ورود به سامانه
      </button>
    );
  } else {
    return (
      <AppShell>
        <div className={styles.grid}>
          <StatCard
            title="تراکنش های دیروز"
            value={200000}
            changePercent={-60}
          />
          <StatCard title="تراکنش های امروز" value={1250} changePercent={11} />
          <StatCard title="تراکنش های فردا" value={50000} changePercent={0} />

          <button
            onClick={async () => {
              setToken(auth.user?.access_token ?? "");
              try {
                const data = await customerApi.getAll(token);
                console.log("موفق", data);
              } catch (error) {
                console.log("نا موفق", error);
              }
            }}
          >
            api test
          </button>
        </div>
      </AppShell>
    );
  }
};

export default App;
