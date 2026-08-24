export type BankCode = "none" | "saman" | "tejarat" ;

export type ServiceTypes = "none" | "single" | "grouped";

export type OrderStatus = "none" | "drafted" | "submited" | "canceled" | "pending" | "done" | "rejected";

export type PaymentType = "none" | "single" | "grouped";

export type TransactionType = "none" | "internal" | "paya" | "satna" | "psp";

export type groupedTransactionStatus = "none" | "drafted" | "pending" | "waitForProvider" |
                                       "succeded" | "failed" | "canceled" | "rolledBack" | "rejected" 