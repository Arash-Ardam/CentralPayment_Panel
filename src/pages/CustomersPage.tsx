import { useQuery } from "@tanstack/react-query";
import { customerApi } from "../api/endpoints";

const CustomersPage = () => {
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["customers"],
    queryFn: customerApi.getAll,
  });
  return (
    <div className="container">
      <div>
        <h2>ادمین-مشتریان</h2>
      </div>
      <div className="card">
        <div className="cardHeader">
          <h3>فیلترها</h3>
        </div>
        <div className="cardBody">...</div>
      </div>
      {isError && (
        <div className="error">
          <h3>{error.name}</h3>
          <p>{error.message}</p>
        </div>
      )}
      <div className="tableWrapper">
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
            {data?.map((customer) => (
              <tr key={customer.id}>
                <td>
                  {customer.firstName} {customer.lastName}
                </td>
                <td>{customer.nationalCode ?? "---"}</td>
                <td>{customer.tenantName}</td>
                <td>
                  {customer.isEnable ? (
                    <span className="badge badgeActive">فعال</span>
                  ) : (
                    <span className="badge badgeInactive">غیر فعال</span>
                  )}
                </td>
                <td>
                  <button className="button buttonGhost">جزییات</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isFetching && (
          <div className="overlay">
            <span className="spinner" />
            <span>در حال جست‌وجو…</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomersPage;
