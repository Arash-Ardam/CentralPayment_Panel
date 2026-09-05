export const customerRoutes = {
    getAll : "/api/customers/getAll",
    create : "/api/customers/create",
    detail : (id: string) => `/api/customers/get/${id}`,
    setSettings : "/api/customers/setSettings"
}