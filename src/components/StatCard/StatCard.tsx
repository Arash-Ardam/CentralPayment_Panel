import styles from "./StatCard.module.css";

type StatCardProps = {
  title: string;
  value: number;
  trend?: "up" | "down";
};

const StatCard = ({ title, value, trend }: StatCardProps) => {
  return (
    <div className={styles.statCardStyle}>
      <h3>{title}</h3>
      <p>{value.toLocaleString("fa-IR")} ریال</p>
      <p>
        نمودار رشد :
        {trend === "up" && <span className={styles.upTrend}>↑</span>}
        {trend === "down" && <span className={styles.downTrend}>↓</span>}
      </p>
    </div>
  );
};

export default StatCard;
