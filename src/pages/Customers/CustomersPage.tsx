import { useQuery } from "@tanstack/react-query";
import { customerApi } from "../../api/endpoints";
import "./customerPage.css";

const CustomersPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["customers"],
    queryFn: customerApi.getAll,
  });
  return (
    <div className="container">
      <div>
        <h2>ادمین-مشتریان</h2>
      </div>
      <div className="card">فیلتر ها</div>
      <table className="table">
        <thead>
          <tr>
            <th> عنوان</th>
            <th>شناسه ملی</th>
            <th>نام مستاجر</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isPending && <p>در حال بارگزاری مشتریان !!!</p>}
          {isError && (
            <div className="error">
              <h3>{error.name}</h3>
              <p>{error.message}</p>
            </div>
          )}
          {data?.map((customer) => (
            <tr key={customer.id}>
              <td>
                {customer.firstName} {customer.lastName}
              </td>
              <td>{customer.nationalCode}</td>
              <td>{customer.tenantName}</td>
              <td>
                {customer.isEnable ? (
                  <span className="badge badgeActive">فعال</span>
                ) : (
                  <span className="badge badgeInactive">غیر فعال</span>
                )}
              </td>
              <td>
                <button className="button buttonPrimary">جزییات</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersPage;
