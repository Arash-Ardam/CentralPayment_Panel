import { ReactNode, useEffect, useState } from "react";
import styles from "./AppShell.module.css";
import { useAuth } from "react-oidc-context";
import { Link, Links } from "react-router";
type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const auth = useAuth();
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <h3>پنل پرداخت</h3>
        <nav>
          <ul>
            <li>
              <Link to="/admin">داشبورد</Link>
            </li>
            <li>
              <Link to="/admin/customers">مشتری</Link>
            </li>
            <li>
              <Link to="/admin/banks">بانک ها</Link>
            </li>
            <li>
              <Link to="/admin/accounts">حساب ها</Link>
            </li>
            <li>
              <Link to="/admin/reports">گزارش ها</Link>
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
