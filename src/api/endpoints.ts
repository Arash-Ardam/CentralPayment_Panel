import { apiRequest } from "./apiClient";
import { Customer } from "./types";
import { customerRoutes } from "./routes";
export const customerApi = {
    getAll : (token: string) => apiRequest<Customer[]>(customerRoutes.getAll,{token: token})
}