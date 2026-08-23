export type Customer = {
    id: string,
    firstName : string,
    lastName: string,
    nationalCode : string,
    tenantName: string,
    isEnable: boolean,
    connectionString:string
};

export type CreateCustomerRequest = {
  tenantName: string;
  connectionString: string;
};