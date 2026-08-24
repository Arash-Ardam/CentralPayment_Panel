export type Customer = {
    id: string,
    firstName: string | null;
    lastName: string | null;
    nationalCode: string | null;
    tenantName: string,
    isEnable: boolean
};

export type CreateCustomerRequest = {
  tenantName: string;
  connectionString: string;
};