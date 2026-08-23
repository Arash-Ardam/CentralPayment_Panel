export type BankCode = "None" | "Saman" | "Tejarat" ;

export type ServiceTypes = "None" | "Single" | "Grouped";

export type OrderStatus = "None" | "Drafted" | "Submited" | "Canceled" | "Pending" | "Done" | "Rejected";

export type PaymentType = "None" | "Single" | "Grouped";

export type TransactionType = "None" | "Internal" | "Paya" | "Satna" | "PSP";

export type GroupedTransactionStatus = "None" | "Drafted" | "Pending" | "WaitForProvider" |
                                       "Succeded" | "Failed" | "Canceled" | "RolledBack" | "Rejected" 