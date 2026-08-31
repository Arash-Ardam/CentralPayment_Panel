import { useQuery } from "@tanstack/react-query";
import { customerApi } from "../api/endpoints";
import { useState } from "react";
import { Search } from "lucide-react";

const CustomersPage = () => {
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["customers"],
    queryFn: customerApi.getAll,
  });

  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <div>
        <h2>ادمین-مشتریان</h2>
      </div>
      <div className="card">
        <div className="cardBody">
          <div className="tableSearchInput">
            <Search size={18} className="searchIcon" />
            <input
              type="text"
              placeholder="جستجو در عنوان..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="tableSearchStatus">
            <button type="button">همه</button>
            <button type="button">فعال</button>
            <button type="button">غیرفعال</button>
          </div>
        </div>
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
