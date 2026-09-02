import { apiRequest } from "./apiClient";
import { CreateCustomerForm, CreateCustomerRequest, Customer } from "./types";
import { customerRoutes } from "./routes";
import { ZodUUID } from "zod";
export const customerApi = {
    getAll : () => apiRequest<Customer[]>(customerRoutes.getAll),
    create : (input: CreateCustomerForm) => apiRequest<ZodUUID>(customerRoutes.create,{body : input,method: "POST"})
}