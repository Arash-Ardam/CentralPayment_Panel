import type { BankCode, ServiceTypes } from "./enums"

export type Bank = {
    id:string,
    title: string,
    code : BankCode,
    status : boolean,
    serviceTypes : ServiceTypes[]
}

export type CreateBankRequest = {
    name:string,
    bankCode:BankCode
}