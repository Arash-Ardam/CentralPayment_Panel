import { useAuth } from "react-oidc-context";
import { customerApi } from "../api/endpoints";
import StatCard from "../components/StatCard/StatCard";
import "../assets/css/Admin.css";
const AdminDashboard = () => {
  const auth = useAuth();
  return (
    <>
      <div className="grid">
        <StatCard title="تراکنش های دیروز" value={200000} changePercent={-60} />
        <StatCard title="تراکنش های امروز" value={1250} changePercent={11} />
        <StatCard title="تراکنش های فردا" value={50000} changePercent={0} />
      </div>
    </>
  );
};

export default AdminDashboard;
