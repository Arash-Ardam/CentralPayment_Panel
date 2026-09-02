import { useForm } from "react-hook-form";
import { CreateCustomerForm, CreateCustomerRequest } from "../../api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customerApi } from "../../api/endpoints";
import Dialog, {
  dialogRef,
  toggleDialog,
} from "../../components/Dialog/Dialog";
import "./CustomerForm.css";
import { X } from "lucide-react";
import { useState } from "react";
import { InforBadge } from "../../components/InfoBadge/InfoBadge";

type CustomerFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CustomerForm = ({ isOpen, onClose }: CustomerFormProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (input: CreateCustomerForm) => customerApi.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      reset();
      toggleDialog(dialogRef);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<CreateCustomerForm>({
    resolver: zodResolver(CreateCustomerRequest),
  });

  const customerName = watch("tenantName");
  const canSubmit = customerName && customerName.trim() !== "";
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(true);
  return (
    <div>
      {mutation.isError && isErrorDialogOpen && (
        <Dialog open={isOpen} onClose={() => onClose()}>
          <InforBadge
            isSuccess={false}
            message={mutation.error.message}
            onDismiss={() => setIsErrorDialogOpen(false)}
          />
        </Dialog>
      )}
      <form
        className="customerForm"
        onSubmit={handleSubmit((data) => mutation.mutate(data))}
      >
        <div className="customerForm header">
          <p>افزودن مشتری جدید</p>
          <button
            type="button"
            onClick={() => {
              toggleDialog(dialogRef);
              onClose();
              reset();
            }}
          >
            <X size={16} />
          </button>
        </div>
        <div className="customerForm body">
          <div className="customerForm formGroup">
            <div>
              <label htmlFor="tenantName">نام مشتری</label> <span>*</span>
            </div>
            <input
              id="tenantName"
              {...register("tenantName")}
              placeholder="نام مستاجر..."
            />
            {errors.tenantName && <span>{errors.tenantName.message}</span>}
          </div>
          <div className="customerForm formGroup">
            <label htmlFor="connectionString">رشته اتصال</label>
            <textarea id="connectionString" {...register("connectionString")} />
            {errors.connectionString && (
              <span>{errors.connectionString.message}</span>
            )}
          </div>
        </div>
        <div className="customerForm footer">
          <button
            type="submit"
            className={
              !canSubmit || mutation.isPending
                ? "submitButton disabled"
                : "submitButton"
            }
            disabled={mutation.isPending}
            onClick={() => setIsErrorDialogOpen(true)}
          >
            {mutation.isPending ? "در حال ثبت…" : "ثبت"}
          </button>

          <button
            type="button"
            onClick={() => {
              toggleDialog(dialogRef);
              onClose();
              reset();
            }}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};
