import { useForm } from "react-hook-form";
import { CreateCustomerForm, CreateCustomerRequest } from "../../api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customerApi } from "../../api/endpoints";

import { X } from "lucide-react";
import { useState } from "react";
import { InfoBadge } from "../../components/InfoBadge/InfoBadge";
import Dialog from "../../components/Dialog/Dialog";
import "../../assets/css/form.css";
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
          <InfoBadge
            isSuccess={false}
            message={mutation.error.message}
            onDismiss={() => setIsErrorDialogOpen(false)}
            onClose={() => onClose()}
          />
        </Dialog>
      )}
      {mutation.isSuccess && isErrorDialogOpen && (
        <Dialog open={isOpen} onClose={() => onClose()}>
          <InfoBadge
            isSuccess={true}
            message="مشتری با موفقیت اضافه شد."
            onDismiss={() => setIsErrorDialogOpen(false)}
            onClose={() => onClose()}
          />
        </Dialog>
      )}
      <form
        className="form"
        onSubmit={handleSubmit((data) => mutation.mutate(data))}
      >
        <div className="form header flex">
          <p>افزودن مشتری جدید</p>
          <button
            type="button"
            onClick={() => {
              onClose();
              reset();
            }}
          >
            <X size={16} />
          </button>
        </div>
        <div className="form body">
          <div className="formGroup">
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
          <div className="formGroup">
            <label htmlFor="connectionString">رشته اتصال</label>
            <textarea id="connectionString" {...register("connectionString")} />
            {errors.connectionString && (
              <span>{errors.connectionString.message}</span>
            )}
          </div>
        </div>
        <div className="form footer">
          <button
            type="submit"
            className={
              !canSubmit || mutation.isPending
                ? "submitButton disabled"
                : "submitButton"
            }
            disabled={!canSubmit || mutation.isPending}
            onClick={() => setIsErrorDialogOpen(true)}
          >
            {mutation.isPending ? "در حال ثبت…" : "ثبت"}
          </button>

          <button
            type="button"
            onClick={() => {
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
