import StatCard from "./components/StatCard/StatCard";

const App = () => {
  return (
    <div>
      <StatCard title="تراکنش های دیروز" value={200000} trend="up" />
      <StatCard title="تراکنش های امروز" value={1250} trend="down" />
      <StatCard title="تراکنش های فردا" value={50000} />
    </div>
  );
};

export default App;
