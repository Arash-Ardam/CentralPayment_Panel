import { apiRequest } from "./apiClient";
import { Customer } from "./types";
import { customerRoutes } from "./routes";
export const customerApi = {
    getAll : () => apiRequest<Customer[]>(customerRoutes.getAll)
}