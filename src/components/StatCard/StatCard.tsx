import "./StatCard.module.css";

type StartCardProps = {
  title: string;
  value: number;
  trend?: "up" | "down";
};

const StatCard = ({ title, value, trend }: StartCardProps) => {
  return (
    <div className="statCardStyle">
      <h3>{title}</h3>
      <p>{value.toLocaleString("fa-IR")}</p>
      {trend === "up" && <span className="upTrend">↑</span>}
      {trend === "down" && <span className="downTrend">↓</span>}
    </div>
  );
};

export default StatCard;
