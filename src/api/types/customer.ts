import {z} from "zod";

export type Customer = {
    id: string,
    firstName: string | null;
    lastName: string | null;
    nationalCode: string | null;
    tenantName: string,
    isEnable: boolean
};

export const CreateCustomerRequest = z.object({
  tenantName: z.string()
               .min(3,"نام مستاجر حداقل 3 کاراکتر باید باشد")
               .max(50,"نام مستاجر حداکثر 50 کاراکتر است"),
  connectionString: z.string().nullable()
});


export type CreateCustomerForm = z.infer<typeof CreateCustomerRequest>;