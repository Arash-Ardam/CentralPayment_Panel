import {z} from "zod";

export type Customer = {
    id: string,
    firstName: string | null;
    lastName: string | null;
    nationalCode: string | null;
    tenantName: string,
    isEnable: boolean,
    connectionString : string
};

export const CreateCustomerRequest = z.object({
  tenantName: z.string()
               .min(3,"نام مستاجر حداقل 3 کاراکتر باید باشد")
               .max(50,"نام مستاجر حداکثر 50 کاراکتر است"),
  connectionString: z.string().nullable()
});


export type CreateCustomerForm = z.infer<typeof CreateCustomerRequest>;


export const SetCustomerSettingsRequest = z.object({
  customerId : z.string().min(1,"شناسه مشتری الزامی است"),
  firstName : z.string()
               .min(3,"نام  حداقل 3 کاراکتر باید باشد")
               .max(50,"نام  حداکثر 50 کاراکتر است"),
  lastName : z.string()
               .min(3,"نام خانوادگی حداقل 3 کاراکتر باید باشد")
               .max(50,"نام خانوادگی حداکثر 50 کاراکتر است"),
  nationalId : z.string()
               .min(10,"شناسه ملی 10 کاراکتر باید باشد")
               .max(10,"شناسه ملی 10 کاراکتر است"),                          
});

export type SetCustomerSettingsForm = z.infer<typeof SetCustomerSettingsRequest>;