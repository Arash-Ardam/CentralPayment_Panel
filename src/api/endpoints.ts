import { apiRequest } from "./apiClient";
import { CreateCustomerForm, Customer, SetCustomerSettingsForm } from "./types";
import { customerRoutes } from "./routes";
export const customerApi = {
    getAll : () => apiRequest<Customer[]>(customerRoutes.getAll),
    create : (input: CreateCustomerForm) => apiRequest<string>(
        customerRoutes.create,
        {
            body : input,
            method: "POST"
        }),
    detail : (id: string) => apiRequest<Customer>(customerRoutes.detail(id)),
    setSettings : (input : SetCustomerSettingsForm) => apiRequest<string>(customerRoutes.setSettings,{
        body:input,
        method : "POST"
    })  
}