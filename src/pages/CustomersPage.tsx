import { useQuery } from "@tanstack/react-query";
import { customerApi } from "../api/endpoints";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CustomerForm } from "../forms/Customer/CustomerForm";
import Dialog, { dialogRef, toggleDialog } from "../components/Dialog/Dialog";

type statusFilter = "all" | "active" | "inActive";

const status_options = [
  { value: "all", label: "همه" },
  { value: "active", label: "فعال" },
  { value: "inActive", label: "غیرفعال" },
] as const;

const CustomersPage = () => {
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["customers"],
    queryFn: customerApi.getAll,
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState<statusFilter>("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return data?.filter((c) => {
      if (filterState === "active" && !c.isEnable) return undefined;
      if (filterState === "inActive" && c.isEnable) return undefined;
      if (!q) return c;

      return c.tenantName.toLowerCase().includes(q);
    });
  }, [data, search, filterState]);

  return (
    <div className="container">
      <div className="title">
        <h2>ادمین-مشتریان</h2>
        <button
          className="button buttonPrimary"
          onClick={() => setOpenDialog(true)}
        >
          ایجاد مشتری جدید
        </button>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          {openDialog && (
            <CustomerForm
              isOpen={openDialog}
              onClose={() => setOpenDialog(false)}
            />
          )}
        </Dialog>
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
          <div className="segmentGroup">
            {status_options.map((opt) => (
              <button
                key={opt.value}
                aria-pressed={filterState === opt.value}
                onClick={() => setFilterState(opt.value)}
                className={
                  filterState === opt.value
                    ? "segment segmentActive"
                    : "segment"
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

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
            {filtered?.map((customer) => (
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

        {isFetching ||
          (isPending && (
            <div className="overlay">
              <span className="spinner" />
              <span>در حال جست‌وجو…</span>
            </div>
          ))}

        {isError && (
          <div className="error">
            <h3>{error.name}</h3>
            <p>{error.message}</p>
          </div>
        )}
        {filtered?.length === 0 && <p className="error">موردی یافت نشد.</p>}
      </div>
    </div>
  );
};

export default CustomersPage;
