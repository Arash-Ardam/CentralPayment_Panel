type StartCardProps = {
  title: string;
  value: number;
  trend?: "up" | "down";
};

const StatCard = ({ title, value, trend }: StartCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value.toLocaleString("fa-IR")}</p>
      {trend != null && trend === "up" && <div>↑</div>}
      {trend != null && trend === "down" && <div>↓</div>}
    </div>
  );
};

const App = () => {
  return (
    <div dir="rtl">
      <StatCard title="تراکنش های دیروز" value={200000} trend="up"></StatCard>
      <StatCard title="تراکنش های امروز" value={1250} trend="down"></StatCard>
      <StatCard title="تراکنش های فردا" value={50000}></StatCard>
    </div>
  );
};

export default App;
