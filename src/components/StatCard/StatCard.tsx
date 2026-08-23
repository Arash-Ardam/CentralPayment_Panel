import styles from "./StatCard.module.css";

type StatCardProps = {
  title: string;
  value: number;
  changePercent: number;
};

const StatCard = ({ title, value, changePercent }: StatCardProps) => {
  return (
    <div className={styles.statCardStyle}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value.toLocaleString("fa-IR")} ریال</p>
      </div>
      <p className={styles.trend}>
        نمودار رشد :
        <div>
          <p>{changePercent.toLocaleString("fa-IR")} %</p>
          {changePercent > 0 && <span className={styles.upTrend}>↑</span>}
          {changePercent < 0 && <span className={styles.downTrend}>↓</span>}
          {changePercent === 0 && <span>---</span>}
        </div>
      </p>
    </div>
  );
};

export default StatCard;
