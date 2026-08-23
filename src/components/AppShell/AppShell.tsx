import { ReactNode } from "react";
import styles from "./AppShell.module.css";
type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <h3>پنل پرداخت</h3>
        <nav>
          <ul>
            <li>
              <a href="#">داشبورد</a>
            </li>
            <li>
              <a href="#">مشتری</a>
            </li>
            <li>
              <a href="#">باتک ها</a>
            </li>
            <li>
              <a href="#">حساب ها</a>
            </li>
            <li>
              <a href="#">گزارش ها</a>
            </li>
          </ul>
        </nav>
      </aside>
      <header className={styles.header}>
        <h3>داشبورد</h3>
        <p>
          نام کاربری: <strong>A.Ardam</strong>
        </p>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AppShell;
