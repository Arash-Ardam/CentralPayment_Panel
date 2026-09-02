import { useForm } from "react-hook-form";
import { CreateCustomerForm, CreateCustomerRequest } from "../api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customerApi } from "../api/endpoints";
import { dialogRef, toggleDialog } from "../components/Dialog/Dialog";
import "./CustomerForm.css";
import { X } from "lucide-react";
export const CustomerForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (input: CreateCustomerForm) => customerApi.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      reset();
    },
    onError: () => reset(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCustomerForm>({
    resolver: zodResolver(CreateCustomerRequest),
  });

  return (
    <form className="customerForm">
      <div className="customerForm header">
        <p>افزودن مشتری جدید</p>
        <button
          type="button"
          onClick={() => {
            toggleDialog(dialogRef);
            reset();
          }}
        >
          <X size={16} />
        </button>
      </div>
      <div className="customerForm body">
        <div className="customerForm formGroup">
          <label htmlFor="tenantName">نام مشتری</label>
          <input {...register("tenantName")} placeholder="نام مستاجر..." />
          {errors.tenantName && <span>{errors.tenantName.message}</span>}
        </div>
        <div className="customerForm formGroup">
          <label htmlFor="connectionString">رشته اتصال</label>
          <textarea {...register("connectionString")} />
          {errors.connectionString && (
            <span>{errors.connectionString.message}</span>
          )}
        </div>
      </div>
      <div className="customerForm footer">
        <button
          type="submit"
          className="submitButton"
          onSubmit={() => {
            handleSubmit((data) => mutation.mutate(data));
            toggleDialog(dialogRef);
          }}
        >
          ثبت
        </button>

        <button
          type="button"
          onClick={() => {
            toggleDialog(dialogRef);
            reset();
          }}
        >
          انصراف
        </button>
      </div>
    </form>
  );
};
