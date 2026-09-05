import { X } from "lucide-react";
import "../../assets/css/form.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customerApi } from "../../api/endpoints";
import {
  SetCustomerSettingsForm,
  SetCustomerSettingsRequest,
} from "../../api/types/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Dialog from "../../components/Dialog/Dialog";
import { InfoBadge } from "../../components/InfoBadge/InfoBadge";
type DetailFormProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  title: string;
};

export const DetailForm = ({ isOpen, onClose, id, title }: DetailFormProps) => {
  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: [`customers/${id}`],
    queryFn: () => customerApi.detail(id),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (input: SetCustomerSettingsForm) =>
      customerApi.setSettings(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`customers/${id}`] });
      reset();
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SetCustomerSettingsForm>({
    resolver: zodResolver(SetCustomerSettingsRequest),
  });

  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(true);

  return (
    <div>
      {(isFetching || isPending) && (
        <div className="overlay">
          <span className="spinner" />
          <span>در حال جست‌وجو…</span>
        </div>
      )}

      {isError && (
        <div className="error">
          <h3>{error.name}</h3>
          <p>{error.message}</p>
        </div>
      )}

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
            message={mutation.data}
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
          <p>جزییات مشتری : {title}</p>
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
          >
            <X size={16} />
          </button>
        </div>
        <div className="form body flex">
          <div className="formGroup grid">
            <label htmlFor="name">نام</label>
            <input
              id="name"
              type="text"
              defaultValue={data?.firstName ?? "---"}
              {...register("firstName")}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <div className="formGroup grid">
            <label htmlFor="lastName">نام خانوادگی</label>
            <input
              id="lastName"
              type="text"
              defaultValue={data?.lastName ?? "---"}
              {...register("lastName")}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="form body flex">
          <div className="formGroup grid">
            <label htmlFor="tenantName">نام مستاجر *</label>
            <input
              id="tenantName"
              type="text"
              defaultValue={data?.tenantName ?? "---"}
              disabled
            />
            <span className="paramNote">نام مستاجر در سیستم ثابت است</span>
          </div>
          <div className="formGroup grid">
            <label htmlFor="nationalId">شناسه ملی</label>
            <input
              id="nationalId"
              type="text"
              defaultValue={data?.nationalCode ?? "---"}
            />
          </div>
        </div>
        <div className="form body grid">
          <div className="formGroup">
            <label htmlFor="isEnable">وضعیت</label>
            <input id="isEnable" type="checkbox" checked={data?.isEnable} />
          </div>
        </div>
        <div className="form body grid">
          <div className="formGroup">
            <label htmlFor="connectionString">رشته اتصال</label>
            <textarea
              id="connectionString"
              defaultValue={data?.connectionString ?? "---"}
            />
          </div>
        </div>
        <div className="form footer">
          <button
            type="submit"
            className={
              mutation.isPending ? "submitButton disabled" : "submitButton"
            }
            disabled={mutation.isPending}
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
