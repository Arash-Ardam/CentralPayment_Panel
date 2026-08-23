import StatCard from "./components/StatCard/StatCard";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.grid}>
      <StatCard title="تراکنش های دیروز" value={200000} trend="up" />
      <StatCard title="تراکنش های امروز" value={1250} trend="down" />
      <StatCard title="تراکنش های فردا" value={50000} />
    </div>
  );
};

export default App;
