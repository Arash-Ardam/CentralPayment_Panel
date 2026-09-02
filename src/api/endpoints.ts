import { apiRequest } from "./apiClient";
import { CreateCustomerForm, Customer } from "./types";
import { customerRoutes } from "./routes";
export const customerApi = {
    getAll : () => apiRequest<Customer[]>(customerRoutes.getAll),
    create : (input: CreateCustomerForm) => apiRequest<string>(customerRoutes.create,{body : input,method: "POST"})
}