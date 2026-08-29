import { ReactNode, useEffect, useState } from "react";
import styles from "./AppShell.module.css";
import { useAuth } from "react-oidc-context";
import { Link, Links, NavLink } from "react-router";
import { setToken } from "../../api/apiClient";
type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const auth = useAuth();
  useEffect(() => {
    setToken(auth.user?.access_token ?? null);
  }, [auth.user]);

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <h3>پنل پرداخت</h3>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                داشبورد
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/customers"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                مشتری
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/banks"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                بانک ها
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/accounts"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                حساب ها
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/reports"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                گزارش ها
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <header className={styles.header}>
        <h3>داشبورد</h3>
        <p>
          نام کاربری: <strong>A.Ardam</strong>
        </p>

        <button
          onClick={() => {
            auth.signoutRedirect();
          }}
        >
          خروج
        </button>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AppShell;
