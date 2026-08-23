import { BankCode, ServiceTypes } from "./enums"

export type Bank = {
    id:string,
    title: string,
    Code : BankCode,
    status : boolean,
    serviceTypes : ServiceTypes[]
}

export type CreateBankRequest = {
    name:string,
    bankcode:BankCode
}